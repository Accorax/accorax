/* =====================================================
   ACCORAX WEBSITE
   JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle =
    document.getElementById("menuToggle");

const mobileMenu =
    document.getElementById("mobileMenu");


if (menuToggle && mobileMenu) {

    menuToggle.addEventListener(
        "click",
        function () {

            mobileMenu.classList.toggle("active");

            if (
                mobileMenu.classList.contains("active")
            ) {

                menuToggle.innerHTML = "✕";

                menuToggle.setAttribute(
                    "aria-label",
                    "Close Menu"
                );

            } else {

                menuToggle.innerHTML = "☰";

                menuToggle.setAttribute(
                    "aria-label",
                    "Open Menu"
                );

            }

        }
    );


    /* Close mobile menu after clicking link */

    const mobileLinks =
        mobileMenu.querySelectorAll("a");


    mobileLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    mobileMenu.classList.remove(
                        "active"
                    );

                    menuToggle.innerHTML = "☰";

                    menuToggle.setAttribute(
                        "aria-label",
                        "Open Menu"
                    );

                }
            );

        }
    );

}


/* =====================================================
   BACK TO TOP
===================================================== */

const backToTop =
    document.getElementById("backToTop");


if (backToTop) {

    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 500) {

                backToTop.classList.add("show");

            } else {

                backToTop.classList.remove("show");

            }

        }
    );


    backToTop.addEventListener(
        "click",
        function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* =====================================================
   CURRENT YEAR
===================================================== */

const currentYear =
    document.getElementById("currentYear");


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =====================================================
   IMAGE PLACEHOLDER
===================================================== */

function showImagePlaceholder(image) {

    if (!image) {
        return;
    }


    image.style.display = "none";


    const parent =
        image.parentElement;


    if (!parent) {
        return;
    }


    const placeholder =
        parent.querySelector(
            ".image-placeholder"
        );


    if (placeholder) {

        placeholder.style.display =
            "flex";

    }

}


/* =====================================================
   SMOOTH NAVIGATION
===================================================== */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(
    function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (target) {

                    event.preventDefault();


                    const header =
                        document.querySelector(
                            ".site-header"
                        );


                    const headerHeight =
                        header
                            ? header.offsetHeight
                            : 0;


                    const position =
                        target.getBoundingClientRect()
                              .top
                        +
                        window.scrollY
                        -
                        headerHeight
                        -
                        10;


                    window.scrollTo({

                        top: position,

                        behavior: "smooth"

                    });

                }

            }
        );

    }
);


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".feature-card, .screenshot-card, .stat-card, .contact-card"
    );


if (
    "IntersectionObserver"
    in window
) {

    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold:0.12
            }
        );


    revealElements.forEach(
        function (element) {

            element.classList.add(
                "reveal"
            );

            observer.observe(
                element
            );

        }
    );

}


/* =====================================================
   DOWNLOAD BUTTON
===================================================== */

const downloadButton =
    document.getElementById(
        "downloadButton"
    );


if (downloadButton) {

    downloadButton.addEventListener(
        "click",
        function (event) {

            const downloadLink =
                this.getAttribute("href");


            /*
             * IMPORTANT:
             *
             * Currently href is "#".
             *
             * When your actual AccoraX
             * installer is uploaded,
             * replace the href in index.html
             * with the real download URL.
             */


            if (
                !downloadLink ||
                downloadLink === "#"
            ) {

                event.preventDefault();


                alert(
                    "AccoraX download will be available soon."
                );

            }

        }
    );

}


/* =====================================================
   PREVENT BROKEN IMAGE ICON
===================================================== */

document.querySelectorAll(
    "img"
).forEach(
    function (image) {

        image.addEventListener(
            "error",
            function () {

                showImagePlaceholder(
                    image
                );

            }
        );

    }
);


/* =====================================================
   CONSOLE MESSAGE
===================================================== */

console.log(
    "AccoraX Website Loaded Successfully."
);

console.log(
    "Developed by Jagdeesh Sahni."
);
