const User = require ('../models/User')
const bcryptjs = require ('bcryptjs')
const jwt = require('jsonwebtoken')

const userControllers = {
    cargarNuevoUsuario: async (req, res) => {
        const { name, lastName, email, password, urlImage, country, from} = req.body
        const existingUser = await User.findOne({ email })

        let respuesta, error, userSave 

        if (!existingUser) {
            try {
                const passwordH = bcryptjs.hashSync(password, 10)
                userSave = new User({ name, lastName, email, password: passwordH, urlImage, country })
                await userSave.save()
                const token = jwt.sign({ ...userSave }, process.env.SECRET_OR_KEY)
                respuesta = token
            } catch (err) {
                error = "An error occurred while recording, please retry"
            }
        } else {
            if (from === 'google') {
                const token = jwt.sign({ ...existingUser }, process.env.SECRET_OR_KEY)
                respuesta = token
                res.json({
                    success: true,
                    respuesta: { token: respuesta, urlImage: existingUser.urlImage, name: existingUser.name },
                    error: null
                })
            } else {
                
                res.json({ success: false, respuesta: null, error: "Error, the email is in use" })
            }
        }
    },

    loguearUsuario: async (req, res) => {
        const { email, password } = req.body
        let respuesta, error
        const existingUser = await User.findOne({ email })

        if (existingUser) {
            const igualarClaves = bcryptjs.compareSync(password, existingUser.password)
            if (igualarClaves) {
                const token = jwt.sign({ ...existingUser }, process.env.SECRET_OR_KEY)
                respuesta = token
            } else {
                error = "Incorrect user or password"
            }
        } else {
            error = "Incorrect user or password"
        }

        res.json({
            success: !error,
            respuesta: !error ? { token: respuesta, urlImage: existingUser.urlImage, name: existingUser.name } : null,
            error: error
        })
    },

    loginForzado: (req, res) => {
        res.json({ success: true, respuesta: { urlImage: req.user.urlImage, name: req.user.name } })
    }
}
    module.exports = userControllers

