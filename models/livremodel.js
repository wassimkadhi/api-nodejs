const mongoose = require('mongoose') ; 
const LivreModel =mongoose.model(
    "test",
    {
        author :{type : String,
        required:true }, 

        birthDate:{
            type:String ,
            required : true 
        },

        ville: {
            type:String , 
            required : true
        } , 

        date :{
            type :Date  ,
            default :Date.now
        }

    },
    "livre"
     
); 

module.exports = {LivreModel} ;