const API_URL = 'http://localhost:5000';
let token = '';

// Register a user
async function register() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const response = await fetch(`${API_URL}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  const data = await response.json();
  alert(data.message);
}

// Login a user
async function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const response = await fetch(`${API_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  const data = await response.json();
  token = data.token;
  alert('Logged in successfully!');
}

// Get secret data
async function getSecretData() {
  const response = await fetch(`${API_URL}/api/auth/secret`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await response.json();
  alert(data.secret || data.message);
}
