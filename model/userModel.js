const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    user_email :{
        type: String,
    },
    user_mobile_no:{
        type: Number
    },
});
module.exports = mongoose.model('user',userSchema);