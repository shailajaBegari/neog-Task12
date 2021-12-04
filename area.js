var traingleArea=function() {
    var base=Number(document.getElementById('base').value);
    var height=Number(document.getElementById('height').value);
    var output=document.getElementById('output');
    if(isNaN(base)|| isNaN(height)){
        output.textContent="you did not text two content";

    }else{
        var area=0.5*base*height;
        output.textContent="AREA OF TRISANGLE IS   " +   area     +"cm\u00B2"
    }

};