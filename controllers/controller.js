const portfolio = require('../db/Schema');

const sendEmail = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        const user = new portfolio({
            name: name,
            email: email,
            message: message,
        });

        const sendUser = await user.save();
        res.send({ message: 'Message saved successfully', sendUser });
    } catch (err) {
        console.log("Error caught:", err);
        res.send('Internal Server Error');
    }
}
const getEmail=async(req,res)=>{
     const result=await portfolio.find({});
     res.send("message got successfully");
}
module.exports = { sendEmail,getEmail };
