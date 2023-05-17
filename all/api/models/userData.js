const mongoose=require('mongoose');

const address = mongoose.Schema({
    city: { type: String, required: true },
    street: { type: String, required: true },
    houseNumber: { type: Number,require:true}
    
});

const personalDataSchema=mongoose.Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    //title : {type:String,default:'Default title'},
    fullName : {type:String,required:true},
    idNumber : {type:String,required:true},
    address:[address],
    bearthDate: { type: Date,required:true },
    phon: { type: String,required:true },
    mobile:{type: String,required:true }

});

module.exports=mongoose.model('userdata',personalDataSchema)