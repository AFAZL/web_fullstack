const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

const methodoverride=require("method-override");

app.use(express.urlencoded({ extended: true })); 
app.use(methodoverride("_method"));

const { v4: uuidv4} = require('uuid');


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id:uuidv4(),
        username: "Afzal",
        content: "I love Coding",
    },
    {
        id:uuidv4(),
        username: "Tommy",
        content: "I love tommy",
    },
    {
        id:uuidv4(),
        username: "Mahi",
        content: "I love Cricket",
    },
];

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});



app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});


app.post("/posts",(req,res)=>{
    let {username,content}=req.body;
    let id=uuidv4()
    posts.push({id,username,content});
    res.redirect("/posts");
});


app.get("/posts/:id", (req, res) => {
    let {id}=req.params;
    let post=posts.find((p)=> id===p.id);
    console.log(post);
    res.render("show.ejs",{post});
});

app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p) => id === p.id);
    res.render("edit.ejs",{post});
});

app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=> id===p.id);
    let newcontent=req.body.content;
    post.content=newcontent;
    res.send("Working");
});

app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
    posts=posts.filter((p)=> id !== p.id);
    
    res.send("Working");
});

app.listen(port, () => {
    console.log("Listening to port!!!!!!");
});
