let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#rest');


let turn = false;

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        console.log("box is clicked");
        if(turn){
            box.innerText='O';
            turn=false;
        }
        else{
            box.innerText='X';
            turn=true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const pattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

let msg = document.querySelector('.msg');

const checkWinner = ()=>{
    for(p of pattern){
        let pos1 = boxes[p[0]].innerText;
        let pos2 = boxes[p[1]].innerText;
        let pos3 = boxes[p[2]].innerText;

        if(pos1!='' && pos2!='' && pos3!=''){
            if(pos1===pos2 && pos2===pos3){
                console.log("Winner");
                msg.innerText=`Winner of game is ${turn?'X':'O'}`;
                boxes.forEach((box)=>{
                    box.disabled=true;
                });
                document.querySelectorAll('.game, .container, .msg').forEach(function(element) {
                    element.style.backgroundColor = '#FDF5BF';
                });
                

            }
        }
    }
};

resetBtn.addEventListener('click',()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
        box.innerText="";
    });
    msg.innerText="";
    document.querySelectorAll('.game, .container, .msg').forEach(function(element) {
        element.style.backgroundColor = '#8BB8A8';
    });
});