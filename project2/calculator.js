const screen = document.getElementById('screen');


function Btnclick(value){
  screen.value+=value;        //it is used to display a continus number on screen
    

}

function ClearScreen(){
     screen.value="";        // to clear the screen 
}

function FindResult(){
    const result = eval(screen.value) 
    screen.value=result;
}