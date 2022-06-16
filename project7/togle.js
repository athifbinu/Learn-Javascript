const hamburger = document.querySelector(".hamburger");        //togle button

const navMenu = document.querySelector(".nav-menu");          //togle text eg ..home.gallery...


 hamburger .addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})


