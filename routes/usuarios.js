var express = require("express");
var router = express.Router();
var usuarios_models = require("../Modelos/usuarios_models");
var um = new usuarios_models();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.get("/listar", function(req, res) {
  um.listarUsuarios(req.body).then(data => {
    res.json({ status: "true", mensaje: "usuarios", data: data });
  });
});
router.post("/listar", function(req, res) {
  um.listarUsuarios(req.body).then(data => {
    res.json({ status: "true", mensaje: "usuarios", data: data });
  });
});

router.post("/listarPorId", function(req, res) {
  console.log(req.body);
  um.listarUsuarioPorId(req.body).then(data => {
    if (data != null) {
      if (Object.keys(data).length === 0) {
        res.json({
          status: "false",
          message: "usuario no encontrado!!",
          data: {}
        });
      } else {
        res.json({ status: "true", mensaje: "usuario encontrado", data: data });
      }
    } else {
      res.json({ status: "false", mensaje: "Error" });
    }
  });
});

router.post("/listarPorCI", function(req, res) {
  console.log(req.body);
  um.listarUsuarioPorCI(req.body).then(data => {
    if (Object.keys(data).length === 0) {
      res.json({
        status: "false",
        message: "usuario no encontrado!!",
        data: {}
      });
    } else {
      res.json({ status: "true", mensaje: "usuario encontrado", data: data });
    }
  });
});

router.post("/guardar", function(req, res) {
  console.log(req.body);
  um.insertarAdministrador(req.body).then(data => {
    if (data.resultados == true) {
      res.json({ resultaldo: false, id_usuario: null });
    } else {
      res.json({
        resultaldo: true,
        mensaje: "Registro Exitoso!!!",
        id_usuario: data["insertId"]
      });
    }
  });
});
router.put("/modificar", function(req, res) {
  um.modificarAdministrador(req.body).then(data => {
    if (data.resultados == true) {
      res.json({ resultaldo: false, id_usuario: null });
    } else {
      res.json({
        resultaldo: true,
        mensaje: "Moficacion Exitoso!!!",
        id_usuario: req.body.id_usuario
      });
    }
  });
});

module.exports = router;
