const router = require('express').Router();
const connection = require('../../../config/connection');

router.route('/')
.get(async (_req, res) => {
  // res.send('Hello');
  const query = 'SELECT * FROM users;';
  const [rows, fields] = await connection.query(query);
  // console.log('rows', rows);
  console.table(rows);
  // console.log('fields', fields);
  res.json(rows);
})
.post(async (req, res) => {
  const userInput = req.body;
  const query = 'INSERT INTO users SET ?;';
  const result = await connection.query(query, userInput);
  res.json(result);
});

module.exports = router;
