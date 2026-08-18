document.addEventListener("DOMContentLoaded", function () {

    /* ================= MOBILE MENU ================= */

    const menuButton = document.getElementById("menuButton");
    const navMenu = document.getElementById("navMenu");

    if (menuButton && navMenu) {

        menuButton.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });

    }


    /* ================= CLOSE MENU ================= */

    const navLinks = document.querySelectorAll(".nav-menu a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {
            navMenu.classList.remove("active");
        });

    });


    /* ================= HEADER SHADOW ================= */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 20) {
            header.style.boxShadow =
                "0 8px 30px rgba(30,40,90,0.08)";
        } else {
            header.style.boxShadow = "none";
        }

    });


    /* ================= SCROLL REVEAL ================= */

    const revealElements = document.querySelectorAll(
        ".feature-card, .why-card, .contact-card, .stat-box, .about-card"
    );

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(function (element) {

        element.classList.add("reveal");

        observer.observe(element);

    });


    /* ================= DOWNLOAD BUTTON ================= */

    const downloadButtons = document.querySelectorAll(
        'a[href="#download"]'
    );

    downloadButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const downloadSection =
                document.getElementById("download");

            if (downloadSection) {

                downloadSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

});
