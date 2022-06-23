// let num=150;
// let num2=100;
// let result=num+num2
// ;
 
//  document.write(result);


// uperscase and lover case

// let msg = "welcome to the your paradice"

// document.write(msg.toUpperCase());


// document.write(msg.toLowerCase());
// 'Athif Is indias largest billinire'.replace('indias','would') 

// variables

// var a = 50;

// if (a<10) {
//     document.write("The condition is true")
    
// }

// else
// {
//     document.write("Condition is falce")
// }


// logicel operators
// full checking
// logicel and operatores



//        and operator

//      let a = 10;
//      let b= 50;

//      console.log(a==101 && b==50);

     

// var a = 10;
// var b = 30;

// document.write(
//     a == 10 && b ==30
// );



// logicel or 
// any one is true checking


// var a = 10;
// var b = 30;

// document.write(
//     a == 10 || b ==20
// );


// logicel not operator

// var a= 50;
// var b= 60;

// console.log(!(b=60))

  
// Array

// let food = ['biscut','tea','juce']

// console.log(
//     food
// ) 

// unshift and shift

// let a = ['1','2','3']

// console.log(a.shift(4,5));
// console.log(a);

// concat

// let fruts = ['apple','orenge','grapes'];

// let name = ['car','bus','aeroplane'];

// let totel = fruts.concat(name);

// console.log(totel);


// let num1 =[10,20,30]
// let num2 =[40,50,60]
// let num3=num1.concat(num2);
// console.log(num3);


// let j=0;
// while (j<=10) {
//      console.log(j);
//      j++;
     
// }
    

//     2 dimentionel array

// function printArray(arr) {
//      for (var i=0;i<arr.length;i++){
//        for(var j=0;j<arr[0].length;j++){
//          console.log(arr[i][j]);
//        }   
//      }
//    }
//    var arr = [[1, 2],
//               [3, 4],
//               [5, 6]];
   
//    printArray(arr) 










//   object
// name =object and another are class

// let name = ['athif','binu','asiq'];
// console.log(name);




// loops

// for loops

// for(var i=1;i<=30;i++)
// {
//     console.log("Helo Athif");
// }




// Array methods push

// var cycle = ['pedel','handle',];

// cycle.push("break");
// console.log(cycle);






// pop

//  var cycle = ['pedel','gear','tyre'];

//  var removedArray = cycle.pop();

//  console.log(removedArray);



// Math object

// to find squre root of a number 
// var a = 10;

// console.log(Math.sqrt(a));

// to find non negativa value

// var a =-100;

// console.log(Math.abs(a));

// function negetive(a,b){
//      return Math.abs(a+b);

// }
// console.log(negetive(5,2));

//                     java script function


// function coading(Athif) {
//      console.log("Self learning");
//      console.log("Self learning");

//      console.log(' put ${Athif}Athif');
     

//      console.log("Self learning");
//      console.log("Self learning");
    
// }


// coading(Athif);


// null


// let value = {
//      developrs:{
//           persone: [
//                {
//                     name: "athif",
//                     age:10
//                },
//                {
//                     name:"binu",
//                     age:5
//                }
//           ]
//      }
// }

// console.log(value.developrs.persone[1].age);



// let food= {
//      kichen : {
//           tea :{
//                teamaking:[
//                    {
//                         step1:"add water",
//                         step2:"add sugaer",
//                         step3:"add milk",
//                         step4:"boiled",   
//                    },
//                        {
//                          step1:"add water",
//                          step2:"add sugaer",
//                          step3:"add milk",
//                          step4:"boiled cofee",    
//                    }
//                ]
//           }
//      }
// }
// console.log(food.kichen.tea.teamaking[1]);


// function cofeeMaking() {
//      console.log("step 1 : add water");    //function calling
//      console.log("step 1 : add suger");
//      console.log("step 1 : add milk");
//      console.log("step 1 : add add cofee powder");
// }






