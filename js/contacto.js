/*=====================================================
EMAILJS
=====================================================*/

emailjs.init("uKixGBCQ8RYz2cvH8");

/*=====================================================
REFERENCIAS
=====================================================*/

const contactForm=document.getElementById("contactForm");

const nombre=document.getElementById("nombre");

const apellido=document.getElementById("apellido");

const correo=document.getElementById("correo");

const telefono=document.getElementById("telefono");

const consulta=document.getElementById("consulta");

const asunto=document.getElementById("asunto");

const mensaje=document.getElementById("mensaje");

/*=====================================================
MENSAJE
=====================================================*/

const formMessage=document.createElement("p");

formMessage.classList.add("form-message");

contactForm.appendChild(formMessage);

/*=====================================================
ENVIAR FORMULARIO
=====================================================*/

contactForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    formMessage.textContent="";

    formMessage.className="form-message";

    if(

        nombre.value.trim()==="" ||

        apellido.value.trim()==="" ||

        correo.value.trim()==="" ||

        telefono.value.trim()==="" ||

        consulta.value==="" ||

        asunto.value.trim()==="" ||

        mensaje.value.trim()===""

    ){

        formMessage.textContent="Complete todos los campos.";

        formMessage.classList.add("error");

        return;

    }

    const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(correo.value)){

        formMessage.textContent="Ingrese un correo electrónico válido.";

        formMessage.classList.add("error");

        return;

    }
        emailjs.send(

        "service_umk5arv",

        "template_u32wz98",

        {

            nombre:nombre.value,

            apellido:apellido.value,

            correo:correo.value,

            telefono:telefono.value,

            consulta:consulta.value,

            asunto:asunto.value,

            mensaje:mensaje.value

        }

    ).then(()=>{

        formMessage.textContent="Mensaje enviado correctamente.";

        formMessage.classList.add("success");

        contactForm.reset();

    }).catch(()=>{

        formMessage.textContent="No fue posible enviar el mensaje.";

        formMessage.classList.add("error");

    });

});