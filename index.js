const express=require("express");
const app=express();
const path=require("path");

let port = 3000;

app.use(express.static("public"));

app.listen(port,()=>{
    console.log("App is Listening!!!!");
});

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

// app.use((req,res)=>{
//     console.log("Request received!!!!!!1");
//     res.render("home.ejs");
// });
// app.get("/",(req,res)=>{
//     console.log("Request received!!!!!!1");
//     res.send("This is a Reponse from home");
// });
// app.get("/affu",(req,res)=>{
//     console.log("Request received!!!!!!1");
//     res.send("This is a Reponse from affu bhaii");
// });
// app.get("*",(req,res)=>{
//     console.log("Request received!!!!!!1");
//     res.send("This is a default Reponse");
// });

app.get(("/ig/:username"),(req,res)=>{
    let {username}=req.params;
    const instadata=require("./data.json");
    const data=instadata[username];
    console.log(data);
    if(data){
        res.render("home.ejs",{data});
    }else{
        res.render("error.ejs");
    }
});