// function teamaking(){
//      console.log("step 1 : add water");    
//      console.log("step 1 : add suger");
//      console.log("step 1 : add milk");
//      console.log("step 1 : add add tea powder");
// }

//   if(cofeeMaking()){
//        console.log("yes Iam interested");
//   }
//   else{
//        console.log("iam not intrested");
//   }

//   cofeeMaking();





  
   



// let company={
//      datas:{
//           employedetales:[
//                {
//                     person1:{
//                          name:"athif",
//                          age:"5",
//                     },
//                     person2:{
//                          name:"binu",
//                          age:"10",

//                     }

//                }
//           ]
//      }
// }
// console.log(company.datas.employedetales);





//      let student1 = ['athif',24]
//      let student2 =['binu',10]

//      const totel=[student1,student2];
//      console.log(totel.concat(student1));





//                   nested loop

        

//          let totelarray=(arr,char)=> {
//               for(let i=0;i<arr.length;i++) {
//                    for(let j=1; j<=arr[i];j++){
//                         console.log(j);
//                    }
//               }
//          }

                 
//          totelarray([2,5,3],'#');



//      let totelarray=(arr,char)=> {
//           let charRepeat='';
//           for(let i=0;i<arr.length;i++) {
//                for(let j=1; j<=arr[i];j++){   
//                  charRepeat +=char
//                }
//                console.log(charRepeat);
//           }
//      }

             
//      totelarray([1,2,3,4,5,6,7,8,9,10],'*');



   







               










                  




// popup function

// function display() {
//      confirm("Athif is hacked you");
//      alert("Athid is hacked you");
//      prompt("Athif is hacked you");

     
     
// }

// const btn=document.querySelector('button');


// function clickme(){
//      prompt("you are hacked");
//      colorchange.style.backgroundColor('red');
//      btn.style.body.backgroundColor = 'red';
// }







//  function myfuction(z) {
//       let a = 5;
//       let b=z;
//       let c= a+b;
//       return a;
      
//  }

//  console.log(myfuction(10));
 
 

//        Object
// let user={
//      name:"Athif",
//      Age:"12",
//      Position:"Mern stack developer",
// }

// console.log(user);

 
 

 
//     string methods

//    let name = "Muhammed Athif m";    

//   console.log(name.length);      // to find length on a String



//      if else statement
   
//  let age = 10;

//  if (age===15) {
//       console.log(true);
      
//  }


// function numberchecking(num){
//      if(num % 2 ==0){
//           console.log(' is a even number');
//      }
//      else{
//           console.log(' is  a odd number')
//      }
// }

// numberchecking(10)
// numberchecking(5)





// switch statement

// let fruts = "heloo";

// switch (fruts) {
//      case "apple":
//           console.log("yes dindnt want");
//           break;
//      case "banana":
//           console.log("yes i want")
//           break;
//        default:
//             console.log("i dint get food");
     
// }

 
//    let foods="juce";

//   switch (foods) {
//        case "biriyani":
//             console.log("Rs : 90")
//             break;

//             case "meal":
//                  console.log("Rs is 70");
//                  break;

//                  case "mandi":
//                       console.log("Rs is 140");
//                       break
//                       default :
//                       console.log("They are not available");

//   }


//   loop

//  let a=1;

//  for(a=1;a<=20;a++){
//       console.log(a);
//  }




//    events



//                        cocat method

// const globel=["binu","aswin","anu","akshay"];
// const globelPlayer=["manu","hilu","anande","abaye"];

// const Athif=globel.concat(globelPlayer);

// console.log(Athif);

//             Array deastructuring

// const globelPlayer=["manu","hilu","anande","abaye"];

// const [a,b,c,d] = globelPlayer;

// console.log(b);

// const ArrDeastructuring=[1,2,3,4];
// const [a,b,c,d] = ArrDeastructuring;
// console.log(d);



//                spred operatores
     
  
// const globelPlayer =["athif","binu","afin"];
// const globelPlayer1 =["ameen","abay","aswin"];


//  const player = [...globelPlayer,...globelPlayer1,"Testing+"];  //adding to new in array

