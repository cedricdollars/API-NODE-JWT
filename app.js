const mongoose = require('./src/services/mongoose.service');
const app = require('./src/services/express.service');

mongoose.connect();
app.start();