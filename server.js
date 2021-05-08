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

app.listen(4000, () => console.log ('App listenning on port 4000'))


