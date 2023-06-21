
const Eggs = require('../models/eggs');
const User = require('../models/models');
const { handleErrors, createToken, maxAge } = require('./helper.js');


const signup_get = (req, res) => {
    res.render('signup');
};

// function that is called whenever a signup post is called
const signup_post = async (req, res) => {
    console.log(req.body);
    const { username, email, tel, pwd } = req.body;
    try {
        const user = await User.create({ username: username, email: email, tel: tel, pwd: pwd });
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: 1000 * maxAge });
        res.status(201).json({ user });
        console.log(user);

    } catch (err) {
        console.log(err);
        const errors = handleErrors(err);
        console.log(errors);
        res.status(400).json({ errors });

    }


};

// user accesses the login
const login_get = (req, res) => {
    res.render('login');
};

const login_post = async (req, res) => {

    const { email, pwd } = req.body;
    console.log(email, pwd)
    try {
        const user = await User.login(email, pwd)
        // creating a jwt token
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: 1000 * maxAge });
        res.status(200).json({ user: user._id });

    } catch (err) {
        console.log('Mistake detected')
        const errors = handleErrors(err);
        console.log(errors);

        res.status(400).json({ errors });

    }
};

// admin accesses the signin
const signin_get = (req, res) => {

    res.render('signin');
};

const signin_post = async (req, res) => {

    const { email, pwd } = req.body;
    console.log(email, pwd);
    try {
        const admin = await Admin.login(email, pwd)
        // creating a jwt token
        const token = createToken(admin._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: 1000 * maxAge });
        res.status(200).json({ Admin: admin._id });

    } catch (err) {
        console.log('Mistake detected')
        const errors = handleErrors(err);
        console.log(errors);
        res.status(400).json({ errors });
    }
};

// User accesses the production
const production_get = async(req, res) => {
    const eggsdata = await Eggs.find();
    res.render('production', {eggsdata:eggsdata});
};

const production_post = async (req, res) => {
    console.log("Hello here");
    console.log(req.body);

    const { productionDate, eggNoProduced } = req.body;
    console.log(productionDate, eggNoProduced );
    try {
        const eggs = await Eggs.create({ productionDate: productionDate, noOfEggs: eggNoProduced });
        console.log(eggs);
        // creating a jwt token
        
        // console.log(eggsdata);
        // res.send(eggsdata);
        const eggsdata = await Eggs.find();
        res.render('production', {eggsdata:eggsdata});
        // res.render('production');

    } catch (err) {
        console.log(err)
    }
};

const logout_get = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 })
    res.redirect('login');
};
const services_get = (req, res) => {
    res.render('services');
};

// User accesses the cart
const cart_get = (req, res) => {

    res.render('cart');
};
const eggs_get = (req, res) => {

    res.render('eggs');
};

// User accesses the vaccination
const vaccination_get = (req, res) => {

    res.render('vaccination');
};

// User accesses the about
const about_get = (req, res) => {

    res.render('about');
};

// User accesses the birds
const birds_get = (req, res) => {

    res.render('birds');
};

// User accesses the feeds
const feeds_get = (req, res) => {

    res.render('feeds');
};

// User accesses the adminindex
const adminindex_get = (req, res) => {
    res.render('adminindex');
};

// User accesses the sales
const sales_get = (req, res) => {
    res.render('sales');
};

// User accesses the purchase
const purchase_get = (req, res) => {

    res.render('purchase');
};

// User accesses the mortality
const mortality_get = (req, res) => {

    res.render('mortality');
};

// User accesses the feedPurchase
const feedPurchase_get = (req, res) => {

    res.render('feedPurchase');
};

// User accesses the feedPurchase
const consumption_get = (req, res) => {

    res.render('consumption');
};

// User accesses the payroll
const payroll_get = (req, res) => {

    res.render('payroll');
};

// exporting the functionality
module.exports = { signup_get, payroll_get, consumption_get, feedPurchase_get, mortality_get, signup_post, purchase_get, login_get, login_post, signin_get, signin_post, logout_get, services_get, cart_get, vaccination_get, about_get, eggs_get, birds_get, feeds_get, adminindex_get, production_get, production_post, sales_get }
