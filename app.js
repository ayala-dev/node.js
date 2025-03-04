
// require("dotenv").config()
// const express = require('express')
// const mongoose = require('mongoose')
// //const bodyParser = require('body-parser');
// const recipeRouter =require('./routes/recipeRoutes')
// //const app=express();
// //app.use(bodyParser.json());
// app.use('/recipe', recipeRouter);
// const PORT=process.env.PORT;
// mongoose.connect(process.env.CONECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(
//     ()=>app.listen(PORT,()=>console.log(`server runing on port ${PORT}`)))
//     .catch((error)=>console.log(error.message));

// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something went wrong!');
// });

const mongoose= require("mongoose")
require("dotenv").config()
const express = require("express")
const cors = require("cors")
const corsOptions = require("./config/corsOptions")
const connectDB = require("./config/dbConnection")
const PORT = process.env.PORT || 7001
const app = express()
connectDB()
//middlewares

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static("public"))
//routes

app.get("/",(req,res)=>{
res.send("this is the home page")
})

// app.listen(PORT, ()=>{
// console.log(`Server running on port ${PORT}`)
// })

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port
    ${PORT}`))
    })
    mongoose.connection.on('error', err => {
    console.log(err)
    })
    