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

