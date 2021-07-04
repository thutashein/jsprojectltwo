const buttons = document.querySelectorAll('.btnripple');
// console.log(buttons);

buttons.forEach((button) => {
    // console.log(button);
    button.addEventListener('click', function (e) {
        // console.log('hay');
        // console.log(e);

        const cx = e.clientX;
        const cy = e.clientY;

        // console.log(cx, cy);

        // left ထောင့် နဲ့ top က (0,0) ဖြစ်ချင်လို့
        const btntop = e.target.offsetTop;
        const btnleft = e.target.offsetLeft;
        // console.log(btntop, btnleft);


        const xinside = cx - btnleft;
        const yinside = cy - btntop;
        // console.log(xinside, yinside);




        //Create Circle
        const circle = document.createElement('span');
        // circle.className = 'circle';
        circle.classList.add('circle');
        // console.log(circle);


        circle.style.top = yinside + 'px';
        circle.style.left = xinside + 'px';


        // e.target.appendChild(circle);
        // console.log(this);

        this.appendChild(circle);




        setTimeout(() => {
            circle.remove();
        }, 400)

    })
})







































