
let playerCross=true;
let counter=0;
const color='#d21841';
const buttons=document.querySelectorAll('.gameButton'); 
console.log(buttons);
const info=document.getElementById('gameInfo');
 
info.textContent='Currently playing: X';
 
/*for each element, i.e. each of our buttons, we add an event on a mouse click, and then call the insertSymbol function, to which we pass a specific button object*/
buttons.forEach(function(button){
    button.addEventListener('click',function(){
    console.log('clicked')
      insertSymbol(button);
 
    });
 
});
 

/*we create a function that will set the appropriate symbol on the button and display a message. We will send a reference to the function to the currently clicked button, because we want to modify it at the moment*/
 
function insertSymbol(button){
 
  if (playerCross){
 
    button.textContent="X";
    playerCross=false;
    info.textContent='Currently playing: O';
  }
 
  else{
    button.textContent="O";
    playerCross=true;
    info.textContent='Currently playing: X';
 
  }
 
  button.disabled=true;
  checkVictory();
}
 
 
/*check for victory and draw. In the game we have 8 combinations to win, the same signs next to each other can be in 3 lines / 3 columns and 2 diagonally*/
function checkVictory(){
 
  counter++;
 
 if(buttons[0].textContent==buttons[1].textContent && buttons[1].textContent==buttons[2].textContent && buttons[1].textContent!=''){
 
   buttons[0].style.color=color;
   buttons[1].style.color=color;
   buttons[2].style.color=color;
   victory();
 }
  else if(buttons[3].textContent==buttons[4].textContent && buttons[3].textContent==buttons[5].textContent && buttons[4].textContent!=''){
   buttons[3].style.color=color;
   buttons[4].style.color=color;
   buttons[5].style.color=color;
   victory();
  }
 
  else if(buttons[6].textContent==buttons[7].textContent && buttons[7].textContent==buttons[8].textContent && buttons[7].textContent!=''){
   buttons[6].style.color=color;
   buttons[7].style.color=color;
   buttons[8].style.color=color;
   victory();
  }
 
  else if(buttons[0].textContent==buttons[3].textContent && buttons[3].textContent==buttons[6].textContent && buttons[3].textContent!=''){
   buttons[0].style.color=color;
   buttons[3].style.color=color;
   buttons[6].style.color=color;
   victory();
  }
 
  else if(buttons[1].textContent==buttons[4].textContent && buttons[4].textContent==buttons[7].textContent && buttons[4].textContent!=''){
   buttons[1].style.color=color;
   buttons[4].style.color=color;
   buttons[7].style.color=color;
   victory();
  }
 
  else if(buttons[2].textContent==buttons[5].textContent && buttons[5].textContent==buttons[8].textContent && buttons[5].textContent!=''){
   buttons[2].style.color=color;
   buttons[5].style.color=color;
   buttons[8].style.color=color;
   victory();
  }
 
  else if(buttons[0].textContent==buttons[4].textContent && buttons[4].textContent==buttons[8].textContent && buttons[8].textContent!=''){
   buttons[0].style.color=color;
   buttons[4].style.color=color;
   buttons[8].style.color=color;
   victory();
  }
 
    else if(buttons[2].textContent==buttons[4].textContent && buttons[4].textContent==buttons[6].textContent && buttons[4].textContent!=''){
   buttons[2].style.color=color;
   buttons[4].style.color=color;
   buttons[6].style.color=color;
   victory();
  }
 
  else if(counter==9){
 
    info.textContent='Draw!';
  }
 
}
 
/*if we have a victory, we deactivate all buttons and show info who won*/
function victory(){
 
  buttons.forEach(function(button){
 
      button.disabled=true;
     button.classList.remove('hover');
    console.log('deleting');
});
 
  console.log(playerCross);
  if(playerCross){
 
    info.textContent='hhhhhhhhiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii';
  }
  else{
    info.textContent='hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh';
  }
}