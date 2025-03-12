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

// Activate the correct tab if URL contains a hash
document.addEventListener("DOMContentLoaded", function() {
    let hash = window.location.hash;
    if (hash) {
        let tab = document.querySelector(`a[href="${hash}"]`);
        if (tab) {
            new bootstrap.Tab(tab).show();
        }
    }
});

// Search Button
const searchIcon = document.querySelector(".searchIcon")
const search_form = document.querySelector(".search_form")
const search_cross = document.getElementById("search_cross")

searchIcon.addEventListener("click", (e) => {
    search_form.classList.add("search_form_hide")
    
    e.preventDefault()
})
search_cross.addEventListener("click", (e) => {
    search_form.classList.remove("search_form_hide")

    e.preventDefault()
})