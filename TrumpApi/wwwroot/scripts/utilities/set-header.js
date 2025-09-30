const setHeader = () => {
    const header = document.querySelector(".header");

    header.innerHTML = `
        <div class="page-label">
            <a class="page-label__a" href="index.html">
                <i class="fa-solid fa-star star-icon"></i>
                Trump API
            </a>
        </div>
    
        <nav class="main-nav">
            <ul class="main-nav__ul">
                <li class="main-nav__li"><a href="index.html" class="main-nav__a">About</a></li>
                <li class="main-nav__li"><a href="docs.html" class="main-nav__a">Docs</a></li>
            </ul>
        </nav>

    `;
}

export default setHeader;

