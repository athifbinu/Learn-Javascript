let  kitcheninput = document.getElementById("kitchen-input");
let addBtn = document.getElementById("add-btn"); 
let  kichenitemlist = document.getElementById ("kichen-item-list");

// step 2  
function addkichenitems(){
    let kitcheninputData =kitcheninput.value;
    // create dom elemnts
    let li=document.createElement("li");
    li.innerText = kitcheninputData;
    kichenitemlist.appendChild(li);
     kitcheninput.value = '';   //it used to restore the plaseholder
     kitcheninput.focus();

}

// // crete trash button

// let trashbutton =document.createElement('i');
// trashbutton.classList.add("fa fa-trash");
// li.appendChild(trashbutton);
// kitcheninput.focus();


// step 1

addBtn.addEventListener("click",addkichenitems); 