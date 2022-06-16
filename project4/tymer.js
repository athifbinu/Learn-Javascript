
  const counter=document.getElementById('counter');           //screen
  const incrementBtn=document.getElementById('Incremet');
  const DecrementBtn=document.getElementById('Decrement');
  const ResetBtn=document.getElementById('Reset');
 


  let counterValue=0;

  incrementBtn.addEventListener("click",function (value){           
     counterValue+=1;
     counter.innerHTML=counterValue                                                          

  })



  DecrementBtn.addEventListener("click",function (value){           
    counterValue-=1;     
    counter.innerHTML=counterValue                                        

 })


 ResetBtn.addEventListener("click",function (value){           
    counterValue=0;     
    counter.innerHTML=counterValue                                        

 })
