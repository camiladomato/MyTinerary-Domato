require('dotenv').config()
const express = require ('express')
const cors = require ("cors")
const router = require ("./routes/index")
const app = express()

require('./config/database')

app.use(cors())
app.use(express.json())
app.use("/api",router) 
app.listen(4000, () => console.log ('App listenning on port 4000'))

