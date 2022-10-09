const listAnchors = document.querySelectorAll('a[href^="#"]');

for (const itemAnchor of listAnchors) {
    itemAnchor.addEventListener('click', anchor => {
        anchor.preventDefault();
        const linkId = itemAnchor.getAttribute('href');

        if (document.querySelector(".burger-header").style.display === "block") {
            document.querySelector(".burger-header").style.display = "none";
            document.querySelector(".burger-button-open").style.display = "block";
        }

        document.querySelector(linkId).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
};

window.onbeforeunload = function () { //forced scrolling up
   window.scrollTo(0, 0);
}