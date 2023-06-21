// importing Destructuring of express to get Router function
const { Router } = require('express');
// const requireAuth = require('../middleware/authmiddleware');


// importing in the controller logic
const { signup_get, adminindex_get, payroll_get, consumption_get, feedPurchase_get, mortality_get, purchase_get, production_post, production_get, sales_get, eggs_get, birds_get, feeds_get, signup_post, signin_post, signin_get, login_get, login_post, logout_get, services_get, cart_get, vaccination_get, about_get } = require('../controllers/authcontroller');
const router = Router();


// Routes
// Gets signup page
router.get('/signup', signup_get);

// Gets eggs page
router.get('/eggs', eggs_get);

// Gets consumption page
router.get('/consumption', consumption_get);

// Gets payroll page
router.get('/payroll', payroll_get);

// Gets birds page
router.get('/birds', birds_get);

// Gets production page
router.get('/production', production_get);

// post production credentials for validation
// router.post('/production', production_post);

// Gets sales page
router.get('/sales', sales_get);

// Gets purchase page
router.get('/purchase', purchase_get);

// Gets mortality page
router.get('/mortality', mortality_get);

// Gets feeds page
router.get('/feeds', feeds_get);

// Gets feedPurchase page
router.get('/feedPurchase', feedPurchase_get);

// Gets adminindex page
router.get('/adminindex', adminindex_get);

// post signup details for storage
router.post('/signup', signup_post);

// Gets signin page
router.get('/login', login_get);

// post login credentials for validation
router.post('/login', login_post);

// Gets signin page
router.get('/signin', signin_get);

// post signin credentials for validation
router.post('/signin', signin_post);

// post eggs collected that day
router.post('/prodegg', production_post);

// About page
router.get('/services', services_get);

// Gets cart page
router.get('/cart', cart_get);

// Gets vaccination page
router.get('/vaccination', vaccination_get);

// Gets vaccination page
router.get('/about', about_get);

// post booking details
// router.post('/book',()=>{});

// Get Orders page by admin
// router.get('/orders',()=>{});

// Get feedback creation page by admin
// router.get('/feeds',()=>{});

// Get feedback page by user
// router.get('/feedback',()=>{});

// Gets Logout page
router.get('/logout', logout_get);

// exporting the router functions
module.exports = router;
