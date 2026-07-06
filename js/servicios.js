/* =====================================================
   MODAL SERVICIOS
===================================================== */

const services = {

    ampliacion:{

        title:"Ampliación de Viviendas",

        category:"Residencial",

        image:"img/servicios/ampliaciones-viviendas.png",

        description:"Diseñamos y ejecutamos ampliaciones de viviendas para aumentar el espacio, la comodidad y la funcionalidad del hogar, respetando la arquitectura existente.",

        benefits:[

            "Diseño personalizado",

            "Materiales de alta calidad",

            "Supervisión profesional",

            "Entrega en los plazos establecidos"

        ],

        extra:"El proyecto se adapta completamente a las necesidades del cliente."

    },

    comercial:{

        title:"Construcción Comercial",

        category:"Comercial",

        image:"img/servicios/construccion-comercial.png",

        description:"Construimos oficinas, locales comerciales y espacios corporativos modernos con soluciones eficientes.",

        benefits:[

            "Diseño funcional",

            "Optimización de espacios",

            "Construcción profesional",

            "Asesoramiento técnico"

        ],

        extra:"Cada proyecto se desarrolla de acuerdo con los objetivos del cliente."

    },

    viviendas:{

        title:"Construcción de Viviendas",

        category:"Residencial",

        image:"img/servicios/construccion-viviendas.png",

        description:"Construcción integral de viviendas modernas utilizando materiales premium y procesos de alta calidad.",

        benefits:[

            "Proyecto personalizado",

            "Materiales certificados",

            "Control de calidad",

            "Entrega llave en mano"

        ],

        extra:"Ideal para viviendas unifamiliares y residenciales."

    },

    arquitectura:{

        title:"Diseño Arquitectónico",

        category:"Arquitectura",

        image:"img/servicios/diseno-arquitectonico.png",

        description:"Creamos proyectos arquitectónicos innovadores que combinan funcionalidad, estética y eficiencia.",

        benefits:[

            "Planos arquitectónicos",

            "Modelado 3D",

            "Asesoría profesional",

            "Diseños personalizados"

        ],

        extra:"Cada propuesta es desarrollada según los requerimientos del cliente."

    },
        edificios:{

        title:"Edificios Residenciales",

        category:"Residencial",

        image:"img/servicios/edificios-residenciales.png",

        description:"Desarrollamos edificios residenciales modernos con soluciones estructurales seguras.",

        benefits:["Diseño moderno","Alta calidad","Supervisión permanente","Optimización de espacios"],

        extra:"Proyectos de pequeña y gran escala."

    },

    hormigon:{

        title:"Estructuras de Hormigón",

        category:"Ingeniería",

        image:"img/servicios/estructura-hormigon.png",

        description:"Construcción de estructuras resistentes mediante sistemas de hormigón armado.",

        benefits:["Alta resistencia","Normas técnicas","Durabilidad","Control de calidad"],

        extra:"Aplicable a viviendas, edificios e infraestructura."

    },

    instalaciones:{

        title:"Instalaciones Generales",

        category:"Instalaciones",

        image:"img/servicios/instalaciones.png",

        description:"Instalaciones eléctricas, sanitarias y sistemas complementarios.",

        benefits:["Instalación eléctrica","Sistema sanitario","Seguridad","Garantía"],

        extra:"Soluciones adaptadas a cada proyecto."

    },

    suelo:{

        title:"Movimiento de Suelo",

        category:"Obras Civiles",

        image:"img/servicios/movimiento-suelo.png",

        description:"Preparación del terreno mediante maquinaria especializada.",

        benefits:["Excavaciones","Nivelación","Compactación","Preparación del terreno"],

        extra:"Etapa fundamental para cualquier construcción."

    },
        civil:{

        title:"Obras Civiles",

        category:"Infraestructura",

        image:"img/servicios/obras-civiles.png",

        description:"Ejecutamos obras civiles e infraestructura con altos estándares de ingeniería, seguridad y calidad.",

        benefits:[

            "Infraestructura urbana",

            "Control técnico",

            "Materiales certificados",

            "Ejecución profesional"

        ],

        extra:"Proyectos desarrollados conforme a las necesidades del cliente."

    },

    remodelaciones:{

        title:"Remodelaciones",

        category:"Remodelación",

        image:"img/servicios/remodelaciones.png",

        description:"Transformamos viviendas y espacios comerciales mediante remodelaciones funcionales y modernas.",

        benefits:[

            "Renovación de espacios",

            "Acabados modernos",

            "Optimización del diseño",

            "Trabajo personalizado"

        ],

        extra:"Ideal para modernizar inmuebles existentes."

    },

    render:{

        title:"Render Arquitectónico",

        category:"Arquitectura",

        image:"img/servicios/render-arquitectonico.png",

        description:"Realizamos visualizaciones arquitectónicas 3D realistas para conocer el proyecto antes de construir.",

        benefits:[

            "Modelado 3D",

            "Visualización realista",

            "Presentaciones profesionales",

            "Apoyo al diseño"

        ],

        extra:"Permite realizar modificaciones antes del inicio de la obra."

    },

    supervision:{

        title:"Supervisión de Obra",

        category:"Supervisión",

        image:"img/servicios/supervision-obra.png",

        description:"Supervisamos cada etapa del proyecto garantizando calidad, seguridad y cumplimiento del cronograma.",

        benefits:[

            "Seguimiento permanente",

            "Control de calidad",

            "Supervisión técnica",

            "Gestión eficiente"

        ],

        extra:"Aseguramos el correcto desarrollo de la construcción."

    },

    acabados:{

        title:"Terminaciones y Acabados",

        category:"Acabados",

        image:"img/servicios/terminaciones-acabados.png",

        description:"Ejecutamos acabados interiores y exteriores con materiales premium y atención al detalle.",

        benefits:[

            "Pisos",

            "Revestimientos",

            "Pintura",

            "Detalles finales"

        ],

        extra:"Acabados que aportan elegancia y durabilidad."

    },

    llave:{

        title:"Proyecto Llave en Mano",

        category:"Integral",

        image:"img/servicios/vivienda-terminada.png",

        description:"Gestionamos todas las etapas del proyecto hasta entregar una obra completamente terminada y lista para su uso.",

        benefits:[

            "Diseño",

            "Construcción",

            "Acabados",

            "Entrega final"

        ],

        extra:"Una solución integral para quienes buscan tranquilidad durante todo el proceso."

    }

};
const modal = document.getElementById("serviceModal");

const modalImage = document.getElementById("modalImage");

const modalTitle = document.getElementById("modalTitle");

const modalCategory = document.getElementById("modalCategory");

const modalDescription = document.getElementById("modalDescription");

const modalBenefits = document.getElementById("modalBenefits");

const modalExtra = document.getElementById("modalExtra");

const buttons = document.querySelectorAll(".service-btn");

const closeModal = document.querySelector(".close-modal");
buttons.forEach(button=>{

    button.addEventListener("click",()=>{

        const service=services[button.dataset.service];

        modalImage.src=service.image;

        modalImage.alt=service.title;

        modalTitle.textContent=service.title;

        modalCategory.textContent=service.category;

        modalDescription.textContent=service.description;

        modalExtra.textContent=service.extra;

        modalBenefits.innerHTML="";

        service.benefits.forEach(item=>{

            modalBenefits.innerHTML+=`<li>${item}</li>`;

        });

        modal.classList.add("active");


    });

});
closeModal.addEventListener("click",()=>{

    modal.classList.remove("active");


});

modal.addEventListener("click",(e)=>{

    if(e.target===modal){

        modal.classList.remove("active");


    }

});

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        modal.classList.remove("active");


    }

});
