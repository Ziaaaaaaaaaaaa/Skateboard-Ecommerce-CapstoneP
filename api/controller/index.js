const express = require('express');
const router = express()
const {verifyAToken} = require('../middleware/AuthenticateUser')
const { products, users } = require('../model')
const bodyParser = require('body-parser')

// ==================== PRODUCTS ====================== //

router.get('/products', (req, res) =>{
    products.fetchProducts(req, res)
})

router.get('/product/:prodID', (req, res) =>{
    products.fetchProduct(req, res)
})

router.post('/products', bodyParser.json(), (req, res) =>{
    products.addProduct(req, res)
})

router.patch('/product/:prodID', bodyParser.json(), (req, res) =>{
    products.updateProduct(req, res)
})

router.delete('/product/:prodID', (req, res) =>{
    products.deleteProduct(req, res)
})

// ==================== USERS ====================== //

router.get('/users', (req, res) =>{
    users.fetchUsers(req, res)
})

router.get('/user/:userID', (req, res) =>{
    users.fetchUser(req, res)
})

router.post('/register', bodyParser.json(), (req, res) =>{
    users.registerUser(req, res)
})

router.post('/login', bodyParser.json(), (req, res) =>{
    users.login(req, res)
})

router.patch('/user/:userID', bodyParser.json(), (req, res) =>{
    users.updateUser(req, res)
})

router.delete('/user/:userID', (req, res) =>{
    users.deleteUser(req, res)
})
// ==================== FILTER ====================== //

router.get('/sortprob', (req, res) =>{
    products.sortProd(req, res)
})

router.get('/sortprice', (req, res) =>{
    products.sortPrice(req, res)
})

router.get('/trucks', (req, res) =>{
    products.showTrucks(req, res)
})

router.get('/category/:category', (req, res)=>{
    products.probCategory(req, res)
})

router.get('/featured', (req, res) =>{
    products.featureProds(req, res)
})

router.get('/complete', (req, res) =>{
    products.completeSkateboards(req, res)
})

router.get('/decks', (req, res) =>{
    products.deckSkateboards(req, res)
})

module.exports = {
    express,
    router
}
