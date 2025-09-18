let backgroundchang = document.querySelector('.ulpera')
let backgroundchangbutton = document.querySelector('.about')
backgroundchangbutton.addEventListener('click',()=>{
        backgroundchang.style.background='white'
    setTimeout(() => {
        backgroundchang.style.background='#acacac'
    }, 50);
})