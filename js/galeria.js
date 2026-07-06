/*=====================================================
GALERÍA
=====================================================*/

const galleryProjects = {

    casa:{

        title:"Casa Moderna",

        category:"Residencial",

        description:"Proyecto residencial de diseño contemporáneo, construido con materiales premium y espacios amplios que priorizan la iluminación natural y el confort.",

        location:"Asunción, Paraguay",

        year:"2025",

        images:[

            "img/galeria/casa-moderna.png",

            "img/galeria/cocina.png",

            "img/galeria/bano.png",

            "img/galeria/vivienda-interior.png"

        ]

    },

    barrio:{

        title:"Barrio Residencial",

        category:"Urbanización",

        description:"Desarrollo residencial compuesto por viviendas modernas, infraestructura urbana y amplias áreas verdes.",

        location:"Luque, Paraguay",

        year:"2024",

        images:[

            "img/galeria/barrio-residencial.png",

            "img/galeria/vivienda-disenomoderno.png"

        ]

    },

    comercial:{

        title:"Edificio Comercial",

        category:"Comercial",

        description:"Complejo corporativo diseñado para empresas que buscan espacios modernos y funcionales.",

        location:"Asunción, Paraguay",

        year:"2025",

        images:[

            "img/galeria/edificio-comercial.png",

            "img/galeria/estructura-edificio.png"

        ]

    },

    edificio:{

        title:"Edificio Residencial",

        category:"Residencial",

        description:"Proyecto habitacional de varios niveles con arquitectura contemporánea y excelentes terminaciones.",

        location:"San Lorenzo",

        year:"2023",

        images:[

            "img/galeria/edificio-residencial.png",

            "img/galeria/hormigonado.png"

        ]

    },

    arquitectura:{

        title:"Diseño Arquitectónico",

        category:"Arquitectura",

        description:"Modelado arquitectónico tridimensional para visualizar el proyecto antes de construir.",

        location:"Proyecto Ejecutivo",

        year:"2025",

        images:[

            "img/galeria/diseno-arquitectonico3d.png",

            "img/galeria/planificacion-arquitectonica.png"

        ]

    },

    fachada:{

        title:"Fachada Moderna",

        category:"Arquitectura",

        description:"Diseño de fachada contemporánea utilizando materiales de alta calidad y líneas minimalistas.",

        location:"Proyecto Residencial",

        year:"2024",

        images:[

            "img/galeria/detalle-arquitectonico-fachada.png",

            "img/galeria/detalle-terminacioninterior.png"

        ]

    },
        inicio:{

        title:"Inicio de Obra",

        category:"Construcción",

        description:"Preparación del terreno y organización inicial del proyecto antes de comenzar la construcción.",

        location:"Área Metropolitana",

        year:"2024",

        images:[

            "img/galeria/inicio-obra.png",

            "img/galeria/maquinaria-pesada.png"

        ]

    },

    supervision:{

        title:"Supervisión Técnica",

        category:"Supervisión",

        description:"Seguimiento constante del avance de obra para garantizar calidad y cumplimiento del cronograma.",

        location:"Asunción",

        year:"2025",

        images:[

            "img/galeria/supervision-tecnica.png",

            "img/galeria/trabajo-estructural.png"

        ]

    },

    materiales:{

        title:"Materiales Premium",

        category:"Materiales",

        description:"Selección de materiales certificados que garantizan resistencia, durabilidad y acabados de alta calidad.",

        location:"Depósito Central",

        year:"2025",

        images:[

            "img/galeria/materiales-construccion.png",

            "img/galeria/hormigonado.png"

        ]

    },

    avance:{

        title:"Avance de Obra",

        category:"Construcción",

        description:"Registro del progreso de la obra durante las distintas etapas del proceso constructivo.",

        location:"Asunción",

        year:"2025",

        images:[

            "img/galeria/avance-obraatardecer.png",

            "img/galeria/trabajo-estructural.png"

        ]

    },

    planificacion:{

        title:"Planificación Arquitectónica",

        category:"Arquitectura",

        description:"Organización técnica y planificación detallada previa a la ejecución del proyecto.",

        location:"Departamento Técnico",

        year:"2025",

        images:[

            "img/galeria/planificacion-arquitectonica.png",

            "img/galeria/plano.png"

        ]

    },

    vivienda:{

        title:"Vivienda Terminada",

        category:"Residencial",

        description:"Proyecto completamente finalizado con acabados modernos y diseño funcional.",

        location:"Asunción",

        year:"2025",

        images:[

            "img/galeria/vivienda-disenomoderno.png",

            "img/galeria/cocina.png",

            "img/galeria/bano.png",

            "img/galeria/vivienda-interior.png"

        ]

    }

};

/*=====================================================
REFERENCIAS DEL MODAL
=====================================================*/

const galleryModal = document.getElementById("galleryModal");

const galleryImage = document.getElementById("galleryImage");

const galleryTitle = document.getElementById("galleryTitle");

const galleryCategory = document.getElementById("galleryCategory");

const galleryDescription = document.getElementById("galleryDescription");

const galleryLocation = document.getElementById("galleryLocation");

const galleryYear = document.getElementById("galleryYear");

const galleryThumbs = document.getElementById("galleryThumbs");

const galleryClose = document.querySelector(".gallery-close");

const projectButtons = document.querySelectorAll(".project-btn");

/*=====================================================
ABRIR MODAL
=====================================================*/

projectButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        const project=galleryProjects[button.dataset.project];

        galleryImage.src=project.images[0];

        galleryImage.alt=project.title;

        galleryTitle.textContent=project.title;

        galleryCategory.textContent=project.category;

        galleryDescription.textContent=project.description;

        galleryLocation.textContent=project.location;

        galleryYear.textContent=project.year;

        galleryThumbs.innerHTML="";

        project.images.forEach((image,index)=>{

            const thumb=document.createElement("img");

            thumb.src=image;

            thumb.alt=project.title;

            if(index===0){

                thumb.classList.add("active");

            }

            thumb.addEventListener("click",()=>{

                galleryImage.src=image;

                galleryImage.style.opacity="0";

                setTimeout(()=>{

                    galleryImage.src=image;

                    galleryImage.style.opacity="1";

                },150);

                document.querySelectorAll(".gallery-thumbnails img")

                .forEach(img=>img.classList.remove("active"));

                thumb.classList.add("active");

            });

            galleryThumbs.appendChild(thumb);

        });

        galleryModal.classList.add("active");

    });

});

/*=====================================================
CERRAR MODAL
=====================================================*/

galleryClose.addEventListener("click",()=>{

    galleryModal.classList.remove("active");

});

galleryModal.addEventListener("click",(e)=>{

    if(e.target===galleryModal){

        galleryModal.classList.remove("active");

    }

});

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        galleryModal.classList.remove("active");

    }

});