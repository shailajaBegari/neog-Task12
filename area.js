// var traingleArea=function() {
//     var base=Number(document.getElementById('base').value);
//     var height=Number(document.getElementById('height').value);
//     var output=document.getElementById('output');
//     if(isNaN(base)|| isNaN(height)){
//         output.innerText="you did not text two content";
//         output.style.color="red";

//     }else{
//         var area=0.5*base*height;
//         output.innerText="AREA OF TRISANGLE IS   " +   area     +"cm\u00B2"
//         output.style.color="green";

//     }

// };


const base=document.querySelector("#base");
const height=document.querySelector("#height");
const checkBtn=document.querySelector("#checkBtn");
const output=document.querySelector("#output")

checkBtn.addEventListener("click",function btn(){
    const areaOfTraingel=0.5*Number(base.value)*Number(height.value)
    output.innerHTML="area of traingle is "+ areaOfTraingel  + "cm\u00B2"
    output.style.color="blue";
})