// console.log(player);



//  let num1 = [10,20,50];
//  let num2 =[70,80,90];

//  totel=[...num1,...num2];
//  console.log(totel);

   
//                    rest


// const animal =["dog","tiger","cat"];

// const arr = [a,b, ...rest]=arr;

// console.log(a,b,rest);

// function test(...remaining) {
//      console.log(remaining)
// }

// test(50,80,30,40);
 
 
 


//            arrow function


//  const Myfuc = hello => hello + 5;
//  console.log(Myfuc(5))


//                             for each 

// const number = ["10","20","30","40","50","60","70"];


// number.forEach(function (num){
//      console.log(num+2);
// })


// socity=[
//      {
//           name:"athif",
//           age:12,
//           place:"Koorad",
//      },
//      {
//           name:"binu",
//           age:15,
//           place:"malapuram",
//      },
//      {
//           name:"athifBinu",
//           age:18,
//           place:"india",
//      }
// ]

// socity.forEach((hello)=>{            //foreach method are call callback funtion
//      console.log(hello.place);
// })
          


//            Map

// const globelPlayer=[
//      {
//           name:"athif",
//           age:12,
//           place:"malapuram",
//      },
//     {
//      name:"bilale",
//      age:20,
//      place:"caicurt",
//     },
//     {
//        name:"bilale",
//        age:20,
//        place:"caicurt",
//     }


     
// ];

// const newarry=globelPlayer.map((value)=> value.age);

// console.log(newarry);


//      filter methood


//      const globelPlayer=[
//                {
//                     name:"athif",
//                    age:12,
//                     place:"malapuram",
//                },
//               {
//                name:"bilale",
//               age:20,
//                place:"caicurt",
//               },
//               {
//                  name:"bilale",
//                  age:20,
//                   place:"caicurt",
//                }
          
          
               
//           ];
          
//             newarry = globelPlayer.filter((hello)=> hello.age===12);
          
//            console.log(newarry);


//            let array1=["100","250","700","800","700"];

//            array1.filter((hai)=> hai.array1===700 );

//            console.log(array1);


//      let ages=["100","15","17","250"];
//      console.log(ages.filter(checkadualts));

     

//      function checkadualts(age){
//           return age<=18;
//      }
//                    foreach method

//                let num=["10","20"];

//                let sum=0;
//                num.forEach((number) => {
//                     sum = sum  + parseInt(number);
//               });
//                console.log(sum);

        


               
     





//            reduce method

//           const array1=[10,20];

//           finelarray=array1.reduce((totel,values) => totel+values);
//           console.log(finelarray);










//                            loop method

//           const array1=[10,20,40,50,60];

//           let totel=0;

//           for(let i=0;i<array1.length;i++){
//                totel+=array1[i];
//           }

//           console.log(totel);
          


//           find method


//      const globelPlayer=[
//                {
//                     name:"athif",
//                    age:12,
//                     place:"malapuram",
//                },
//               {
//                name:"bilale",
//               age:20,
//                place:"Kannur",
//               },
//               {
//                  name:"ashiq",
//                  age:40,
//                   place:"calicut",
//                }    
//           ];

//           const totel=globelPlayer.find((item)=>{
//                item.age<20;
//           });

//           console.log(totel);




       





//                sort method

//                const months = [80,50,1,12,10];
//                 months.sort();
//                 console.log(months);


//                 var numArray = [140000, 104, 99]; 
//                 numArray.sort(function(a, b) {
//                  return a - b;
//                    });

//                  console.log(numArray);




//                dom manipulation


//                  const numberarray = [10,20,30,40,50,60];

//                  const sortarry=numberarray.sort((a,b)=> b-a);
//                  console.log(sortarry);
   
//                 document.querySelector("h1").innerHTML = "Athif binu";




//               javascript midiaquerys


//           const heeader = document.querySelector("h1");


//           console.log(heeader);



