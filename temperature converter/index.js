let cel=document.getElementById("celsius");
let feren=document.getElementById("Farenhiet");


function celtoferen(){
    let f=(cel.value)*9/5+32;
    feren.value=f.toFixed(2);
}
function ferentocel(){
    let c=(feren.value-32)*5/9;
    cel.value=c.toFixed(2);
}
