


  const username=document.getElementById("username");
  const password=document.getElementById("password");
  const logingbtn=document.querySelector(".signin");
  

  logingbtn.addEventListener("click",(e)=>{
    if(username.value === "admin" && password.value === "123"){
      alert("login Success");
    }else {
      alert("Ples fill corectly");
    }
  })
 




