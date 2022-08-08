const express = require('express');
const router = express.Router();

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

router.get('/favorites', (req, res)=>{
    res.render('favorites')
})

router.get('/outerwear', (req, res)=>{
    res.render('outerwear')
})

router.get('/sale', (req, res)=>{
    res.render('sale')
})

router.get('/sets', (req, res)=>{
    res.render('sets')
})

router.get('/shoes', (req, res)=>{
    res.render('shoes')
})

router.get('/tops', (req, res)=>{
    res.render('tops')
})

module.exports = router;