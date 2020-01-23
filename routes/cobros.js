var express = require('express');
var router = express.Router();
var cobros_models = require('../Modelos/cobros_models')
var cmodels = new cobros_models()

router.get("/listarCobros",function(req,res){
  cmodels.listarCobros().then(data=>{ 
      if(data!=null){
          res.json({status:"true", mensaje: "listado de cobros", data:data});    
      }
      else{
          res.json({status:"false", mensaje: "Error"});
        }
      })
  });
  
module.exports = router;
