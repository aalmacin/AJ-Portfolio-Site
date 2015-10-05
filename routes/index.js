var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

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
        var message = "";
        if(req.query && req.query.status) {
          var message = (req.query.status === 'success') ? "Successfully sent an email!" : "There was an error with the email sent.";
        }
        res.render('contactMe', { title: 'Contact Me' , subtitle: '', active: 'contactMe' , message: message, success: (req.query.status === 'success')});
});
router.post('/contactEmail', function(req, res, next) {
        var transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                        user: 'almacinsitetest@gmail.com',
                        pass: 'userpass22'
                }
        });

        var mailOptions = {
                replyTo: req.body.email,
                from: req.body.email,
                to: 'almacinsitetest@gmail.com',
                subject: 'Portfolio Site: Message from ' + req.body.name + ' Datetime: ' + Date.now(),
                text: req.body.message
        };
        transporter.sendMail(mailOptions, function(error, info) {
                if(error) {
                        res.redirect('/contactMe?status=fail');
                }
                res.redirect('/contactMe?status=success');
        });
});

module.exports = router;
