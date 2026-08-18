document.addEventListener("DOMContentLoaded", function () {

    // ================= MOBILE MENU =================

    const menuButton = document.getElementById("menuButton");
    const navMenu = document.getElementById("navMenu");

    if (menuButton && navMenu) {

        menuButton.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });

    }


    // ================= CLOSE MOBILE MENU =================

    const navLinks = document.querySelectorAll(".nav-menu a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (navMenu) {
                navMenu.classList.remove("active");
            }

        });

    });


    // ================= HEADER SHADOW =================

    const header = document.querySelector(".header");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 20) {

            header.style.boxShadow =
                "0 8px 30px rgba(30,40,90,0.10)";

        } else {

            header.style.boxShadow =
                "none";

        }

    });

});
