/* =====================================================
   ACCORAX WEBSITE JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* =================================================
       MOBILE MENU
    ================================================= */

    const mobileMenu =
        document.getElementById("mobileMenu");

    const mobileNav =
        document.getElementById("mobileNav");


    if (mobileMenu && mobileNav) {

        mobileMenu.addEventListener(
            "click",
            function () {

                mobileNav.classList.toggle("active");

            }
        );

    }


    /* =================================================
       CLOSE MOBILE MENU
    ================================================= */

    const mobileLinks =
        document.querySelectorAll(
            ".mobile-nav a"
        );


    mobileLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                if (mobileNav) {

                    mobileNav.classList.remove(
                        "active"
                    );

                }

            }
        );

    });


    /* =================================================
       NAVBAR SHADOW
    ================================================= */

    const navbar =
        document.querySelector(".navbar");


    window.addEventListener(
        "scroll",
        function () {

            if (!navbar) {
                return;
            }


            if (window.scrollY > 20) {

                navbar.style.boxShadow =
                    "0 8px 30px rgba(30,40,80,.08)";

            } else {

                navbar.style.boxShadow =
                    "none";

            }

        }
    );


    /* =================================================
       SCROLL REVEAL
    ================================================= */

    const revealElements =
        document.querySelectorAll(
            ".feature-card, .why-card, .trust-item, .contact-item"
        );


    const revealObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "show"
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(function (element) {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(20px)";

        element.style.transition =
            "opacity .6s ease, transform .6s ease";

        revealObserver.observe(element);

    });


    /* =================================================
       ADD SHOW CLASS STYLE
    ================================================= */

    const style =
        document.createElement("style");


    style.textContent = `

        .feature-card.show,
        .why-card.show,
        .trust-item.show,
        .contact-item.show {

            opacity: 1 !important;

            transform:
                translateY(0) !important;

        }

    `;


    document.head.appendChild(style);


    /* =================================================
       CURRENT YEAR
    ================================================= */

    const yearElements =
        document.querySelectorAll(
            "[data-year]"
        );


    yearElements.forEach(function (element) {

        element.textContent =
            new Date().getFullYear();

    });


});
