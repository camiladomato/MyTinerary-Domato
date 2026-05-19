const joi = require('joi')

const validator = (req, res, next) => {
 
    const schema = joi.object({
        name: joi.string().trim().min(2).max(20).required(),
        lastName: joi.string().trim().min(2).max(20).required(),
        email: joi.string().required().trim().email(),
        password: joi.string().min(5).trim().required().pattern(new RegExp('^[a-zA-Z0-9]')),
        urlImage: joi.string().required().trim(),
        country: joi.string().required(), 
        
        
        from: joi.string().required() 
    })

    const validation = schema.validate(req.body, { abortEarly: false })
    
 
    if (validation.error) {
        return res.json({ 
            success: false, 
            errores: validation.error.details.map(err => err.message) 
        })
    }
    
    next()
}

module.exports = validator