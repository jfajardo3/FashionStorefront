const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const route = require('./route/pages');
const path = require('path');
const app = express();

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', route);

mongoose.connect("mongodb+srv://kstub00:tHB1KxrlCpG4ADZr@cluster0.m5pa2kg.mongodb.net/fashdb", {useNewURLParser: true, useUnifiedTopology: true})
.then(() => {
    app.listen(4000, () => {
        console.log("Server is running on 4000")
    })
})
 