const inputs=document.querySelectorAll(".angel-input");
const isTraingleBtn=document.querySelector("#is-trangle-btn")
const outputE1=document.querySelector("#output");


function calculateSumOfAngles(angel1,angel2,angle3){
    const sumOfAngles=angel1+angel2+angle3;
    // console.log(sumOfAngles);
    return sumOfAngles
}


function isTrangle(){   
    const sumOfAngles=calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value)
    );
    // console.log(sumOfAngles)
    if(sumOfAngles===180){
        // console.log("the angle form a triangle");
        outputE1.innerText="👏 The angle form a triangle 👏 " ;
    }
    else{
        // console.log("oh the angel doesn't form a triangle");
        outputE1.innerText="oh the angel doesn't form a triangle";
    }

}

isTraingleBtn.addEventListener("click",isTrangle)
