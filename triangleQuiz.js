

const  quizForm=document.forms[0];
const que=document.querySelectorAll("#que");
const scorebox=document.querySelector(".scorehere");
const submit=document.querySelector("#submit");
const ans=document.querySelectorAll("#ans");

const correctAns=["option1","option3","option2","option1","option3","option1"];

let score=0; 
 console.log("entry");

quizForm.addEventListener('submit',(e)=>{  
  
    e.preventDefault();
  
    const data= new FormData(quizForm);

    let index=0;
  


    for(let entry of data)
   
    {
        if(entry[1] == correctAns[index]){
            que[index].style.background="green";
            score++
        }
        else{
            que[index].style.background="red";
            ans.innerHTML="the correct ans is :: "+correctAns[index];
        }
        index++;
    }
    scorebox.innerHTML = "Your score is "+score;
    submit.style.display="none";
});  


//formdata is an API besically 
  // "of" gives the value of array not the i iterator 0,1,,2,3