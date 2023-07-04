
//EJS  a popular templating language for node js. and allows you to embed JavaScript code within your HTML templates.//
const express=require("express");
const bodyparser=require("body-parser");

const app=express();


app.use(bodyparser.urlencoded({extended : true}));
app.use(express.static("public"));

var items =["Try a coding question","eat some food","take some rest","again start coding"];
// app.set()used to modify application settings.

app.set("view engine","ejs");
// view engine is resposible for rendering templates and generating the final html to sent back to the client
// ejs ,pug,handlebars are some examples  of view engines.



app.get("/",function(req,res){
   var today=new Date();
  
   var option={
    weekday:"long",
    day:"numeric",
    month:"long"

   };
  var day=today.toLocaleDateString("en-us",option);

  /* var curr_day= today.getDay();
   var day="";

   switch(curr_day){
    case 0:
        day="sunday";
        break;
    case 1:
        day="monday";
        break;
    case 2:
        day="tuesday";
        break;
    case 3:
        day="wednesday";
        break;
    case 4:
        day="thrusday";
        break;
    case 5:
        day="friday";
        break;
    case 6:
        day="saturday";
        break;
    default:
        console.log("error"+curr_day);
   }
        */

   res.render("list",{kindofday:day, newlistitems:items});
   
});
       app.post("/",function(req,res){
        var item=req.body.newItem;
        items.push(item);
        res.redirect("/");
       });
   
   


















app.listen(3000, function(){
    console.log("server is running in port 3000");
});



//By setting the view engine to "ejs", you are informing Express that you will be using EJS as the template engine for your application. This means that you can create views or templates with a .ejs extension and use EJS syntax to embed dynamic content, control flow, and variables within those templates.

