const mongoose=require("mongoose");

main().then(()=>{
    console.log("Connection Successfil!!!!!");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}
const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});

const User=mongoose.model("User",userSchema);

User.findOneAndDelete({name:"Kaandu"})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});

// User.updateOne({name:"AZfal"},{name:"Afzal"})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.findOne({age:21}).then((res)=>{console.log(res.name)});

// const user2 = new User({
//     name:"Denver",
//     email:"denver@gmail.com",
//     age: 20,
// });
// user2.save()
// .then((res)=>{console.log(res)})
// .catch((err)=>{console.log(err);});
// User.insertMany([
//     {name:"Kaandu",email:"kaandu@gmail.com",age:22},
//     {name:"Uzi",email:"uzi@gmail.com",age:27},
//     {name:"Mosco",email:"mosco@gmail.com",age:42},
// ]).then((res)=>{
//     console.log(res);
// });