addUserCustomer: async (req, res) =>{
    const {firstName, lastName, urlPic, email, phone, password, country, rol, google, googlePic} = req.body

    const emailExists = await UserBase.findOne({email: email})
    
    if (emailExists){ return res.json({success: false, message: "Este correo ya esta siendo usado."})}
    else{
          const hashedPassword =  bcryptjs.hashSync(password, 10)
          const userBase = new UserBase ({
          firstName, lastName, urlPic, email, phone, password:hashedPassword, country, rol
          })

          //File urlPic
          if(google !== 'true'){
             const {fileUrlPic}=req.files

             const extPic=fileUrlPic.name.split('.',2)[1]

             fileUrlPic.mv(`${__dirname}/../frontend/public/assets/usersPics/${userBase._id}.${extPic}`,error =>{
                if(error){
                   return res.json({success:false,respuesta:"Intente nuevamente..."})
                }
             })
             userBase.urlPic=`./assets/usersPics/${userBase._id}.${extPic}`
          }else{
             userBase.urlPic=googlePic
          }
             // Guardo en la base de datos el usuario base y luego lo voy a popular en el idUserBase para tener el resto de los datos         
             try{
                const newUserBase = await userBase.save()
                const idUserBase = newUserBase._id
                const userConsumer = new UserConsumer({
                   //_id:idUserBase,
                   idUserBase:idUserBase
                })
                userConsumer.save()
                .then(async newUserConsumer =>{
                   // Populo el UserBase dentro del UserProvider para obtener el usuario mas sus datos
                   const populateUserConsumer = await newUserConsumer.populate('idUserBase').execPopulate()

                   var token = jwtoken.sign({...populateUserConsumer}, process.env.SECRET_KEY, {})

                   return res.json({
                      success:true, 
                      response:{
                         token,
                         firstName: userBase.firstName,
                         urlPic: userBase.urlPic,
                         email: userBase.email,
                         idUser: userConsumer._id,
                         _id: newUserBase._id,
                         rol: userBase.rol
                      }})
                   })
                   .catch(error => {
                      return res.json({success:false, error})})
                   }
                   catch{
                      return res.json({success:false})
                   }}