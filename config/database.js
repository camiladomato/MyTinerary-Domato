const mongoose = require ('mongoose')

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify: false
})
.then(()=> console.log("database connected"))
.catch (error => console.log(error))

