const mongoose=require('mongoose');

const dateVaccination = mongoose.Schema({
    date1: { type: Date, required: false },
    date2: { type: Date, required: false },
    date3: { type: Date, require:  false},
    date4: { type: Date, require: false}
    
});

const manufacturer = mongoose.Schema({
    manufacturer1: { type: String, required: false },
    manufacturer2: { type: String, required: false },
    manufacturer3: { type: String, require:  false},
    manufacturer4: { type: String, require: false}
    
});

const coronaVirusDesease = mongoose.Schema({
    positive: { type: Date, required: false },
    negative: { type: Date, required: false },

});

const coronaDataSchema=mongoose.Schema({
    
    idNumber : {type:String,required:true},
    
    timeOfVaccination:[dateVaccination],
    manufacturer:[manufacturer],
    coronaVirusDesease:[coronaVirusDesease]

});

module.exports=mongoose.model('coronaData',coronaDataSchema)