var models  = require('../models');
var express = require('express');
var router  = express.Router();


router.get('/:name', function(req, res){
  models.Person.findAll({
    where:{ 
      name: req.params.name
      }
    }).then(function(person){
      res.render('profile/:name', {
        user_id: req.session.user_id,
        email: req.session.user_email,
        logged_in: req.session.logged_in,
        person: person
      });
    });
  });

module.exports = router;
