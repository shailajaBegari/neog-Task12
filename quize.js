const quizeForm=document.querySelectorAll(".quize-form");
const submitAnserButton=document.querySelector("#submit-ans-btn");
const outputE1=document.querySelector("#output");

const coorectAnswers=["90°","right angled","Equilateral triangle","10°"]

function calculateScore(){
    let score=0;
    let index=0;
    const formResults=new FormData(quizeForm);
    // console.log(formResults);
    for(let value of formResults.values()){
        // console.log(value);
        if(value===coorectAnswers[index]){
            score=score+1
        }
        index=index+1
    }
// console.log(score);
outputE1.innerHTML="your score is  " + score;
}

submitAnserButton.addEventListener("click",calculateScore);