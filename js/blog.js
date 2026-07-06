/*=====================================================
ARTÍCULOS DEL BLOG
=====================================================*/

const blogPosts={

    materiales:{

        title:"Cómo elegir materiales de calidad para tu proyecto",

        category:"Construcción",

        date:"15 Enero 2026",

        image:"img/blog/materiales-calidad.png",

        content:`

            <p>

                La selección de materiales de construcción es uno de los aspectos
                más importantes para garantizar la seguridad, durabilidad y calidad
                de cualquier proyecto.

            </p>

            <p>

                Es recomendable optar por materiales certificados, resistentes y
                adecuados para las condiciones climáticas de la zona donde se
                desarrollará la obra.

            </p>

            <p>

                Además de considerar el precio, también es importante evaluar la
                vida útil, el mantenimiento requerido y el respaldo que ofrecen
                los fabricantes.

            </p>

        `

    },

    arquitectura:{

        title:"Tendencias en arquitectura moderna para viviendas",

        category:"Arquitectura",

        date:"30 Enero 2026",

        image:"img/blog/arquitectura-moderna.png",

        content:`

            <p>

                La arquitectura moderna apuesta por espacios abiertos,
                iluminación natural y una distribución funcional que mejora
                la calidad de vida.

            </p>

            <p>

                Materiales sostenibles, grandes ventanales y diseños
                minimalistas forman parte de las principales tendencias
                actuales.

            </p>

            <p>

                También ha aumentado el uso de tecnologías inteligentes para
                mejorar la eficiencia energética de las viviendas.

            </p>

        `

    },

    remodelacion:{

        title:"Cinco consejos antes de remodelar tu vivienda",

        category:"Remodelación",

        date:"12 Febrero 2026",

        image:"img/blog/remodelacion.png",

        content:`

            <p>

                Antes de iniciar una remodelación es fundamental definir un
                presupuesto y establecer claramente los objetivos del proyecto.

            </p>

            <p>

                Contar con profesionales especializados ayudará a evitar
                errores costosos durante la ejecución de la obra.

            </p>

            <p>

                Una adecuada planificación permitirá optimizar tiempos y
                obtener mejores resultados.

            </p>

        `

    },

    supervision:{

        title:"La importancia de la supervisión técnica en una obra",

        category:"Construcción",

        date:"01 Marzo 2026",

        image:"img/blog/supervision-tecnica.png",

        content:`

            <p>

                La supervisión técnica garantiza que cada etapa de la obra
                cumpla con los planos, especificaciones y normas de seguridad.

            </p>

            <p>

                Gracias a este seguimiento es posible detectar problemas a
                tiempo y mantener la calidad durante todo el proceso
                constructivo.

            </p>

            <p>

                Un control permanente reduce riesgos y mejora la eficiencia
                del proyecto.

            </p>

        `

    },
        espacios:{

        title:"Cómo optimizar los espacios interiores de una vivienda",

        category:"Consejos",

        date:"18 Marzo 2026",

        image:"img/blog/espacios-interiores.png",

        content:`

            <p>

                Una correcta distribución permite aprovechar mejor cada metro
                cuadrado disponible dentro de una vivienda.

            </p>

            <p>

                La iluminación natural, los muebles multifuncionales y los
                colores claros generan una mayor sensación de amplitud.

            </p>

            <p>

                Un diseño inteligente mejora tanto la funcionalidad como el
                confort del hogar.

            </p>

        `

    },

    innovacion:{

        title:"Tecnología aplicada a la construcción moderna",

        category:"Innovación",

        date:"05 Abril 2026",

        image:"img/blog/innovacion-construccion.png",

        content:`

            <p>

                La industria de la construcción incorpora constantemente nuevas
                tecnologías que optimizan tiempos y recursos.

            </p>

            <p>

                Herramientas como BIM, drones, escáneres 3D y software de
                planificación permiten una mejor gestión de los proyectos.

            </p>

            <p>

                La innovación tecnológica mejora la precisión, reduce costos
                y aumenta la productividad en cada obra.

            </p>

        `

    }

};
/*=====================================================
REFERENCIAS
=====================================================*/

const blogModal=document.getElementById("blogModal");

const blogImage=document.getElementById("blogImage");

const blogCategory=document.getElementById("blogCategory");

const blogDate=document.getElementById("blogDate");

const blogTitle=document.getElementById("blogTitle");

const blogContent=document.getElementById("blogContent");

const blogClose=document.querySelector(".blog-close");

const postButtons=document.querySelectorAll(".post-btn");

const searchInput=document.getElementById("searchInput");

const filterButtons=document.querySelectorAll(".filter-btn");

const postCards=document.querySelectorAll(".post-card");

/*=====================================================
ABRIR MODAL
=====================================================*/

postButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        const post=blogPosts[button.dataset.post];

        blogImage.src=post.image;

        blogImage.alt=post.title;

        blogCategory.textContent=post.category;

        blogDate.innerHTML=`<i class="fa-solid fa-calendar"></i> ${post.date}`;

        blogTitle.textContent=post.title;

        blogContent.innerHTML=post.content;

        blogModal.classList.add("active");

        document.body.style.overflow="hidden";

    });

});

/*=====================================================
CERRAR MODAL
=====================================================*/

blogClose.addEventListener("click",()=>{

    blogModal.classList.remove("active");

    document.body.style.overflow="auto";

});

blogModal.addEventListener("click",(e)=>{

    if(e.target===blogModal){

        blogModal.classList.remove("active");

        document.body.style.overflow="auto";

    }

});

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        blogModal.classList.remove("active");

        document.body.style.overflow="auto";

    }

});

/*=====================================================
BUSCADOR
=====================================================*/

searchInput.addEventListener("keyup",()=>{

    const value=searchInput.value.toLowerCase();

    postCards.forEach(card=>{

        const title=card.querySelector("h3").textContent.toLowerCase();

        const description=card.querySelector("p").textContent.toLowerCase();

        if(title.includes(value) || description.includes(value)){

            card.style.display="flex";

        }else{

            card.style.display="none";

        }

    });

});

/*=====================================================
FILTROS
=====================================================*/

filterButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        filterButtons.forEach(btn=>{

            btn.classList.remove("active");

        });

        button.classList.add("active");

        const category=button.dataset.filter;

        postCards.forEach(card=>{

            if(category==="all"){

                card.style.display="flex";

            }else if(card.dataset.category===category){

                card.style.display="flex";

            }else{

                card.style.display="none";

            }

        });

    });

});