const AuthorController = require('../controllers/author.controller');  //Import the code from Code Block 1
module.exports = (app) => {
    app.get('/api/author', AuthorController.getAllAuthors);
    app.post('/api/author', AuthorController.createAuthor);
    app.get('/api/author/:id', AuthorController.getAuthor);
    app.put('/api/author/:id', AuthorController.updateAuthor);
    app.delete('/api/author/:id', AuthorController.deleteAuthor); //note: "id" here MUST match params in controller






}

