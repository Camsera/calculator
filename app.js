
const nodeListOfNums = document.querySelectorAll("input.num-btn");
const numBtnsArr = Array.from(nodeListOfNums);
const nodeListOfOps = document.querySelectorAll("input.op-btn");
const opBtnsArr = Array.from(nodeListOfOps);


//this isn't really right. make a div
//that displays it in the bottom right corner
//do this from the oninput selector
numBtnsArr.forEach(function(e, i){
    e.addEventListener("click", function(){
        document.querySelector(".large-calc").innerHTML = i;
    })
})

