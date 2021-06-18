
const nodeListOfNums = document.querySelectorAll("input.num-btn");
const numBtnsArr = Array.from(nodeListOfNums);
const nodeListOfOps = document.querySelectorAll("input.op-btn");
const opBtnsArr = Array.from(nodeListOfOps);
const mainDisplay = document.querySelector(".large-calc-display");


//So far this just pushes the button 7 to display
//Need to get it to display all numbers together
//Getting canceled by pressing an operator
function pushToDisplay(value){
    mainDisplay.innerHTML = value;
}

