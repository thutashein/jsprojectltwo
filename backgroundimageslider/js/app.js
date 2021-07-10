
//UI
const body = document.body;

const slides = document.querySelectorAll('.slide');
// console.log(body);
const leftbtn = document.getElementById('left');
const rightbtn = document.getElementById('right');



let activeslide = 0;

function setbody() {
    body.style.backgroundImage = slides[activeslide].style.backgroundImage;

}


setbody();




function setactivesslide() {

    slides.forEach((slide) => {
        slide.classList.remove('active');

    })

    slides[activeslide].classList.add('active');
}


rightbtn.addEventListener('click', () => {
    // console.log('hay');
    activeslide++;
    // console.log(activeslide);

    if (activeslide > slides.length - 1) {
        activeslide = 0;
    }

    setbody();
    setactivesslide();
})



leftbtn.addEventListener('click', () => {
    // console.log('hay');
    activeslide--;
    // console.log(activeslide);

    if (activeslide < 0) {
        activeslide = slides.length - 1;
    }

    setbody();
    setactivesslide();
})



















