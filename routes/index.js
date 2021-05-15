const express = require('express');
const router = express.Router();

const ExpressRedisCache = require('express-redis-cache')

const cache = ExpressRedisCache({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  expire: 10,
})

/* GET home page. */
router.get('/', cache.route(), function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
