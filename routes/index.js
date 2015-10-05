var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/aboutMe', function(req, res, next) {
  res.render('aboutMe', { title: 'About Me' });
});
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});
router.get('/contactMe', function(req, res, next) {
  res.render('contactMe', { title: 'Contact Me' });
});

module.exports = router;
