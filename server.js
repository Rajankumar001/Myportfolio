const express =require('express');
const mongoose=require('mongoose');

const dotenv=require('dotenv');
const routes=require('./routes/routes');
const path=require('path');


// dotenv configuration
dotenv.config();
// rest object
const app=express();

// middleware
app.use(express.json());

 app.use(express.urlencoded({extended:true}));
 app.use(express.static(path.join(__dirname,'./client/dist')));
 app.get('*',function(req,res){
  res.sendFile(path.join(__dirname,'./index.html'));
 })
// mongoose connection
const DB=process.env.DB;
mongoose.connect(`${DB}portfolio?retryWrites=true&w=majority&appName=Cluster0`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>console.log("mongodb connected....."))
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
 