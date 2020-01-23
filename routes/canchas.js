var express = require('express');
var router = express.Router();
var canchas_models = require('../Modelos/canchas_models')
var cm = new canchas_models()


router.get("/listarTodos",function(req,res){
      cm.listarTodos().then(data=>{ 
        if(data!=null){
            res.json({status:"true", mensaje: "listado de canchas", data:data});    
        }
        else{
            res.json({status:"false", mensaje: "Error"});
          }
        })
    });

router.post("/listarTodos",function(req,res){
    cm.listarTodos().then(data=>{ 
        if(data!=null){
        res.json({status:"true", mensaje: "listado de canchas", data:data});    
        }else{
            res.json({status:"false", mensaje: "Error"});
        }    
    })
});
 
router.post("/listarPorNombre",function(req,res){
    console.log(req.body);
    cm.listarPorNombre(req.body).then(data=>{ 
        res.json({status:"true", mensaje: "cancha encontrada", data:data});    
    })
});

router.post("/listarPorId",function(req,res){
    cm.listarPorId(req.body).then(data=>{ 
        res.json({status:"true", mensaje: "cancha encontrada", data:data});    
    })
});
router.post("/listarPorDistrito",function(req,res){
    cm.listarPorDistrito(req.body).then(data=>{ 
        res.json({status:"true", mensaje: "listado de canchas", data:data});    
    })
});


router.post("/guardar",function(req,res){ 
    console.log(req.body);
   cm.registrar(req.body).then(data=>{
      if(data.resultados==true){
        res.json( {"resultaldo":false , "id_cancha":null});
        }else{
            res.json( {"resultaldo":true ,"mensaje":"Registro Exitoso!!!" ,"id_cancha":data['insertId']});
        }
    })
});



router.put("/modificar",function(req,res){
    console.log(req.body);
    cm.modificar(req.body).then(data=>{
       if(data.resultados==true){
         res.json( {"resultaldo":false , "Mensaje":"Ocurrio un error al modificar","id_cancha":null});
         }else{
             res.json( {"resultaldo":true ,"mensaje":"Modificacion Exitosa" ,"id_cancha":req.body.id_cancha});
         }
     })
 
 });

module.exports = router;
