var db = require("../bin/mysql");


module.exports = class cobros_model {
    
    listarCobros() {
      return new Promise(function(resolve, reject) {
        db.query(
          "SELECT * FROM cobros ;",
          function(error, resultados) {
            if (error) {
              return reject;
            }
            resolve(resultados);
          }
        );
      });
    }
};