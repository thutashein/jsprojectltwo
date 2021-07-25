const boxes = document.querySelectorAll('.box');
console.log(boxes);

function checkbox() {
    const innerheight = window.innerHeight / 5 * 4;
    // console.log(innerheight);
    // console.log(window.innerHeight);
    boxes.forEach(function (box) {
        // console.log(box);


        const boxtop = box.getBoundingClientRect().top;
        // console.log(boxtop);

        if (boxtop < innerheight) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })
}



checkbox();


window.addEventListener('scroll', checkbox);





















