const nodemailer = require('nodemailer')
const Usuario = require('../models/Usuario')
const bcryptjs = require('bcryptjs')


  const passwordController = {

  resetearPassword: async (req, res) => {
    var errors = []
    const {cuenta} = req.body
    console.log(req.body)
    const emailValido = await Usuario.findOne({cuenta: cuenta})
    console.log(emailValido)
  
    if (!emailValido) {
        errors.push('El mail no coincide con nuestros registros')
        console.log("Llego!")
    }else{
        var transport = nodemailer.createTransport({
            port: 465,
            host: 'smtp.gmail.com',
            auth: {
                user: "grupoamindhub@gmail.com",
                pass: "grupoA1234"
            },
            tls: {
                rejectUnauthorized: false
            }
          })
          
        var email = emailValido.cuenta
        
        
        var mailOptions = {
            from: 'Gift BOX <grupoamindhub@gmail.com>',
            to: email,
            subject: 'Recupero de Contraseña',
            html: `<div><h3>Este email se ha enviado por una solicitud para restablecer la contraseña en la pagina Entre Lineas, si usted no lo solicio
            por favor ignore este correo, de lo contrario haga click en el boton de abajo</h3>
            <link href="https://localhost:4000/api/user/resetear-password/${email}"><button>"http://localhost:3000/recuperar-password"</button></link> </div>`
        }
        transport.sendMail(mailOptions, (error, info) =>{
            if(error){
                res.status(500).send(error.message)
            }else {
                console.log("Email enviado.")
                res.status(200).json({respuesta:req.body})
            }
        })
        
    }

   /*  return res.json({
        success: errors.length===0? true:false,
        errors: errors
        
    }) */
  }
}

module.exports = passwordController;

