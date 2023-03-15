var config = require("./dbconfig");
const sql = require("mssql");
 
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
      
      let res = await pool.request().query("SELECT ProductID, Product, num_units, supplier FROM [dbo].[Inventory]");
      // select * from dbo.['Data File$']                                                                                                                                                                                                                                                                                                                                                                                

      return res.recordsets;
    } catch (error) {
      console.log(" mathus-error :" + error);
    }
  }




module.exports = {
  getdata: getdata,
  getdata_byQuery:getdata_byQuery,

};
