const express = require('express')
const app = express();
const port = 5000;
const BASE_URL = process.env.PORT || 5000

const mongoDB = require('./db') 

app.use((req,res,next)=> {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next()
})

// https://64908e2944734c0c8c4f1346--keen-strudel-aadf79.netlify.app/

// const cors=require("cors");f
// const corsOptions ={
//    origin:'*', 
//    credentials:true,            
//    optionSuccessStatus:200,
// }

// app.use(cors(corsOptions))

mongoDB()

app.get('/', (req,res)=> {
    res.send('Hellow World')
})

app.use(express.json())
app.use('/api', require('./Routes/CreateUser'))
app.use('/api', require('./Routes/DisplayData'))

// if(process.env.NODE_ENV=='production') {
//     const path = require('path');
//     app.get('/', (req,res)=> {
//         app.use(express.static(path.resolve(__dirname, 'frontend', 'build')))
//         res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
//     })
// }

app.listen(port, ()=> {
    console.log('Running on PORT');
})

