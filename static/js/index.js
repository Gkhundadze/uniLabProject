let navLinks = document.querySelectorAll('.nav-list-item')
navLinks.forEach(item => {
    item.addEventListener('click', ()=>{
        item.classList.add('active')
    })
})
