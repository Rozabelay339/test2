# TODO-app

/src/server.js: The main server file for setting up the Express app.
/src/config/db.js: Handles the database connection.
/src/routes/todoRoutes.js: Defines routes for the TODO API.
/src/controllers/todoController.js: Contains logic for the TODO operations.
/src/models/Todo.js: Defines the Mongoose schema for the TODO items.
.env: Stores sensitive environment variables.


    express.Router(): Creates a new router object.
    router.get('/'): Defines the route for getting all TODOs.
    router.post('/'): Defines the route for creating a new TODO.
    router.put('/:id'): Defines the route for updating a TODO by ID.
    router.delete('/:id'): Defines the route for deleting a TODO by ID.
    module.exports: Exports the router so it can be imported in index.js.


    //rsvmHsUn9EVmDyeT


    Test User Registration:

    Use Postman to test POST http://localhost:5000/api/users/register with a JSON body like:

{
  "name": "Alice",
  "lastName": "Johnson",
  "email": "alice.johnson@example.com",
  "phone": "12345",
  "password": "alicepass123",
  "address": "789 Road"
}


Test User Login:

    Test POST http://localhost:5000/api/users/login to retrieve a token:

        {
          "email": "test@example.com",
          "password": "password"
        }

    Test TODOs:
        Use Postman for authenticated requests to /api/todos.

    Frontend Integration:
        Launch the frontend and ensure proper token storage and protected route handling.


TODO-app/
├── backend/ 
│  ├── config/
│  │   └── db.js             # Database configuration (e.g., MongoDB connection)
│  ├── controllers/
│  │   └── todoController.js # Handles the logic for CRUD operations on TODOs
│  ├── models/
│  │   └── Todo.js           # Defines the schema for TODO items
│  ├── routes/
│  │   └── todoRoutes.js     # Defines API routes for the TODO functionality
│  └── index.js              # Backend entry point, initializes server and routes
├── frontend/
│  ├── index.html            # Main HTML file for the frontend
│  ├── style.css             # CSS file for styling the frontend
│  ├── Main.js               # JavaScript file for frontend logic and API interaction
├── node_modules/            # Installed dependencies (auto-generated)
├── package.json             # Lists project dependencies and scripts
└── .env                     # Stores environment variables (e.g., DB URI, secret keys)

curl -X POST http://localhost:5000/api/users/register -H "Content-Type: application/json" -d '{"name":"John","surname":"Doe","email":"john.doe@example.com","phone":"123456789","password":"password123","address":"123 Street"}'

// Get all todos (protected, matches GET /api/todos/todos)
router.get('/todos', authenticateUser, todoController.getTodos);

// Add a new todo (protected, matches POST /api/todos/assign)
router.post('/assign', authenticateUser, todoController.addTodo);

// Update a todo (protected, matches PUT /api/todos/:id)
router.put('/todos/:id', authenticateUser, todoController.updateTodo);

// Delete a todo (protected, matches DELETE /api/todos/:id)
router.delete('/todos/:id', authenticateUser, todoController.deleteTodo);

TODO-app/
├── backend/ 
│  ├── config/
│  │   └── db.js             
│  ├── controllers/
│  │   └── todoController.js 
│  ├── models/
│  │   └── Todo.js           
│  ├── routes/
│  │   └── todoRoutes.js     
│  └── index.js              
│  ├── index.html            
│  ├── style.css             
│  ├── Main.js               
├── node_modules/            
├── package.json             
└── .env 