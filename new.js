
// function no(){
//     let x=Math.floor(Math.random() * 6)+1;
//     console.log(x);
// }
// no();
// no();
// no();
// no();
// no();
// no();
// function avg(a , b,c){
//     console.log(`AVG of three number is ${(a+b+c)/3}`);
// }
// avg(10,20,30);
// function table(x){
//     let j=1;
//     for(let i=x;i<=x*10;i=i+x){
//         console.log(`${x} * ${j} = ${i}`);
//         j++;
//     }
// }
// table (10);
// function sum(x){
//     let ans=0;
//     for(let i=1;i<=x;i++){
//         ans=ans+i;
//     }
//     return ans;
// }
// function mul(req){
//     if(req=="even"){
//         let even=function(n){
//             console.log(n%2==0);
//         }
//         return even;
//     }
//     else{
//         let odd = function(n){
//             console.log(n%2!=0);
//         }
//         return odd;
//     }
// }
// let x=mul("even");
// x(4);
// const obj={
//     s1:50,
//     s2:60,
//     s3:80,
//     avg(){
//         let avg=(this.s1+this.s2+this.s3)/3;
//         console.log(`Avg is ${avg}`);
//     }
// }
// obj.avg();
// const arr=(a,b)=>{return a+b}
// setInterval (()=>{
//     console.log("Late hogayaaaaaaaaa");
// },5000);
// console.log("Jalde aaoooo");
// console.log("Kaha haiiiiiiiiiiiiiiii");
// console.log("Sorry Yaar");
// const id=setInterval(()=>{console.log("Hello World!!!!!!!!!!")},2000);
// setTimeout(()=>{clearInterval(id)},10000);
// let x=[1,2,3,4,5,6,7,1,5,6,7,1526,999999,123,555555555,20];
// console.log(x);

// let ans=x.every((n)=>{n%2==0});
// console.log(ans);

// let res=x.reduce((a,b)=>a+b);
// console.log(`Sum of all Even ni is ${res} `);

// let max=x.reduce((a,b)=>{
//     if(a<b){
//         a=b;
//     }
//     return a;
// });
// console.log(`The Max Value of an Array is ${max}`);

let array=[10,20,50,500,200,550];
// let f=array.every((x)=>x%10==0);
// console.log(f);
let a=array.reduce((a,b)=>{
    if(a>b){
        a=b;
    }
    return a;
});
console.log(a);


