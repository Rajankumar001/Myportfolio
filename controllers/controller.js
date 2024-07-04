const portfolio = require('../db/Schema');

const sendEmail = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        console.log("Received request body:", req.body);
        const user = new portfolio({
            name,
            email,
            message,
        })
        const sendUser = await user.save();
        res.status(200).send({ 
            message: 'Message saved successfully',
             sendUser });
        console.log("success...")
    } catch (err) {
        console.log("Error caught:", err);
        res.status(500).send({ message:'Internal Major server error'});
    }
}
const getEmail=async(req,res)=>{
     const result=await portfolio.find({});
     console.log(result);
     res.status(201).send({
        success:true,
        message:"got message successfully",
        result
     })
}
module.exports = { sendEmail,getEmail };
