var connection = require("./connection.js");

var orm = {
    select: function(whatToSelect, tableInput) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [whatToSelect, tableInput], function(err, result) {
          if (err) throw err;
          console.log(result);
        });
      },
    selectwhere: function(tableInput, colToSearch, valOfCol) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function (err,result) {
            if (err) throw err;
            console.log(result);
        });
    },
    
    //orm console log all party names
    
    //orm console log all client names
    
    //orm console.log all grownup parties
    
    //orm console.log clients and their parties
};
module.exports = orm;