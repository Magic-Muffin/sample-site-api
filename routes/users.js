var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({token: "hgr8osghr7sgre78grosg8hr7es"});
});

module.exports = router;
