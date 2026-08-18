/* =========================================
   ACCORAX WEBSITE SCRIPT
========================================= */


/* =========================================
   MOBILE MENU
========================================= */

const menuButton =
    document.getElementById("menuButton");

const mainNav =
    document.getElementById("mainNav");


if (menuButton && mainNav) {

    menuButton.addEventListener("click", function () {

        mainNav.classList.toggle("active");

    });


    const navLinks =
        mainNav.querySelectorAll("a");


    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mainNav.classList.remove("active");

        });

    });

}



/* =========================================
   BACK TO TOP
========================================= */

const topButton =
    document.getElementById("topButton");


window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});


if (topButton) {

    topButton.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}



/* =========================================
   DOWNLOAD BUTTON
========================================= */

const downloadButton =
    document.getElementById("downloadButton");


if (downloadButton) {

    downloadButton.addEventListener("click", function (event) {

        const downloadFile =
            "AccoraX-Setup.exe";


        /*
           बाद में जब GitHub पर
           AccoraX-Setup.exe upload करेंगे,
           तब यह button काम करेगा।
        */


        const link =
            document.createElement("a");


        link.href =
            downloadFile;


        link.download =
            downloadFile;


        /*
           अगर अभी setup file मौजूद नहीं है
           तो browser को error से बचाने के लिए
           default action रोक रहे हैं।
        */


        event.preventDefault();


        alert(
            "AccoraX download will be available soon."
        );

    });

}



/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll("section[id]");


const navigationLinks =
    document.querySelectorAll(".nav a");


window.addEventListener("scroll", function () {

    let currentSection = "";


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 120;


        if (window.scrollY >= sectionTop) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach(function (link) {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});
