//script.js

//Calculate tip function
function calculateTip(){
    var billamount = document.getElementById("billamount").value;
    var serviceQuality= document.getElementById("servixceQuality").value;
    var numpeople= document.getElementById("totalpeople").value;
    
    //valdations
    
    if( billamount ==="" || serviceQuality ==0 ){
        window.alert("Please enter some values to get this baby up and running");
        return;
    }
    
    if(numpeople==="" || numpeople<=1){
        numpeople=1;
        document.getElementById("each").style.display="none";
    } else {
        document.getElementById("each").style.display="block";
    }
    
    // math
    var total= (billamount* serviceQuality)/numpeople;
    total=Math.round(total*100)/100;
    tatal=total.toFixed(2);
    
    document.getElementById("totaltip").style.display="block";
    document.getElementById("tip").innerHTML=total;
    
}

//hiding total tip
document.getElementById("totaltip").style.display="none";
document.getElementById("each").style.display="none";

//calling function
document.getElementById("calculate").onclick=function() {calculateTip() };