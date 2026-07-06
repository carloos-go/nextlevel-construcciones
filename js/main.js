/*=====================================================
MENÚ RESPONSIVE
=====================================================*/

const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-links a");

if(menuToggle && navbar){

    const icon = menuToggle.querySelector("i");

    menuToggle.addEventListener("click",()=>{

        navbar.classList.toggle("active");

        menuToggle.classList.toggle("active");

        if(navbar.classList.contains("active")){

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        }else{

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

    navLinks.forEach(link=>{

        link.addEventListener("click",()=>{

            navbar.classList.remove("active");

            menuToggle.classList.remove("active");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

    document.addEventListener("click",(e)=>{

        if(

            !navbar.contains(e.target) &&

            !menuToggle.contains(e.target)

        ){

            navbar.classList.remove("active");

            menuToggle.classList.remove("active");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}

/*=====================================================
MODO OSCURO
=====================================================*/

const themeToggle = document.querySelector(".theme-toggle");

if(themeToggle){

    const themeIcon = themeToggle.querySelector("i");

    // Recuperar tema guardado
    const savedTheme = localStorage.getItem("theme");

    if(savedTheme === "dark"){

        document.body.classList.add("dark-mode");

        themeToggle.classList.add("active");

        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");

    }

    // Cambiar tema
    themeToggle.addEventListener("click",()=>{

        document.body.classList.toggle("dark-mode");

        themeToggle.classList.toggle("active");

        if(document.body.classList.contains("dark-mode")){

            themeIcon.classList.remove("fa-moon");
            themeIcon.classList.add("fa-sun");

            localStorage.setItem("theme","dark");

        }else{

            themeIcon.classList.remove("fa-sun");
            themeIcon.classList.add("fa-moon");

            localStorage.setItem("theme","light");

        }

    });

}

/*=====================================================
BOTÓN VOLVER ARRIBA
=====================================================*/

const scrollTopButton = document.querySelector(".scroll-top");

if(scrollTopButton){

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 300){

            scrollTopButton.classList.add("show");

        }else{

            scrollTopButton.classList.remove("show");

        }

    });

    scrollTopButton.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}
