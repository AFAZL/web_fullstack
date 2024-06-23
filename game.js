let gameSeq=[];
let userSeq=[];

let btns=["red","yellow","green","purple"];

let started = false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game Started");
        started=true;

        levelup();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelup(){
    userSeq = [];
    level++;
    h2.innerText=`Level ${level} `;

    let randIdx=Math.floor(Math.random()*3);
    let color=btns[randIdx];
    let randbtn=document.querySelector(`.${color}`);
    gameSeq.push(color);
    console.log(gameSeq);
    btnFlash(randbtn);

}
function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length===gameSeq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over ! Your Score was <b>${level}</b><br> Press Any Key To Start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){document.querySelector("body").style.backgroundColor="white"},150);
        alert(`Total Score is : ${level} .`);
        resizeTo();
    }
}
function resizeTo(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

function btnPress(){
    let btn=this;
    userFlash(btn);

    usercolor=btn.getAttribute("id");
    userSeq.push(usercolor);
    console.log(usercolor);

    checkAns(userSeq.length-1);
}

let allbtn=document.querySelectorAll(".btn");

for(btn of allbtn){
    btn.addEventListener("click",btnPress);
}