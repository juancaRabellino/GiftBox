const nodemailer = require('nodemailer')
const Paquete= require("../models/Paquete");
const regalosController ={
    
enviarRegalo: async (req, res) => {

    const {emailDestinatario,paquetes}=req.body;
    const {cuenta,nombre}=req.user;
    console.log(req.user)
    console.log(req.body)

    var transport = nodemailer.createTransport({
        port: 465,
        host: 'smtp.gmail.com',
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        },
        tls: {
            rejectUnauthorized: false
        }
    })
           
    var mailOptions = {
        from: `Gift BOX ${cuenta}`,
        to: emailDestinatario,
        subject: emailDestinatario,
        html:  `<div style="text-align:center; padding:20px; min-heigth: 250px; background-color:white">
        ${paquetes.map(paquete=>{
            Paquete.findById(paquete.idPaquete)
            .then(paqueteEncontrado=> ` <p> ${paqueteEncontrado.nombre} </p>`)})}
        <h5 style="color:#FF2A2A">Si usted no solicitó un cambio de contraseña, por favor, ignore este correo electrónico :</h5>
    </div>`
}

    transport.sendMail(mailOptions, (error, info) =>{
        if(error){res.status(500).send(error.message)
        }else {
            console.log("Email enviado.")
            res.status(200).json({respuesta:req.body})
        }})   
    }
}
module.exports= regalosController;