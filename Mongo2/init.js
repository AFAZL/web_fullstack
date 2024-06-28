const mongoose=require("mongoose");
const Chat=require("./models/chat.js");

main().then(()=>{
    console.log("Connection Successfil!!!!!");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
};

// let allchats=[
//     {
//         from:"Tommy",
//         to:"Affu",
//         message:"Gym chalna hai na?",
//         created_at: new Date()
//     },
//     {
//         from:"Affu",
//         to:"Tommy",
//         message:"Ha na, Kya maray gay?",
//         created_at: new Date()
//     },
//     {
//         from:"Tommy",
//         to:"Affu",
//         message:"Back or Shoulder may say koi bhi ek!",
//         created_at: new Date()
//     },

// ];

// Chat.insertMany(allchats);

Chat.deleteOne({_id:'667d86d4bbbc457407899c12'});