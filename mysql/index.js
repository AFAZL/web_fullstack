const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

const methodoverride=require("method-override");

app.use(express.urlencoded({ extended: true })); 
app.use(methodoverride("_method"));

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "insta",
    password: "afzal@123",
});

let createRandomUser = () => {
    return [
        faker.string.uuid(), // Updated method
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password(),
    ];
}

app.get("/", (req, res) => {
    let q = `SELECT count(*) from user`; // Updated query to limit results to 5 rows
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let count=result[0]["count(*)"];
            console.log(count);
            res.render("home.ejs",{count});
        });
    } catch (err) {
        console.log(err);
        res.send("Error in Database");
    }
});

app.get("/user",(req,res)=>{
    let q="select * from user limit 10";
    try {
        connection.query(q, (err, users) => {
            if (err) throw err;
            console.log(users);
            // res.send(result);
            res.render("showusers.ejs",{users});
        });
    } catch (err) {
        console.log(err);
        res.send("Error in Database");
    }
});

app.get("/user/:id/edit",(req,res)=>{
    let {id}=req.params;
    let q=`select * from user where id= '${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user=result[0];
            res.render("edit.ejs",{user});
        });
    } catch (err) {
        console.log(err);
        res.send("Error in Database");
    }
});

app.patch("/user/:id",(req,res)=>{
    let {id}=req.params;
    let { password:formpassword ,username: formusername}=req.body;
    let q=`select * from user where id= '${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user=result[0];
            if(formpassword != user.password){
                res.send("Wrong Password!!!!!");
            }else{
                let q2=`update user set username= '${formusername}' where id= '${id}'`;
                connection.query(q2, (err, result) => {
                    if(err) throw err;
                    res.redirect("/user");
                });
            }
        });
    } catch (err) {
        console.log(err);
        res.send("Error in Database");
    }
});

app.delete("/user/:id", (req, res) => {
    let { id } = req.params;
    let q = `DELETE FROM user WHERE id = '${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            res.redirect("/user");
        });
    } catch (err) {
        console.log(err);
        res.send("Error in Database");
    }
});

app.get("/user/new", (req, res) => {
    res.render("adduser");
});



app.listen(3000, () => {
    console.log("Server is working");
});


