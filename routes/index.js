var express = require('express');
var router = express.Router();
var enviroment = process.env.NODE_ENV || "develop"

/* GET home page. */
router.get('/', function(req, res, next) {
  if(enviroment === 'staging'){
    res.render('error', { message: 'staging' });

  }else{
    res.render('index', { title: 'BoguiJS' });
  }
});

module.exports = router;
