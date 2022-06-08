
  const counter=document.getElementById('counter');
  const incrementBtn=document.getElementById('Incremet');
  const DecrementBtn=document.getElementById('Decrement');
  const ResetBtn=document.getElementById('Reset');
 


  let counterValue=0;

  incrementBtn.addEventListener("click",function (event){           
     counterValue+=1;
     counter.innerHTML=counterValue                                                          

  })



  DecrementBtn.addEventListener("click",function (event){           
    counterValue-=1;     
    counter.innerHTML=counterValue                                        

 })


 ResetBtn.addEventListener("click",function (event){           
    counterValue=0;     
    counter.innerHTML=counterValue                                        

 })
