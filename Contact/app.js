console.log("this is jQuery", $)

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const navList = document.querySelector('.navList');

    burger.addEventListener('click',()=>{
        navList.classList.toggle('nav-active');
    });
}

navSlide();

new kursor({
    type: 2

})

new kursor ({
    removeDefaultCursor: true
})

new kursor ({
    color: '#f8f800'
})
