var config = require("./dbconfig");
const sql = require("mssql");
const app = require("./app");
 
async function getdata() {
  try {
    let pool = await sql.connect(config);
    console.log("sql server connected...");
  } catch (error) {
console.log(" mathus-error :" + error);
  }
}


async function getdata_byQuery() {
    try {
      let pool = await sql.connect(config);
      
      let res = await pool.request().query("SELECT ProductID, ProductName, Units, Supplier FROM [dbo].[Inventory]");
      // select * from dbo.['Data File$']                                                                                                                                                                                                                                                                                                                                                                                

      return res.recordsets;
    } catch (error) {
      console.log(" mathus-error :" + error);
    }
  }

async function post (req, res) {

  try{
  const request = config.request();

  request
    .input("ProductName", sql.varchar(255), req.body.ProductName)
    .input("Units", sql.int(255), req.body.Units)
    .input("Supplier", sql.varchar(255), req.body.Supplier)

    const q = "insert into [dbo].[Inventory](ProductName, Units, Supplier) values(@ProductName, Units, Supplier)";
    const result = await request.query(q);
}catch (error) {
  console.log(" mathus-error :" + error);
}}


module.exports = {
  getdata: getdata,
  getdata_byQuery:getdata_byQuery,
  post:post
};
