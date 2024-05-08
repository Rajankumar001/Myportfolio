const mongoose=require('mongoose');
const portfolioSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        unique:true,
       type:String,
       required:true,
    },
    message:{
        type:String,
        required:true,
    }
});
module.exports=mongoose.model('portfolio',portfolioSchema);