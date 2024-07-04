const express=require('express');
 const {sendEmail,getEmail} =require('../controllers/controller');
 const router=express.Router();
 const cors = require('cors');
 router.use(cors(
  {
    origin:"http://localhost:5173",
    optionsSuccessStatus: 200
  }
 ));
 router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


router.post('/sendEmail',sendEmail);
router.get('/getEmail',getEmail);


module.exports=router;