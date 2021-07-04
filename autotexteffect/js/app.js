
const textel = document.getElementById('text');
// console.log(text);
const speedel = document.getElementById('speed');
// console.log(speed);
const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,";






let idx  = 1;
let speed = 1000;

function autotext(){
    // console.log('hay');


    textel.innerText = text.slice(0,idx);

    idx++;

    if(idx > text.length){
        idx = 1;

    }

    setTimeout(autotext,speed);
}


autotext();


//Event Listener
speedel.addEventListener('click',()=>{
    // console.log('hay');
    speed = 1000 / speedel.value;
});


//speed = 1;

// 2000/ 1 = 2000 































