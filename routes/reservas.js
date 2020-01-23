var express = require("express");
var router = express.Router();
var reservas_models = require("../Modelos/reservas_models");
var rm = new reservas_models();
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/reservar", function(req, res, next) {
  
  rm.reservar(req.body).then(data => {
    if (data.resultados == true) {
      res.json({ resultaldo: false, id_reserva: null });
    } else {
      res.json({
        resultado: true,
        mensaje: "Registro Exitoso!!!",
        id_reserva: data["insertId"]
      });
    }
  }).catch(error => console.log(error))
});


router.put("/aprobar", function(req, res) {
  console.log(req.body);
  rm.aprobar(req.body).then(data => {
      res.json({
        resultado: true,
        mensaje: "Reserva Aprobada!!",
        id_reserva: req.body.id_reserva
      });
    
  }).catch(error => console.log(error))
});
 

router.post("/listarReservasPorcancha", function(req, res) {
     
    rm.listarReservasPorcancha(req.body).then(data => {
      if (data != null) {
        if (Object.keys(data).length === 0) {
          res.json({
            status: "false",
            message: "No Existen Reservas!!",
            data: {}
          });
        } else {
          res.json({ status: "true", mensaje: "Listado de Reservas", data: data });
        }
      } else {
        res.json({ status: "false", mensaje: "Error" });
      }
    });
  });

  router.post("/listarReservasPorIdReserva", function(req, res) {
     
    rm.listarReservasPorIdReserva(req.body).then(data => {
      if (data != null) {
        if (Object.keys(data).length === 0) {
          res.json({
            status: "false",
            message: "No Existen Reservas!!",
            data: {}
          });
        } else {
          res.json({ status: "true", mensaje: "Listado de Reservas", data: data });
        }
      } else {
        res.json({ status: "false", mensaje: "Error" });
      }
    });
  });


  router.post("/listarReservasPorfecha", function(req, res) {
     
    rm.listarReservasPorfecha(req.body).then(data => {
      if (data != null) {
        if (Object.keys(data).length === 0) {
          res.json({
            status: "false",
            message: "No Existen Reservas!!",
            data: {}
          });
        } else {
          res.json({ status: "true", mensaje: "Listado de Reservas", data: data });
        }
      } else {
        res.json({ status: "false", mensaje: "Error" });
      }
    });
  });


  router.post("/misReservas", function(req, res) {
    rm.misReservas(req.body).then(data => {
      if (data != null) {
        if (Object.keys(data).length === 0) {
          res.json({
            status: "false",
            message: "No Existen Reservas!!",
            data: {}
          });
        } else {
          res.json({ status: "true", mensaje: "Listado de Reservas", data: data });
        }
      } else {
        res.json({ status: "false", mensaje: "Error" });
      }
    });
  });

  

module.exports = router;
