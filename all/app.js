const express= require('express');
const app=express();
const morgan=require('morgan');
const mongoose= require('mongoose');

mongoose.connect(`mongodb://localhost:27017/HomeTrialHadasim`,
{
    useNewUrlParser:true,
    useUnifiedTopology:true
}
);

mongoose.connection.on('connected',()=>{
    console.log('MongoDb Connected');
});

const usersRoutes=require('./api/routes/usersData ');
const coronasRoutes=require('./api/routes/coronaData');


app.use(morgan("dev"));



app.use(express.json());

//מילדוור נוסף על מנת לקבל טקסט באקס אקס אקס וכו
app.use(express.urlencoded({
    extended:false,
}));


app.use((req,res,next)=>{
    res.header("Access-Control-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept,Autorization");
    if(req.method==="OPTIONS"){
        res.header("Access-Control-Allow-Methodes","PUT,POST,DELETE,GET");
        return res.status(200).json({});
    }
    next();
}); 

//Routes
app.use('/users',usersRoutes);
app.use('/corona',coronasRoutes);


app.use((req,res,next)=>{
const error=new Error('Not Fount');
error.status=404;
next(error);
});
 
app.use((error,req,res,next)=>{
    res.status(error.status|| 500);
    res.json({
        error:{message:error.message}
    })
})

module.exports=app;