const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRouter = require('../routes/');

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use('/api/v1', apiRouter);

exports.start = () => {
    app.listen(4000, (err) => {
        if (err) {
            console.log(`Error:${err}`);
            process.exit(-1);
        }
        console.log('app is running on port 4000');
    })
}