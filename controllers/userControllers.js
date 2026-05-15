const User = require ('../models/User')
const bcryptjs = require ('bcryptjs')
const jwt = require('jsonwebtoken')

const userControllers = {
    cargarNuevoUsuario: async (req, res) => {
        const { name, lastName, email, password, urlImage, country } = req.body
        const existingUser = await User.findOne({ email })

        let respuesta, error, userSave // Usamos let para mejor práctica

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
            error = "Error, the email is in use"
        }

        res.json({
            success: !error,
            // Agregamos un chequeo: si hay error, mandamos null
            respuesta: !error ? { token: respuesta, urlImage: userSave.urlImage, name: userSave.name } : null,
            error: error
        })
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
            // LA CLAVE: Solo lee existingUser si !error es true
            respuesta: !error ? { token: respuesta, urlImage: existingUser.urlImage, name: existingUser.name } : null,
            error: error
        })
    },

    loginForzado: (req, res) => {
        // Corregí el typo de "succes" a "success"
        res.json({ success: true, respuesta: { urlImage: req.user.urlImage, name: req.user.name } })
    }
}
    module.exports = userControllers