//           const device = window.matchMedia("(max-width:767px)");
//           if (device.matches){
//                heeader.classList.add("banner");
//           }
//      Promise function
//           event loop   //callback function  //syncronus funtion

//           setTimeout(()=>{
//                console.log("running 2");
//           },5000);

//           console.log("running 1");
//           console.log("running 3");


     




          

//           function text(){
//                console.log("hello athif");
//           }
         

//           setTimeout(text,5000);


//           Promise function

//   const {resole,riject} = requre("promice");

//   function getName(){
//        return new Promise((resole,riject)=>{
//             setTimeout(()=>{
//                  resole("Hello athif")
//             },2000)
//        })
//   }



//   function getNumber(){
//      return new Promise((resole,riject)=>{
//           setTimeout(()=>{
//                resole("75940123460")
//           },3000)
//      })
// }



// Promise.all([getName(),getNumber()]).then((result)=>{
//      console.log(result)
// })




//      promice alle method

//      const Promise1= new Promise((resolve,riject)=>{
//           resolve(["javascript","java"]);
//      })
     
//      const Promise2= new Promise((resolve,riject)=>{
//           resolve(["React","NodeJs"]);
//      })
//                                  This is a normel callback method
//     Promise1.then((res)=>{
//          console.log(res);
//     })
//                          //     this funtion are call two tymes This problem are solved Promise all
//     Promise2.then((res)=>{
//      console.log(res);
// })

// const Promise1= new Promise((resolve,riject)=>{
//      resolve(["javascript","java"]);
// })

// const Promise2= new Promise((resolve,riject)=>{
//      resolve(["React","NodeJs"]);
//      riject("api failed");
// })                                                     //This is a promice method

//   const allpromice=Promise.all([Promise1,Promise2]);   // this is the result they call 

//  allpromice.then((res)=>{
//       console.log(res);                                 
//  })

//     allpromice
//     .then((res)=>{
//          console.log(res.flat());
//     })
//     .catch((err)=>{
//          console.log(err);

//     })
 





//        any methhod in promice


//       const Promise1= new Promise((resolve,Object) =>{
//            resolve(["javascript","java"]);
//       });
//       const Promise2=new Promise((resolve,Object) =>{
//            resolve(["react","anguler"]);
//       })
   

//        const helloAthif = Promise.any([Promise1,Promise2]);



//        helloAthif.then((res)=>{
//        console.log(res);
//        });


//      const screen = document.getElementById('screen');

//      function Btnclick(value)
//      {
//            screen.value+=value;
//      }


//      function clearBtn()
//      {   //  const Promise1= new Promise((resolve,Object) =>{
//            resolve(["javascript","java"]);
//       });
//       const Promise2=new Promise((resolve,Object) =>{
//            resolve(["react","anguler"]);
//       })
   

//        const helloAthif = Promise.any([Promise1,Promise2]);



//        helloAthif.then((res)=>{
//        console.log(res);
//        });
//           screen.value="";
//      }

//      function operationBtn()
//      {
//           const result=eval(screen.value);
//           screen.value=result;
//      }

//      let btn=document.querySelector('button');
//      let orderlist=document.querySelector('order-list');


// setTimeout(function(){
//      alert("Athif is hacked you");

// },5000);

//        call back function

// function order(){
//      document.body.style.backgroundColor='green';
//      alert("You Order is plsed Now")
// }
// const btn=document.querySelector('button');
// btn.addEventListener('click',order); 


//                     hosting

// catname("Tiger");

// function catname(name){
//      console.log("My cat Name is "+name);
// }

// Myname("Athif");
// function Myname(hello){
//      console.log("My name is Muhammed "+hello)
// }




// const graet= () =>{
//      console.log("hi");
// }

// graet();


//            callback funtion

//           function add(num1,num2,callback) {
//                let err=false
//                if(num1==0){
//                     err=true
//                }
//                callback(num1+num2,err)
//           }


//           add(0,20,(sum,err)=>{
//                if(err){
//                     console.log("first number is Zero");
//                }else{
//                     console.log(sum);
//                }
//           })
 

