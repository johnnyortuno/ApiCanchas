var db = require("../bin/mysql");
var moment = require("moment");

module.exports = class canchas_model {
  listarTodos() {
    return new Promise(function(resolve, reject) {
      db.query(
        " SELECT id_cancha, nombre,longitud, latitud , distrito , direccion,telefono FROM canchas ;",
        function(error, resultados) {
          if (error) {
            return reject;
          }
          resolve(resultados);
        }
      );
    });
  }
  listarPorId(params) {
    return new Promise(function(resolve, reject) {
      db.query(
        " SELECT * , '08:00' as hora_inicio, '24:00' as hora_fin  FROM canchas where id_cancha=? ;",
        params.id_cancha,
        function(error, resultados) {
          if (error) {
            reject(error);
          }
          resolve(resultados);
        }
      );
    });
  }

  listarPorNombre(params) {
    return new Promise(function(resolve, reject) {
      db.query(
        " SELECT id_cancha, nombre,longitud, latitud , direccion, telefono  FROM canchas where nombre = ? ;",
        [params.nombre],
        function(error, resultados) {
          if (error) {
            return reject;
          }
          resolve(resultados);
        }
      );
    });
  }

  listarPorDistrito(params) {
    return new Promise(function(resolve, reject) {
      db.query(
        " SELECT id_cancha, nombre,longitud, latitud , distrito , direccion,telefono  , '08:00' as hora_inicio, '24:00' as hora_fin FROM canchas where distrito = ?  ;",
        [params.distrito],
        function(error, resultados) {
          if (error) {
            return reject;
          }
          resolve(resultados);
        }
      );
    });
  }

  registrar(params) {
    var today = new Date();
    return new Promise(function(resolve, reject) {
      var myDate2 = moment(today).format("YYYY/MM/DD");
      db.query(
        "INSERT INTO `canchas`( `nombre`, `categoria`, `longitud`, `latitud`, `tipo_escenario_deportivo`, `tiene_perimetral`, `tiene_tinglado_techo`, `tipo_pavimento`, `se_encuentra`, `administrado_por`, `graderias`, `banos`, `camerinos`, `acceso_libre`, `quien_realizo`, `estado`, `distrito`,`direccion`,`telefono`, `fecha_Alta`, `usuario_alta`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) ; ",
        [
          params.nombre,
          params.categoria,
          params.longitud,
          params.latitud,
          params.tipo_escenario_deportivo,
          params.tiene_perimetral,
          params.tiene_tinglado_techo,
          params.tipo_pavimento,
          params.se_encuentra,
          params.administrado_por,
          params.graderias,
          params.banos,
          params.camerinos,
          params.acceso_libre,
          params.quien_realizo,
          params.estado,
          params.distrito,
          params.direccion,
          params.telefono,
          myDate2,
          myDate2
        ],
        function(error, resultados) {
          if (error) {
            console.log(error);
            return reject;
          }
          resolve(resultados);
        }
      );
    });
  }

  modificar(params) {
    return new Promise(function(resolve, reject) {
      db.query(
        "UPDATE `canchas` SET `nombre`=?,`categoria`=?,`longitud`=?,`latitud`=?,`tipo_escenario_deportivo`=?,`tiene_perimetral`=?,`tiene_tinglado_techo`=?,`tipo_pavimento`=?,`se_encuentra`=?,`administrado_por`=?,`graderias`=?,`banos`=?,`camerinos`=?,`acceso_libre`=?,`quien_realizo`=?,`estado`=?,`distrito`=? ,`direccion`=? ,`telefono`=? WHERE id_cancha=? ;",
        [
          params.nombre,
          params.categoria,
          params.longitud,
          params.latitud,
          params.tipo_escenario_deportivo,
          params.tiene_perimetral,
          params.tiene_tinglado_techo,
          params.tipo_pavimento,
          params.se_encuentra,
          params.administrado_por,
          params.graderias,
          params.banos,
          params.camerinos,
          params.acceso_libre,
          params.quien_realizo,
          params.estado,
          params.distrito,
          params.direccion,
          params.telefono,
          params.id_cancha
        ],
        function(error, resultados) {
          if (error) {
            return reject;
          }
          resolve(resultados);
        }
      );
    });
  }
  eliminar(params) {}
};
