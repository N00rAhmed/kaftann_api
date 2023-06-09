const { json } = require('express');
var express = require('express');
var cors = require('cors');


var router = express.Router();
const sql = require("../dboperation");
const dboperation = require('../dboperation');
const { response } = require('../app');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//test connection
router.get('/testconnect', function(req, res, next) {
  sql.getdata();
  res.render('index', { title: 'Express' });
});


router.get("/getdata_byQuery", function (req, res, next) {
  sql.getdata_byQuery().then((result) => {
    res.json(result[0]);
  });
});

router.route("/orders").post((request, response) => {
  let order = {...request.body}
  dboperation.addorder(order).then(result => {
    response.status(201).json(result);
  })
});


module.exports = router;
