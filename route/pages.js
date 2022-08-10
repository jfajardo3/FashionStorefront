const express = require('express');
const router = express.Router();
const Contact = require('./models/contact')

router.get('/', (req, res)=>{
    res.render('index')
})

router.get('/accessories', (req, res)=>{
    res.render('accessories')
})

router.get('/bottoms', (req, res)=>{
    res.render('bottoms')
})

router.get('/cart', (req, res)=>{
    res.render('cart')
})

router.get('/contact', (req, res)=>{
    res.render('contact')
})

router.get('/shoes', (req, res)=>{
    res.render('shoes')
})

router.get('/tops', (req, res)=>{
    res.render('tops')
})

router.post('/submitContact', (req, res) => {
    const contact = new Contact ({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        reason: req.body.reason,
        comment: req.body.comment
    });

    Contact.collection.insertOne(contact)
    .then(result => {
        res.render('contact')
    })
    .catch(err => console.log(err));
})

module.exports = router;