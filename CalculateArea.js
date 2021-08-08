
const areaCalBlock = document.querySelectorAll(".areaCalBlock");
const areaShowHere = document.querySelectorAll(".areaShowHere");

const inputInOption1 = document.querySelectorAll(".inputInOption1");
const inputInOption2 = document.querySelectorAll(".inputInOption2");
const inputInOption3 = document.querySelectorAll(".inputInOption3");
const inputInOption4 = document.querySelectorAll(".inputInOption4");







const  quizForm=document.forms[0].elements;
console.log(quizForm);
quizForm[0].addEventListener('change',()=>{
    showOrHideBlock(areaCalBlock, 0, 1, 2,3);
})
quizForm[1].addEventListener('change',()=>{
    showOrHideBlock(areaCalBlock, 1, 0, 2,3);
})
quizForm[2].addEventListener('change',()=>{
    showOrHideBlock(areaCalBlock, 2, 1, 0,3);
})
quizForm[3].addEventListener('change',()=>{
    showOrHideBlock(areaCalBlock, 3, 1, 2,0);
})

function showOrHideBlock(blockDivs, showDivIndex, hideDivIndex1, hideDivIndex2){
    blockDivs[showDivIndex].style.display = "block";
    blockDivs[hideDivIndex1].style.display = "none";
    blockDivs[hideDivIndex2].style.display = "none";
}
document.forms[1].addEventListener("submit",()=>
{
    var sidea=parseInt(document.getElementById("op1").value);
    var sideb=parseInt(document.getElementById("op2").value);
    var sidec=parseInt(document.getElementById("op3").value);
    var hyp=((1/4)*(Math.sqrt((sidea+sideb+sidec)*(-sidea+sideb+sidec)*(sidea-sideb+sidec)*(sidea+sideb-sidec)))).toFixed(3);
    document.getElementById("out1").innerHTML=hyp;
})
document.forms[2].addEventListener("submit",()=>
{
    var sidea=parseInt(document.getElementById("opp1").value);
    var sideb=parseInt(document.getElementById("opp2").value);
    var sidec=parseInt(document.getElementById("opp3").value);
    var sas=(0.5*sidea*sideb*(Math.sin(sidec))).toFixed(3);
    document.getElementById("outt1").innerHTML=sas;
})
document.forms[3].addEventListener("submit",()=>{
    var sidea=parseInt(document.getElementById("oppp1").value);
    var anglea=parseInt(document.getElementById("oppp2").value);
    var angleb=parseInt(document.getElementById("oppp3").value);
    var asa=((Math.pow(sidea,2))*(Math.sin(anglea))*(Math.sin(angleb))/(2*(Math.sin(anglea+angleb)))).toFixed(3);
    document.getElementById("outtt1").innerHTML=asa; 
})
document.forms[3].addEventListener("submit",()=>{
var base=parseInt(document.getElementById("base").value);
var height=parseInt(document.getElementById("height").value);

var sim=(0.5*base*height).toFixed(3);
document.getElementById("sim").innerHTML=sim;
})
