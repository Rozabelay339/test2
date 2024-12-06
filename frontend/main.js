document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    const todoForm = document.getElementById('todoForm');
    const todosList = document.getElementById('todos');
  
    registrationForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = {
        name: document.getElementById('name').value,
        surname: document.getElementById('surname').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        password: document.getElementById('password').value,
        address: document.getElementById('address').value,
      };
  
      try {
        const response = await fetch('http://localhost:5000/api/users/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
        const result = await response.json();
        if (response.ok) {
          alert('User registered successfully');
        } else {
          alert('Error: ' + result.message);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    });
  
    todoForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const task = document.getElementById('todoInput').value;
  
      try {
        const response = await fetch('http://localhost:5000/api/todos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
          body: JSON.stringify({ title: task, completed: false }),
        });
  
        const result = await response.json();
        if (response.ok) {
          const li = document.createElement('li');
          li.textContent = result.title;
          todosList.appendChild(li);
          document.getElementById('todoInput').value = '';
        } else {
          alert('Error: ' + result.message);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    });
  });
  