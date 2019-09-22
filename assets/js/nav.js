const onScroll = () => {
    const windowHeight = window.innerHeight;
    const scrollPositionY = document.documentElement.scrollTop;
    const documentHeight = document.documentElement.scrollHeight;

    const navbarProgress = document.getElementsByClassName('nav__progress--background')[0];
    navbarProgress.style.width = `${100.0 * scrollPositionY / (documentHeight - windowHeight)}%`;
}

(() => {
    onScroll();
    window.onscroll = onScroll;
})();