//           promice

// const { resolve } = require('promise');
// const promice=require('promise');

//           function add(num1,num2){
//                return new promice((resolve,riject)=>{
//                     if(num1==0){
//                          riject("The first number is zero");
//                     }
//                })

//           } 
//            add(10,20).then((sum)=>{     //add are recive In resolve
//                console.log(sum); 

//            }).catch((err)=>{            //catch are are resive in riject
//                console.log(err)
//           })
           
// const myPromise = new Promise((resolve, reject) => {
//      setTimeout(() => {
//        resolve('foo');
//      }, 300);
//    });
   
//     result=myPromise

//     console.log(result)


//    const promise = new Promise((resolve,riject)=>{
//         riject("success");                  //this is api
//    })

//    Promise                               //they are calling
//    .then((Response)=>{                   //promice are used to avoid call backfuntion
//         console.log(Response);
//    })
//    .catch((Error)=>{
//         console.log(Error)
//    })
    


//    const Promise = new Promise((resolve,riject)=>{
//      riject("feald");                  //this is api
// })


// promise.then((Response)=>{                //this is eerror funtion.this avvoid it used to catch metthod
//      console.log(Response)           //catch are  used to handle in error message
// }).catch((Error)=>{
//      console.log(Error)
// })












//       async/await



//    function getName(){
//         return new Promise((resolve,riject)=>{
//              setTimeout(()=>{
//                   resolve("Athif");     //api 1
//              },3000);
//         }) 
//    }

//    function getMobile(){
//      return new Promise((resolve,riject)=>{     
//           setTimeout(()=>{                                   //api 2
//                resolve("5265959526");
//           },2000);
//      })
// }
// Promise.all([getName(),getMobile()]).then((result)=>{
// console.log(result);
// })

// async function getUser(){
//      let name=await getName()             //awaite is waiting at that funtion                                  //async funtion omportent to create awaite
//      console.log(name);
//      let Mobile=await getMobile()
//      console.log(Mobile);

//  }
// getUser();



//             sorting

//             const prize=[100,1000,2500,1,25,50,2];
            
//             prize.sort();

//             const increseSort=prize.sort(
//                  (a,b) => a-b)
//                  console.log(increseSort);

//                  const decreasesort=prize.sort(
//                     (a,b) => b-a)
//                     console.log(decreasesort);



//                   find minum and maximum value 


      // const maximun=Math.max(10,20,50,80,100,500,200);
      // const Minimum=Math.min(10,20,50,80,100,500,200);




      // console.log(maximun,Minimum);


//      deastructuring

//      const obj1={
//           name:"Athif",
//           Place:"KOOrad",
//           Job:"Mern Stack Developer",
//      }

//      function hello(){
//           const {
//                name,
//                Place,
//                Job

//           }=obj1;
//           console.log(name,Place,Place);
//      }

//      hello();
          
//      this keyword

 

//      const person = {
//           fullName:'athif',
//           lastNmae:'binu',
//           Place:'Koorad',
//          fullName() {
//                console.log(this)
//           }
//      }
     
//   console.log(person.fullName());



// let a=document.querySelectorAll(".head1");

// a[0].innerHTML=("Text Changed")

// a[0].innerHTML=("Learn")
// a[1].style.color="red";
// a[2].style.backgroundColor="green";



// const result1=document.createElement("h1");


// function create(){
//     result1.innerHTML = "Athif is hacked you";
//     document.body.appendChild(result1);
// }


// function remove(){
//     result1.remove();
// }


// const result2=document.querySelector(".message");
// const teste1=document.querySelector(".test");


// function hello(){
//     result2.innerHTML=teste1
// }


// const textresult=document.getElementById("name");

// const clr=document.getElementById("btn");

// clr.addEventListener("click",changeclr);

// function changeclr(){
//     textresult.style.backgroundColor="red";
// }



//craeEliment
// const para=document.createElement("p");

// para.innerHTML = "This is a paragraphe";

