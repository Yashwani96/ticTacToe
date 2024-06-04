let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newBtn = document.querySelector("#new-btn");

let turnO = true;
let count = 0;

let winPattern = [[0,4,8],
                  [2,4,6],
                  [0,1,2],
                  [3,4,5],
                  [6,7,8],
                  [0,3,6],
                  [1,4,7],
                  [2,5,8]
] 

boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    if(turnO){
        box.innerText = "X";
        turnO = false;
    }else{
      box.innerText = "O";
      turnO = true;
    }
      box.disabled = true;
      count++;
      checkWinner();
      if(count===9){
        gameDraw();
      }
  })
  
  
})

const gameDraw =()=>{
    msg.innerText = "Game Draw";
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = ()=>{
  for(let pattern of winPattern){
  let pos1val = boxes[pattern[0]].innerText;
  let pos2val = boxes[pattern[1]].innerText;
  let pos3val = boxes[pattern[2]].innerText;
  
  if(pos1val!="" && pos2val!="" && pos3val!="")
  if(pos1val===pos2val && pos2val===pos3val){
    console.log("winner is",  pos1val );
    showWinner(pos1val);
  }
}
}

const showWinner = (winner)=>{
     msg.innerText = `Congratulations, winner is ${winner}`;
     msgContainer.classList.remove("hide");
     disableBoxes();
}

const disableBoxes = ()=>{
    for(let box of boxes){
      box.disabled = true;
    }
}

const enableBoxes = ()=>{
  for(let box of boxes){
    box.disabled = false;
    box.innerText = "";
  }
}

const resetGame = ()=>{
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
}


  newBtn.addEventListener("click", resetGame);
  resetBtn.addEventListener("click", resetGame);
