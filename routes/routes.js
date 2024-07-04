const express=require('express');
 const {sendEmail,getEmail} =require('../controllers/controller');
 const router=express.Router();
 


router.post('/sendEmail',sendEmail);
router.get('/getEmail',getEmail);


module.exports=router;