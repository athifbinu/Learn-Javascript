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

// document.write(!(b=60))

  
// Array

// let food = ['biscut','tea','juce']

// console.log(
//     food
// ) 

// unshift and shift

// let a = ['1','2','3']

// console.log(a.unshift(4,5));
// console.log(a);

// concat

// let fruts = ['apple','orenge','grapes'];

// let name = ['car','bus','aeroplane'];

// let totel = fruts.concat(name);

// console.log(totel);

// slice

// let foods = ['rice','curry','chicken'];

// console.log(foods.slice(1,3));


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

//  var cycle = ['pedel','handle','speed'];

//  var removedArray = cycle.pop();

//  console.log(removedArray);


// Math object

// to find squre root of a number
// var a = 100;

// console.log(Math.sqrt(a));

// to find non negativa value

// var a =-100;

// console.log(Math.abs(a));

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

// console.log(value.developrs.persone[1].name);



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
// function cofeeMaking() {
//      console.log("step 1 : add water");    //function calling
//      console.log("step 1 : add suger");
//      console.log("step 1 : add milk");
//      console.log("step 1 : add add cofee powder");
// }
// console.log(food.kichen.tea.teamaking[0]);
// cofeeMaking();


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


// function red(color){
//      if (color=== 'green') {
//           return true;
          
//      }
//      else {
//           return false;
//      }
// }

// console.log(color);



                  // nested loop




// popup function

// function display() {
//      // confirm("Athif is hacked you");
//      // alert("Athid is hacked you");
//      // prompt("Athif is hacked you");

//      // document.body.style.backgroundColor="red"; to change background color on body

     
// }

//  function myfuction(z) {
//       let a = 5;
//       let b=z;
//       let c= a+b;
//       return a;
      
//  }

//  console.log(myfuction(10));
 
 

//        Object

//  let user = {

//      name : "Athif",
//      age:5,
//      location: "malapuram",

// }       

// console.log(user);

 
 

 
//     string methods

//   let name = "Muhammed Athif m";    

//   console.log(name.length);       to find length on a String



     // if else statement
   
//  let age = 10;

//  if (age===15) {
//       console.log(true);
      
//  }

// else{
//      console.log(false);
// }


// switch statement

// let fruts = "banana";

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


//   loop

//  let a=1;

//  for(a=1;a<=20;a++){
//       console.log(a);
//  }




//    events



                      //  cocat method

// const globel=["binu","aswin","anu","akshay"];
// const globelPlayer=["manu","hilu","anande","abaye"];

// const Athif=globel.concat(globelPlayer);

// console.log(Athif);

            //Array deastructuring

// const globelPlayer=["manu","hilu","anande","abaye"];

// const [a,b,c,d] = globelPlayer;

// console.log(b);

               // spred operatores
     
  
// const globelPlayer =["athif","binu","afin"];
// const globelPlayer1 =["ameen","abay","aswin"];


// // const player = [...globelPlayer,...globelPlayer1,"Testing+"];  adding to new in array

// console.log(player);

   
                 //   rest


// const animal =["dog","tiger","cat"];

// const  [a,b, ...rest]=arr;

// console.log(a,rest)


          //  arrow function


//  const Myfuc = hello => hello + 5;
//  console.log(Myfuc(5))


                           //  for each 

// const number = ["10","20","30","40","50","60","70"];


// number.forEach(function (num){
//      console.log(num*2);
// })
          


          //  Map

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

// const newarry=globelPlayer.map((value)=> value.name);

// console.log(newarry);


     // filter methood


     // const globelPlayer=[
     //           {
     //                name:"athif",
     //               age:12,
     //                place:"malapuram",
     //           },
     //          {
     //           name:"bilale",
     //          age:20,
     //           place:"caicurt",
     //          },
     //          {
     //             name:"bilale",
     //             age:20,
     //              place:"caicurt",
     //           }
          
          
               
     //      ];
          
     //        newarry = globelPlayer.filter((hello)=> hello.age===20);
          
     //       console.log(newarry);


     //       let array1=["100","250","700","800","700"];

     //       array1.filter((hai)=> hai.array1===700 );

     //       console.log(array1);




          //  reduce method

          // const array1=[10,20,40,50,60];

          // finelarray=array1.reduce((totel,values) => totel+values,0);
          // console.log(finelarray);










                         //   loop method

          // const array1=[10,20,40,50,60];

          // let totel=0;

          // for(let i=0;i<array1.length;i++){
          //      totel+=array1[i];
          // }

          // console.log(totel);
          


          // find method



          // const globelPlayer=[
          //                {
          //                     name:"athif",
          //                    age:12,
          //                     place:"malapuram",
          //                },
          //               {
          //                name:"bilale",
          //               age:20,
          //                place:"caicurt",
          //           },
          //                {
          //                  name:"bilale",
          //                  age:20,
          //                   place:"kochi",
          //                }
                    
                    
                         
               
          // ];


          // findmethod=globelPlayer.find((value)=> value.age===20);

          // console.log(findmethod);

               // sort method

               // const months = ['March', 'Jan', 'Feb', 'Dec'];
               //  months.sort();
               //  console.log(months);


               //  var numArray = [140000, 104, 99]; 
               //  numArray.sort(function(a, b) {
               //   return a - b;
               //     });

               //   console.log(numArray);




               // dom manipulation


               //   const numberarray = [10,20,30,40,50,60];

               //   const sortarry=numberarray.sort((a,b)=> b-a);
               //   console.log(sortarry);
   
               //  document.querySelector("h1").innerHTML = "Athif binu";




          //     javascript midiaquerys


          const heeader = document.querySelector("h1");


          console.log(heeader);



          const device = window.matchMedia("(max-width:767px)");
          if (device.matches){
               heeader.classList.add("banner");
          }


          










