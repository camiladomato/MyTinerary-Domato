const User = require ('../models/User')
const bcryptjs = require ('bcryptjs')
const jwt = require('jsonwebtoken')


const userControllers= {    
    cargarNuevoUsuario:async (req, res) => {
        const {name,lastName,email,password,urlImage,country} = req.body
        console.log(req.body)

        const existingUser = await User.findOne({email})


        var respuesta
        var error
        var userSaved

        var passwordHash = bcryptjs.hashSync(password, 10)
       
        if(!existingUser){
            try{
                userSaved = new User({name,lastName,email,passwordHash,urlImage,country})
                await userSaved.save()
                const token = jwt.sign({...userSaved}, process.env.SECRET_OR_KEY)
                respuesta = token
                }
            catch{
                error= "An error occurred while recording, please retry"
                }
        }
        else{
             error= "Error, the email is in use"
            }
        res.json({
            success:!error ? true : false,
            respuesta:{token: respuesta , urlImage: userSaved.urlImage , name: userSaved.name},
            error: error
        }) 
    },
    loguearUsuario: async (req, res) => {
        const {email,password} = req.body
        var respuesta
        var error

        const existingUser= await User.findOne({email})
        if (existingUser){
            const igualarClaves = bcryptjs.compareSync(password, existingUser.password)
            if(igualarClaves){
                respuesta= existingUser
            }
            else{
                error ="Incorrect user or password"
            }
        }
        else{
            error="Incorrect user or password"
        } 
    res.json({
        success: !error ? true : false,
        respuesta:{token: respuesta , urlImage: userSaved.urlImage , name: userSaved.name},
        error: error
        })
    },
    loginForzado:(req,res) => {
        res.json({succes:true , respuesta: {urlImage: req.user.urlImage , name: req.user.name}})
    }  

}
module.exports = userControllers

