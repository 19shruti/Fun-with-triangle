//CHECK IT IS TRIANGLE OR NOT
function CheckTriangle()
{
   var sideone=parseInt(document.getElementById("sideone").value);
   var sidetwo=parseInt(document.getElementById("sidetwo").value);
   var sidethree=parseInt(document.getElementById("sidethree").value);
   var sum=sideone+sidetwo+sidethree;
   console.log(sum);
   if(sum===180)
   {
       document.getElementById("sumoutput").innerText=" Yes! Triangle  possible with these angle📐";
   }
   else
   {
       document.getElementById("sumoutput").innerText=" No!  triangle  not possible with these angle  😥 (Hint: sum of angles in triangle is 180.)";
   }
}
//CHECK HYPOTENOUS 
function calculatehypotenous(){
    var sidea=parseInt(document.getElementById("sidea").value);
    var sideb=parseInt(document.getElementById("sideb").value);
    var sidec=Math.floor(Math.sqrt(Math.pow(sidea,2)+Math.pow(sideb,2)));
document.getElementById("sumoutput1").innerText="The Hypotenous  is :: "+sidec;
}
function Herons_Formula()
{
    var sidea=parseInt(document.getElementById("op1").value);
    var sideb=parseInt(document.getElementById("op2").value);
    var sidec=parseInt(document.getElementById("op3").value);
    var hyp=((1/4)*(Math.sqrt((sidea+sideb+sidec)*(-sidea+sideb+sidec)*(sidea-sideb+sidec)*(sidea+sideb-sidec)))).toFixed(3);
    document.getElementById("out1").innerHTML=hyp;
}

function SAS()
{
    var sidea=parseInt(document.getElementById("opp1").value);
    var sideb=parseInt(document.getElementById("opp2").value);
    var sidec=parseInt(document.getElementById("opp3").value);
    var sas=(0.5*sidea*sideb*(Math.sin(sidec))).toFixed(3);
    document.getElementById("outt1").innerHTML=sas;

}
function ASA()
{
    var sidea=parseInt(document.getElementById("oppp1").value);
    var anglea=parseInt(document.getElementById("oppp2").value);
    var angleb=parseInt(document.getElementById("oppp3").value);
    var asa=((Math.pow(sidea,2))*(Math.sin(anglea))*(Math.sin(angleb))/(2*(Math.sin(anglea+angleb)))).toFixed(3);
    document.getElementById("outtt1").innerHTML=asa; 
}
function simple()
{
    var base=parseInt(document.getElementById("base").value);
    var height=parseInt(document.getElementById("height").value);
   
    var sim=(0.5*base*height).toFixed(3);
    document.getElementById("sim").innerHTML=sim;
}
function equilateral()
{
    var a=parseInt(document.getElementById("eq").value);
   
    var sio=( (Math.pow(a,2)) *((Math.sqrt(3))*4)).toFixed(3);
    document.getElementById("sii").innerHTML=sio;
}
function showHideDiv(op) { 

    var srcElement = document.getElementById(op);
    if (srcElement != null) {
        if (srcElement.style.display == "block") {
            srcElement.style.display = "show"; 
          
        }
        else {
            srcElement.style.display = 'block';
        }
        return false;
    }
}
function divl(opp) {
  
    var srcElement = document.getElementById(opp);
    if (srcElement != null) {
        if (srcElement.style.display == "block") {
            srcElement.style.display = "show";
           
        }
        else {
            srcElement.style.display = 'block';
        }
        return false;
    }
}
function showHideDiv2(opl) {
    var srcElement = document.getElementById(opl);
    if (srcElement != null) {
        if (srcElement.style.display == "block") {
            srcElement.style.display = "show";
        }
        else {
            srcElement.style.display = 'block';
        }
        return false;
    }
}
function showHideDiv3(opm) {
    var srcElement = document.getElementById(opm);
    if (srcElement != null) {
        if (srcElement.style.display == "block") {
            srcElement.style.display = "show";
        }
        else {
            srcElement.style.display = 'block';
        }
        return false;
    }
}
// function showHideDiv4(op4) {
//     var srcElement = document.getElementById(op4);
//     if (srcElement != null) {
//         if (srcElement.style.display == "block") {
//             srcElement.style.display = "show";
//         }
//         else {
//             srcElement.style.display = 'block';
//         }
//         return false;
//     }
// }
