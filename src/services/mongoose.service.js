const mongoose = require('mongoose');

exports.connect = () => {
    mongoose.connect("mongodb+srv://admin:admin@cluster0-mdhiu.mongodb.net/<users>?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,

    }).then(() => {
        console.log("Successfully connected to the database");
    }).catch(err => {
        console.log('Could not connect to the database.', err);
        process.exit();
    });
}
