// CONNECT TO KAFTAN DB


const config = {
    user: "na",
    password: "kaftan",
    server: "DESKTOP-NKHJ1GI",
    database: "KaftanDatabase",
    options: {
      trustedconnection: true,
      enableArithAbort: true,
      instancename: "MSSQLSERVER",
      encrypt: false,

      cryptoCredentialsDetails: {
        minVersion: 'TLSv1'
    }

    },
    
    port: 1433
  };
   
  module.exports = config;
  


// let config = {
//   user: 'noora_database',
//   password: '123',
//   server: 'sql.bsite.net\MSSQL2016',
//   database: 'noora_database',
//   "options":{
//       instanceName: 'MSSQLSERVER',
//       "encrypt":true,
//       "enableArithAbort":true,
//       "trustServerCertificate": true,

//       cryptoCredentialsDetails: {
//         minVersion: 'TLSv1'
//     }

//      }
// };
// module.exports=config;

// let Connection = require ('tedious').Connection;
// let config = {
//   userName: "noora_database",
//   password: "123"
// };

// let myconnection = new Connection(config);

// myconnection.on('connect', function(err){
//   console.log('connection successful')
// })

// module.exports = config;

// const config = {
//     user: "sa",
//     password: "noor13",
//     server: "DESKTOP-NKHJ1GI",
//     database: "Avtag Data",
//     options: {
//       trustedconnection: true,
//       enableArithAbort: true,
//       instancename: "MSSQLSERVER",

//       cryptoCredentialsDetails: {
//         minVersion: 'TLSv1'
//     }

//     },
    
//     port: 1433
//   };
   
//   module.exports = config;
  