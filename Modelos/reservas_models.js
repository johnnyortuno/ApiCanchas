var db = require("../bin/mysql");
var moment = require("moment");
var today = new Date();

// return new Promise(function(resolve, reject) {
//   var myDate2 = moment(today).format("YYYY/MM/DD");
module.exports = class reservas_model {
  reservar(params) {
    return new Promise(function(resolve, reject) {
      
      
      db.query(
        " INSERT INTO `reservas` (`id_cancha`, `id_usuario`, `fecha`, `hora_inicio`,`hora_fin`, `ci_quien_reserva`,`nombre_reserva`, `observaciones`,`modo_registro`,`estado`,`fecha_alta`,`fecha_update`)  VALUES (?,?,?,?,?,?,?,?,?,?,?,?) ",
        [
          params.id_cancha,
          params.id_usuario,
          params.fecha_reserva,
          params.hora_inicio,
          params.hora_fin,
          params.ci_quien_reserva,
          params.nombre_reserva,
          params.observaciones,
          params.modo_registro,
          params.estado,
          params.fecha_reserva,
          params.fecha_reserva
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

  listarReservasPorcancha(params) {
    return new Promise(function(resolve, reject) {
      db.query(
        "SELECT  `id_reserva`, `id_cancha`, `id_usuario`, `fecha`, `hora_inicio`, `hora_fin`, `ci_quien_reserva`,`nombre_reserva`, `observaciones`, `modo_registro`, `estado`, `fecha_alta`, `fecha_update` FROM `reservas` WHERE id_cancha= ? ; ",
        params.id_cancha,
        function(error, resultados) {
          if (error) {
            return reject;
          }
          resolve(resultados);
        }
      );
    });
  }
  listarReservasPorfecha(params) {
    return new Promise(function(resolve, reject) {
      db.query(
        "SELECT  * FROM `reservas` WHERE id_cancha= ?  and fecha = ?; ",
        [params.id_cancha,
          params.fecha
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
  listarReservasPorIdReserva(params) {
    return new Promise(function(resolve, reject) {
      db.query(
        "SELECT b.nombre , b.distrito , a.* FROM `reservas` a INNER JOIN `canchas` b on a.id_cancha =b .id_cancha WHERE id_reserva= ? ; ",
        
        [
          params.id_reserva
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

  misReservas(params) {
    return new Promise(function(resolve, reject) {
      db.query(
        "SELECT b.nombre , b.distrito , a.* FROM `reservas` a INNER JOIN `canchas` b on a.id_cancha =b .id_cancha WHERE `id_usuario`=? ; ",
        params.id_usuario,
        function(error, resultados) {
          if (error) {
            return reject;
          }
          resolve(resultados);
        }
      );
    });
  }
  // 1--> Reservado
  // 2--> Pagado 
  // 3--> Rechazado
  aprobar(params) {
    return new Promise(function(resolve, reject) {
      db.query(
        " UPDATE `reservas` SET `estado`=? , `fecha_update` =?  WHERE `id_reserva`=? ;",
        [
          params.estado,
          params.fecha_update,
          params.id_reserva
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


};

