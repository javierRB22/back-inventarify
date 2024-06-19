const express = require("express");
const router = express.Router();

//Se establece la conexion a la base de datos
const connection = require('../db/connection');
// Rutas para Users

// Obtener todos los usuarios
router.get('/', (req, res) => {
   
  });


  router.post('/api/register', (req,res) => {
    
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;

    connection.query("INSERT INTO registro (email,name,password) VALUES (?,?,?)" , [email,name,password],
        (err, result) => {
            if(result){
                res.send(result);
            }else{
                res.send({message: "ENTER COORECT DETAILS!"})
            }
        }
    )


  })

  router.post('/api/login', (req,res) => {
    const email = req.body.email;
    const password = req.body.password;
    
    connection.query("SELECT * FROM registro WHERE email = ? AND password = ?" , [email,password],
        (err, result) => {
            if(err){
                res.setEncoding({err: err});
            }else{
                if(result.length > 0){
                    res.send(result);

                }else {
                    res.send({message: "CORREO O CONTRASEÑA INCORRECTOS"})
                }
                
            }
        }
    )


  })


      //Se exporta el modulo
module.exports = router;