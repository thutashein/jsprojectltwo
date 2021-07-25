// UI
const bg = document.querySelector('.bg');
const loadtext = document.querySelector('.loading-text');


let load = 0;

let int = setInterval(blur, 30);



function blur() {
    load++;

    if (load > 99) {
        clearInterval(int);
    }

    loadtext.innerText = `${load}%`;
    loadtext.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 70, 0)}px)`;

    // load 0 =>100
}


const scale = (num, inmin, inmax, outmin, outmax) => {
    return (num - inmin) * (outmax - outmin) / (inmax - inmin) + outmin;

}


// console.log(scale(100, 0, 100, 100, 0));
















