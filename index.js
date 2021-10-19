const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');

const router = require('./src/routes');

const { json, urlencoded } = express;
const app = express();
const port = process.env.PORT || 8080;

app.use(json());
app.use(urlencoded({ extended: false}));
app.use(morgan('dev'));

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use(router);

app.use('/', (req, res) => {
    res.send("this is an API, and you are a robot!");
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})