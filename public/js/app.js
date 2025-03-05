window.addEventListener('scroll', () => {
    let navBar = document.getElementById('main_navbar')

    if (window.scrollY > 100) {
        navBar.style.background = '#F3EDEA'
        navBar.style.transition = '.5s'
        navBar.style.boxShadow = "1px 2px 5px #9b9b9b"
    } else {
        navBar.style.background = 'transparent'
        navBar.style.transition = '.5s'
        navBar.style.boxShadow = "none"
    }
})