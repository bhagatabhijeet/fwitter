const mysql = require('mysql2');
const router = require('express').Router();

router.get('/', (_req, res) => {
  res.send('Hello');
});

module.exports = router;
