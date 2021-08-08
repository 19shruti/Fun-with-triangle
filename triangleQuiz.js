

const  quizForm=document.forms[0];
const que=document.querySelectorAll("#que");
const scorebox=document.querySelector(".scorehere");
const submit=document.getElementById("submit");
const correctAns=["option1","option3","option2","option1","option3"];

let score=0; 

quizForm.addEventListener('submit',(e)=>
{  
  
    e.preventDefault();
  
    const data= new FormData(quizForm);
    let index=0;
  


    for(let entry of data)
    {
        if(entry[1] == correctAns[index]){
            que[index].style.background="lightgreen";
            score++
        }
        else{
            que[index].style.background="pink";
        }
        index++;
    }
    scorebox.innerText = score;
    submit.style.display="none";
});  


//formdata is an API besically 
  // "of" gives the value of array not the i iterator 0,1,,2,3