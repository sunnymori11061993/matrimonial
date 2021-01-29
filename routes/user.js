var express = require('express');
var router = express.Router();
var userSchema = require('../model/userModel.js');

router.post('/registerUser',async function(req,res){
    const {user_email, user_mobile_no} = req.body;
    var record = await new userSchema({
        user_email: user_email,
        user_mobile_no: user_mobile_no
    });
    record.save();
    if(record){
        res.status(200).json({status:true, data:[record], message:'Registered successfully'});
    }else{
        res.status(200).json({status:false, data:[], message:'Not registered successfully'});
    }
});


module.exports = router