// var express = require("express");
// const bodyParser=require('body-parser')
// const creativeModel = require("../modules/Creativemodels");
// var router = express.Router();
// router.use(bodyParser.json())  

// router.post("/signup",(req, res) => {
//   let user = new creativeModel({
//     name:req.body.name,
//     email:req.body.email,
//     phno:req.body.phno,
//     password:req.body.password,
//   });
//   user.save()
//   .then(response=>res.status(200).json({message:response}))
//   .catch(err=>res.status(401).json({message:err}))
// });
// router.post('/login',async(req,res)=>{
//   console.log(req.body)
//   try{
//     const{email,password}=req.body
//     let user=await creativeModel.findOne({email})
//     if(!user){return res.status(404).json()}
//     if(!user.isverifed){return res.status(401).json()}
//     let isMatched=await bcrypt.compare(password,user.password)
//     if(!isMatched){return res.status(401).json()}
//     res.status(200).json({message:"login successfully",username:user.username})
// }
//   catch(err){
//     res.status(500).json({err})
//   }
// })

// module.exports = router;


const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../modules/Creativemodels');

const router = express.Router();
router.use(bodyParser.json());

// User Signup
router.post('/signup', async (req, res) => {
    try {
        const { name, email, phno, password } = req.body;
        const emailFound = await userModel.findOne({ email });
        if (emailFound) return res.status(409).json({ message: "Email already registered" });

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new userModel({ name, email, phno, password: hashedPassword });
        await user.save();

        res.status(201).json({ message: "User created successfully" });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
});

// User Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });

        const isMatched = await bcrypt.compare(password, user.password);
        if (!isMatched) return res.status(401).json({ message: "Invalid credentials" });

        const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: '1h' });

        res.status(200).json({ message: "Login successful", username: user.name, token });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
});

const app = express();
app.use('/Creative', router);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

module.exports = router;
