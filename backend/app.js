const express = require('express');
const morgan = require('morgan');
const pkg = require('./package.json')

const app = express();

app.set('pgk', pkg)
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.json({
        name: app.get('pgk').name,
        author: app.get('pgk').author,
        description: app.get('pgk').description,
        version: app.get('pgk').version
    })
})

module.exports = app;