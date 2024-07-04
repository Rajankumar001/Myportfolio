const express =require('express');
const mongoose=require('mongoose');

const dotenv=require('dotenv');
const routes=require('./routes/routes');
const path=require('path');
const cors = require('cors');
 


// dotenv configuration
dotenv.config();
// rest object
const app=express();

// middleware
app.use(express.json());

 app.use(cors({
  origin: 'https://chaudhary-portfolio.netlify.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Content-Length', 'Access-Control-Allow-Origin', 'Access-Control-Allow-Headers', 'Access-Control-Allow-Methods', 'Access-Control-Expose-Headers', 'Set-Cookie'],
  }));

 app.use(express.urlencoded({extended:true}));
 app.use(express.static(path.join(__dirname,'./client/dist')));
 path.join(process.cwd(),'client','dist','index.html');
 
// mongoose connection
const DB=process.env.DB;
mongoose.connect(`${DB}portfolio?retryWrites=true&w=majority&appName=Cluster0`).then(()=>console.log("mongodb connected....."))
.catch((err)=>{
  console.log("error caught ",err);
});



// routes
app.use("/portfolio",routes);
// port
 const PORT =8080;
//  listen
app.listen(PORT ,()=>{
    console.log(`app is listening on ${PORT}`);
});
 