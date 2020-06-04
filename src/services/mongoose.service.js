const mongoose = require('mongoose');

exports.connect = () => {
    mongoose.connect("mongodb://<user>:<mdp>@ds259117.mlab.com:59117/db-user", {
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
