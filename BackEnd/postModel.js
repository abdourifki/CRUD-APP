const mongoose = require('mongoose');

const contactShema= new mongoose.Schema({
    firstName:"String",
    lastName:"String",
     email:"String",
     message:"String",
});


const Contact = mongoose.model('Contact',contactShema);

module.exports = Contact;
