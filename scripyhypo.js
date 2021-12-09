const sides=document.querySelectorAll(".side-input");
const hypothneousBtn=document.querySelector("#hypotenious-btn");
const outputE1=document.querySelector("#output");



function caluclateSumOfSqures(a,b){
    const sumOfSquares=a*a + b*b;
    // console.log(sumOfSquares);
    return sumOfSquares;

}


function calculateHypothnous(){
    const sumOfSquares =caluclateSumOfSqures(Number(sides[0].value),Number(sides[1].value));
    const lengthOfHypothnious=Math.sqrt(sumOfSquares);
    outputE1.innerText="the sum of square of hypothnious is,  " +   
    lengthOfHypothnious;
    outputE1.style.color="green";
}


hypothneousBtn.addEventListener("click",calculateHypothnous);