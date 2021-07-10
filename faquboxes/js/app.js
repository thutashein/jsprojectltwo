const gettoggles = document.querySelectorAll('.faq-toggle');
// console.log(gettoggles);


gettoggles.forEach((gettoggle) => {
    gettoggle.addEventListener('click', (e) => {
        // console.log('hay');

        gettoggle.parentElement.classList.toggle('active');
    })
})







































