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

  async function addorder (order) {
    try {
    let pool = await sql.connect(config);
    let insertProduct = await pool.request()
      // .input ('ProductID', sql.int, order.ProductID)
      .input ('ProductName', sql.varchar, order.ProductName)
      .input ('Units', sql.int, order.Units)
      .input ('Supplier', sql.varchar, order.Supplier)
      // .input ('City', sq1.varchar, order.City)
      .execute('Inventory')
    return insertProduct.recordsets;
    }
    catch (err){
    console.log(err);
  }
  }

module.exports = {
  getdata: getdata,
  getdata_byQuery:getdata_byQuery,
  addorder:addorder
};
