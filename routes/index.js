var express = require('express');
var router = express.Router();
var enviroment = process.env.NODE_ENV || "develop"

/* GET home page. */
router.get('/', function(req, res, next) {
  if(enviroment === 'production'){
    res.render('commingSoon');

  }else{
    res.render('index', { title: 'BoguiJS' });
  }
});

router.get('/commingSoon', function(req, res, next) {
    res.render('commingSoon');

});

module.exports = router;