// document.body.appendChild(para);





// function myfuction(){
//     const list = document.querySelector('.mylist');
//     list.removeChild(list.firstElementChild);

// }



// const Btnclick=document.querySelector(".btn");
// Btnclick.addEventListener("click",colorchange);


// function colorchange(){
//     document.body.style.backgroundColor = "green";
// }
// const removebtn=document.querySelector(".remove");

// removebtn.addEventListener("click",rmv);

// function rmv(){
//     document.body.style.backgroundColor = "";
// }



// const redbtn=document.querySelector(".red");
// const greenbtn=document.querySelector(".green");
// const yellowbtn=document.querySelector(".yellow");





// const removebtn=document.querySelector(".remove");



// redbtn.addEventListener("click",redclr);

// function redclr(){
//     document.body.style.backgroundColor ="red";
// }


// greenbtn.addEventListener("click",greenclr);

// function greenclr(){
//     document.body.style.backgroundColor="green";
// }


// yellowbtn.addEventListener("click",yellowclr);

// function yellowclr(){
//     document.body.style.backgroundColor="yellow"
// }


// redbtn.addEventListener("click",rsbtn);

// function rsbtn(){
//     document.body.style.backgroundColor="";
// }



// function valdate(){
//     var username=document.getElementById("username");
//     var email=document.getElementById("email")
//     var password=document.getElementById("password")
//     var cpassword=document.getElementById("cpassword")

//     if(username.value==""){
//         alert("muast have a   username");
//         document.form1.username.focus();
//         return false;
//     }
//     if(email.value==""){
//         alert("muast have a   email");
//         document.form1.email.focus();
//         return false;
//     }
//     if(password.value==""){
//         alert("muast have a   password");
//         document.form1.password.focus();
//         return false;
//     }
//     if(cpassword.value=="" || cpassword.value!=password.value){
//         alert("muast have a   conformation");
//         document.form1.cpassword.focus();
//         return false;
//     }
//     return true;
 
// }


// const emails=document.querySelector(".email");
// const submits=document.querySelector(".submit");


// submits.addEventListener("click",sub);

// function sun(){
//     if(emails==""){
//         alert("ples enter email adress");
//     }
// }
  
//  const screen=document.querySelector(".form-control");

// function clearBtn(){
//    screen.value="";
   
// }




 

// function validate(){
//     const username=document.getElementById("username").value;
//     const password=document.getElementById("password").value;
//     if(username=="admin" && password=="user")
//     {
//         alert("loging successdully");
//         return false;
//     }
//     else
//     {
//         alert("loging falied");
//     }
// }


// const form=document.getElementById("shop-form");
// const itemQty=document.getElementById('item-qty');
// const list=document.getElementById('list')
// const alert=document.getElementById('alert')




// const form =document.getElementById('shop-form');
// const ItemName=document.getElementById('item-name');
// const ItemQty=document.getElementById('item-qty');       //to fetching all html in to javascript
// const list = document.getElementById('list');






// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     if(itemQty.value =! ''){
//         const tr=document.createElement('tr');
//         const rand=Math.floor((Math.random() * 1000) +1); //To craete id Number in 1 to 1000 any number
//         tr.innerHTML = ` 
//         <td>${rand}</td>
//         <td>${itemQty.value}</td>
//         <td><button class="btn btn-danger">Deleat</button></td>
//         `

//     }
// })





// const Btnclick=document.querySelector('.submit');

// setTimeout(()=>{
//   Btnclick.style.transform=`translateX(100px)`;
//   setTimeout(()=>{
//     Btnclick.style.transform=`translateX(200px)`;
//     setTimeout(()=>{
//       Btnclick.style.transform=`translateX(300px)`;
//       setTimeout(()=>{
//         Btnclick.style.transform=`translateX(400px)`;
//       },2000)
//     },2000)
//   },2000)
// },1000)


// hoisting
// Myname("Athif");

// function Myname(result){
//   console.log("my Name is"+result);
// }






    


   
          