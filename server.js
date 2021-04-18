require('dotenv').config()
const express = require ('express')
const cors = require ("cors")
const router = require ("./routes/index")
const app = express()

require('./config/database')

app.use(cors())
app.use(express.json())//lo desconvierte de json
app.use("/api",router) //entra a api y al router , me lleva al index.js
app.listen(4000, () => console.log ('App listenning on port 4000'))

//.use entra a cualquiera de los metodos (get , post , put , delete)