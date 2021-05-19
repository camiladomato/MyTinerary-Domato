require('dotenv').config()
const express = require ('express')
const passport = require ('passport')
const cors = require ("cors")
const router = require ("./routes/index")


require('./config/database')
require('./config/passport')

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api",router)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname+"/client/build/index.html"))
    })
}

const port = process.env.PORT || 4000
const host = process.env.HOST || '0.0.0.0'


app.listen(port, host, () => console.log("app listening on port" +port+ "on" +host))

