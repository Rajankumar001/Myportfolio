const express=require('express');
 const {sendEmail,getEmail} =require('../controllers/controller');
 const router=express.Router();
 const cors = require('cors');
 router.use(cors(
  {
    origin:"https://chaudhary-portfolio.netlify.app/",
    optionsSuccessStatus: 200
  }
 ));
 router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://chaudhary-portfolio.netlify.app/');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


router.post('/sendEmail',sendEmail);
router.get('/getEmail',getEmail);


module.exports=router;