const express=require('express');
 const {sendEmail,getEmail} =require('../controllers/controller');
 const router=express.Router();
 const cors = require('cors');
 router.use(cors(
  {
    origin:"http://localhost:5173"
  }
 ));
 


router.post('/sendEmail',sendEmail);
router.get('/getEmail',getEmail);


module.exports=router;