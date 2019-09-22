const onScroll = () => {
    const navbar = document.getElementsByClassName('nav')[0];

    const windowHeight = window.innerHeight;
    const navbarHeight = navbar.offsetHeight;
    const scrollPositionY = document.documentElement.scrollTop;
    const documentHeight = document.documentElement.scrollHeight;
    
    if(scrollPositionY >= windowHeight - navbarHeight) {
        navbar.classList.add('nav--fixed');
    } else {
        navbar.classList.remove('nav--fixed');
    }

    const navbarProgress = document.getElementsByClassName('nav__progress--background')[0];
    navbarProgress.style.width = `${100.0 * scrollPositionY / (documentHeight - windowHeight)}%`;
}

(() => {
    onScroll();
    window.onscroll = onScroll;
})();