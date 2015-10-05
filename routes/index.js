var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' , subtitle: 'Welcome to my site.', active: 'home'});
});
router.get('/aboutMe', function(req, res, next) {
  res.render('aboutMe', { title: 'About Me' , subtitle: 'Everything you need to know', active: 'aboutMe' });
});
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' , subtitle: 'Some of my best works', active: 'projects' });
});
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' , subtitle: '', active: 'services' });
});
router.get('/contactMe', function(req, res, next) {
  res.render('contactMe', { title: 'Contact Me' , subtitle: '', active: 'contactMe' });
});

module.exports = router;
