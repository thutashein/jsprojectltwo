const quizdata = [

    {
        question:"What does CSS stan for?",
        a:"Central Style Sheet",
        b:"Cascading Style Sheet",
        c:"Cascading Simple Sheets",
        d:"Century System Software",
        e:"Control Syle Sheet",
        correct:"b",
    },



    {
        question:"What does HTML stan for?",
        a:"Hypertext Markup Language",
        b:"Hypertext Markdown Language",
        c:"Hyperloop Machine Language",
        d:"Hyper Technology Modern Language",
        e:"Hypertext Market Language",
        correct:"a",
    },




    {
        question:"What year javascript language lanched?",
        a:"1996",
        b:"1995",
        c:"1994",
        d:"1991",
        e:"None of the above",
        correct:"b",
    },




    
    {
        question:"What Language runs in a browser?",
        a:"Java",
        b:"C",
        c:"Python",
        d:"Javascript",
        e:"Php",
        correct:"d",
    }



];



// console.log(quizdata);


//UI 
const quiz = document.getElementById('quiz');
// console.log(quiz);
const questions = document.getElementById('question');
// console.log(questions);
const answerels = document.querySelectorAll('.answer');
// console.log(answers);
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const e_text = document.getElementById('e_text');

const submitbtn = document.getElementById('submit');
// console.log(submitbtn);


let currentquiz = 0;
let score = 0;


function loadquiz(){
    deselectanswers();
    // console.log('abcd');
    const currentquizdata = quizdata[currentquiz];
    // console.log(currentquizdata);
    questions.innerText = currentquizdata.question;
    a_text.innerText = currentquizdata.a;
    b_text.innerText = currentquizdata.b;
    c_text.innerText = currentquizdata.c;
    d_text.innerText = currentquizdata.d;
    e_text.innerText = currentquizdata.e;
}

loadquiz();


function deselectanswers(){
    answerels.forEach((answerel)=>{
        answerel.checked = false;
    })
}



function getselected(){
    let answer;

    answerels.forEach((answerel)=>{
        // console.log(answerel);
        if(answerel.checked){
            answer = answerel.id;
        }
    });

    return answer;
}







submitbtn.addEventListener('click',()=>{
    // console.log('hay');
    // console.log(getselected());
   
   
    let answer = getselected();

    if(answer){

        if(answer === quizdata[currentquiz].correct){
            score++;
        }

        currentquiz++;

       if(currentquiz < quizdata.length){
           loadquiz();
       }else{
           quiz.innerHTML = `
                <h2>Your answered correct at ${score}/${quizdata.length}</h2>
                <button onclick="location.reload()">Reload</button>
          
                `;
       }

    }//answer

})


























