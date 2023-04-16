const Author = require('../models/author.model');    /* this is new */
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
module.exports.getAllAuthors = (request, response) => {
    Author.find({})
        .then(Authors => {
            console.log(Authors); //console logs are optional, but they are highly recommended for troubleshooting!
            response.json(Authors);
        })
        .catch(err => {
            console.log(err)

        })
}


          /* The method below is new */
module.exports.createAuthor = (request, response) => {
    // Mongoose's "create" method is run using our Authors model to add a new Authors to our db's Authors collection.
    // request.body will contain something like {firstName: "Billy", lastName: "Washington"} from the client
    Author.create(request.body) //This will use whatever the body of the client's request sends over
        .then(Author => response.json(Author))
        .catch(err => response.status(400).json(err));
}

module.exports.getAuthor = (request, response) => {
    Author.findOne({_id:request.params.id})
        .then(Author => response.json(Author))
        .catch(err => response.status(400).json(err));
}

module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true,
    runValidators: true}, )
        .then(updatedAuthor => response.json(updatedAuthor))
        .catch(err => response.status(400).json(err));
}

module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({ _id: request.params.id }) //note: "id" here MUST match id in corresponding route
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}



