var express = require('express');
var router = express.Router();

/**
 * Route for Landing Page
 * 
 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/**
 * Route for home Page
 * 
 */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

/**
 * Route for Report Page
 * 
 */
router.get('/report', function(req, res, next){
  res.render('report');
});

/**
 * Route for Reported Page
 * 
 */
router.get('/reported', function(req, res, next){
  res.render('reported');
});


/**
 * Route for About Page
 * 
 */
router.get('/about', function(req, res, next){
  res.render('about');
});

/**
 * Route for Contact Page
 * 
 */
router.get('/contact', function(req, res, next){
  res.render('contact');
});

module.exports = router;
