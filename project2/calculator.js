var screen = document.getElementById('screen');


function Btnclick(value){
    screen.value+=value;
    

}

function ClearScreen(){
     screen.value="";       // to clear the screen 
}

function FindResult(){
    var result = eval(screen.value)
    screen.value=result;
}