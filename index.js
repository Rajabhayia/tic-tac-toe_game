let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".i1");
let newgameBtn=document.querySelector(".i2");
let msg=document.querySelectorAll("p");
let side1=document.querySelector(".side1");
let side2=document.querySelectorAll(".side2");
let hide=document.querySelector(".hide");
let hide2=document.querySelector(".hide2");

let turnO = true;

let arr=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO="true";
        }
        box.disabled="true";

        checkwinner();
    })
})
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const resetgame=()=>{
    turnO=true;
    enableBoxes();
    side1.classList.add("hide");
}
const showwinner=(winner)=>{
    side1.innerText=`Winner is  ${winner}`;
    side1.classList.remove("hide");
    disableBoxes();
}

const checkwinner=()=>{
    for(let patterns of arr){
        let pos1val=boxes[patterns[0]].innerText;
        let pos2val=boxes[patterns[1]].innerText;
        let pos3val=boxes[patterns[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val == pos2val && pos2val== pos3val){
                console.log("winner",pos1val);
                showwinner(pos1val);
            }
        }
    }
}
newgameBtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);