const express=require('express');
const chalk=require('chalk');
const morgan=require('morgan');
const path=require('path')
const PORT=process.env.PORT || 3000;
const app=express();
console.log(PORT);
// const PORT=3000;    
app.use(morgan('tiny'))
app.use(express.static(path.join(__dirname,'/public')));
app.get('/',(req,res)=>{
    // res.render('index.ejs',{title:"Globomantics",data:['1','2','3','4','5','6']});
    // res.render('index.ejs');
    res.send("Hello")
});
app.listen(PORT,()=>{
    // console.log(`listening on port ${chalk.green(PORT)}`);
    console.log(`Server starting at port 3000,, Hello Sugar..${chalk.green(PORT)}`);
});