var Order = require('./order');
const dboperation = require('./dboperation');

dboperation.getdata_byQuery().then(result => {
    console.log(result)
})