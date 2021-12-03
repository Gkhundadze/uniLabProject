let navLinks = document.querySelectorAll('.nav-list-item')
navLinks.forEach(item => {
    item.addEventListener('click', ()=>{
        item.classList.add('active')
    })
})
const footer = document.querySelector('.slider-footer')
const burger = document.querySelector('.burger')
const mainNavigation = document.querySelector('.main-navigation')
const ul = document.querySelector('.nav-ul')


burger.addEventListener('click', ()=> {
    // mainNavigation.style.display = 'block'
    burger.style.transform = 'rotate(360deg)'
    burger.style.transition = '.5s ease-in-out'
    footer.style.display = 'block'
    if (mainNavigation.style.transform) {
        mainNavigation.style.transform = ''
        burger.style.transform = 'rotate(0deg)'
    }else{
        mainNavigation.style.transform = 'translateX(0%)'
    }
    document.querySelector('body').addEventListener('click', (e)=> {
        if (e.target !== burger && e.target !== ul) {
            mainNavigation.style.transform = ''
            burger.style.transform = 'rotate(0deg)'
        }
    })
})

