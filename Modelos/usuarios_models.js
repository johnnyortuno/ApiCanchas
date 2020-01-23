var db = require("../bin/mysql");
var moment = require("moment");
module.exports = class usuarios_model {


  listarUsuarios(params) {
    
    return new Promise(function(resolve, reject) {
      db.query(" SELECT * FROM usuarios_admin  ;", function(error, resultados) {
        if (error) {
          return reject
        }
        resolve(resultados);
      });
    })


  }
  listarUsuarioPorId(params) {
    return new Promise(function(resolve, reject) {
      db.query(
        "SELECT * FROM usuarios_admin where id_user= ? ; ",
        params.id_usuario,
        function(error, resultados) {
          if (error) {
            return reject
          }
          resolve(resultados);
        }
      );
    })
  }
  listarUsuarioPorCI(params) {
    return new Promise(function(resolve, reject) {
      db.query("SELECT * FROM usuarios_admin where ci= ? ;", params.ci, function(
        error,
        resultados
      ) {
        if (error) {
          return reject
        }
        resolve(resultados);
      });
    }) 
  }

  insertarAdministrador(params) {
    var today = new Date();

    return new Promise(function(resolve, reject) {
      var myDate2 = moment(today).format("YYYY/MM/DD");

      db.query(
        " INSERT INTO `usuarios_admin`( `ci`, `nombres`, `apellidos`, `celular`, `email`, `distrito`, `zona`, `direccion`, `password`, `estado`, `remember_token`, `id_tipo_usuario`, `created_at`, `updated_at`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?) ;",
        [
          // params.id_usuario,
          params.ci,
          params.nombres,
          params.apellidos,
          params.telefono,
          params.email,
          params.distrito,
          params.zona,
          params.direccion,
          params.contrasena,
          params.activo,
          params.remember_token,
          params.tipoUsuario,
          myDate2,
          myDate2
        ],
        function(error, resultados) {
          if (error) {
            return reject
          }
          resolve(resultados);
        }
      );
    })
  }
  // connection.query('UPDATE users SET Name = ? WHERE UserID = ?', [name, userId])
  modificarAdministrador(params) {
    var today = new Date();
    return new Promise(function(resolve, reject) {
      db.query(
        "UPDATE `usuarios_admin` SET ci=?,nombres=?,apellidos=?,celular=?,email=?,distrito=?,zona=?,direccion=?,estado=?,id_tipo_usuario=? WHERE id_user=? ; " ,
        // "UPDATE `users` set  nombres= ?  WHERE id_user=?  " ,
        [
          params.ci,
          params.nombres,
          params.apellidos,
          params.telefono,
          params.email,
          params.distrito,
          params.zona,
          params.direccion,
          params.activo,
          params.tipoUsuario,
          params.id_usuario
        ],
        function(error, resultados) {
          if (error) {
            return reject
          }
          resolve(resultados);
        }
      );
    })
  }


};
