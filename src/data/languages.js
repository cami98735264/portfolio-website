
const languages = {
    es: {
        aboutMe: "¡Hola! 👋,  Mi nombre es Cristián. Soy un desarrollador Full Stack especializado en backend y con amplios conocimientos en JavaScript, ReactJS y ExpressJS. Me destaco en programación avanzada, gestión de bases de datos y diseño de experiencias de usuario (UI/UX).",
        languagesList: [{
            name: "Español",
            value: "es"
        }, {
            name: "Inglés",
            value: "en"

        }],
        navbarItems: [
            {
                name: "Sobre mí",
                redirectUrl: "#sobre-mi"
            },
            {
                name: "Proyectos",
                redirectUrl: "#proyectos"
            },
            {
                name: "Habilidades",
                redirectUrl: "#habilidades"
            },
            {
                name: "Contacto",
                redirectUrl: "#contacto"
            }],
        whatsappText: "¡Hola! 👋, ¿Cómo estás? Me gustaría saber más sobre tus servicios.",
        skills: {
            title: "Mis habilidades"
        },
        projects: {
            projectsTypes: {
                personal: "Proyecto personal",
                labor: "Proyecto laboral"
            },
            projectsTitle: "Mis Proyectos",
            projectsList: [{
                title: "Sistema para seguimiento de egresados",
                description: "Este software permite a los egresados enviar su educación y trabajos después de graduarse para que la universidad pueda realizar un seguimiento de las estadísticas. Desarrollé las vistas de la aplicación en ReactJS, incluyendo tanto la página de inicio como el sistema de panel de control. Diseñé la UI/UX utilizando la biblioteca de componentes DaisyUI para asegurar la consistencia visual en todo el producto. En el backend, utilizando ExpressJS, incluí sistemas de autenticación segura y gestión de sesiones. Además, integré una API pública externa de datos (universidades en el país) para capturar dinámicamente la respuesta del usuario desde los inputs.",
                github: {
                    frontend: "https://github.com/cami98735264/egresados-iesi",
                    backend: "https://github.com/cami98735264/egresados-sanisidoro-backend"
                },
                technologies: ["javascript", "react", "nodedotjs", "express", "mysql"],
                live: "Ver en vivo",
                projectType: 1,
                images: [{
                    url: "/projects_screenshots/sanisidoro_egresados/Screenshot_1.png",
                    alt: "Imagen 1"
                }, {
                    url: "/projects_screenshots/sanisidoro_egresados/Screenshot_2.png",
                    alt: "Imagen 2"
                }, {
                    url: "/projects_screenshots/sanisidoro_egresados/Screenshot_3.png",
                    alt: "Imagen 3"
                }, {
                    url: "/projects_screenshots/sanisidoro_egresados/Screenshot_4.png",
                    alt: "Imagen 4"
                }, {
                    url: "/projects_screenshots/sanisidoro_egresados/Screenshot_5.png",
                    alt: "Imagen 5"
                }, {
                    url: "/projects_screenshots/sanisidoro_egresados/Screenshot_6.png",
                    alt: "Imagen 6"
                }, {
                    url: "/projects_screenshots/sanisidoro_egresados/Screenshot_7.png",
                    alt: "Imagen 7"
                }, {
                    url: "/projects_screenshots/sanisidoro_egresados/Screenshot_8.png",
                    alt: "Imagen 8"
                }, {
                    url: "/projects_screenshots/sanisidoro_egresados/Screenshot_9.png",
                    alt: "Imagen 9"
                }, {
                    url: "/projects_screenshots/sanisidoro_egresados/Screenshot_10.png",
                    alt: "Imagen 10"
                }, {
                    url: "/projects_screenshots/sanisidoro_egresados/Screenshot_11.png",
                    alt: "Imagen 11"
                }, {
                    url: "/projects_screenshots/sanisidoro_egresados/Screenshot_12.png",
                    alt: "Imagen 12"
                },
                {
                    url: "/projects_screenshots/sanisidoro_egresados/Screenshot_13.png",
                    alt: "Imagen 13"
                },
                {
                    url: "/projects_screenshots/sanisidoro_egresados/Screenshot_14.png",
                    alt: "Imagen 14"
                },
                {
                    url: "/projects_screenshots/sanisidoro_egresados/Screenshot_15.png",
                    alt: "Imagen 15"
                }, {
                    url: "/projects_screenshots/sanisidoro_egresados/Screenshot_16.png",
                    alt: "Imagen 16"
                }]
            }, {
                title: "Sistema de veterinaria",
                description: "Diseñé y desarrollé el módulo de registro e inicio de sesión, incluyendo la creación de la UI/UX de la aplicación. Implementé un sistema CRUD para gestionar las citas de mascotas, integrando datos dinámicos de la base de datos como el tipo de animal y el tipo de consulta (cirugía, revisión, accidente, etc.). El sistema fue configurado para incluir los precios de las consultas y mostrar los datos relevantes en la pantalla. Se integraron funcionalidades avanzadas para mejorar la gestión y presentación de información crucial para la práctica veterinaria.",
                github: {
                    frontend: "https://github.com/cami98735264/veterinaria-crud-sessions",
                    backend: "https://github.com/cami98735264/veterinaria-crud-sessions-backend"
                },
                technologies: ["javascript", "react", "nodedotjs", "express", "mysql"],
                live: "Ver en vivo",
                projectType: 1,
                /* images in /veterinaria_crud, there is a total of 13 images */
                images: [{
                    url: "/projects_screenshots/veterinaria_crud/Screenshot_1.png",
                    alt: "Imagen 1"
                }, {
                    url: "/projects_screenshots/veterinaria_crud/Screenshot_2.png",
                    alt: "Imagen 2"
                }, {
                    url: "/projects_screenshots/veterinaria_crud/Screenshot_3.png",
                    alt: "Imagen 3"
                }, {
                    url: "/projects_screenshots/veterinaria_crud/Screenshot_4.png",
                    alt: "Imagen 4"
                }, {
                    url: "/projects_screenshots/veterinaria_crud/Screenshot_5.png",
                    alt: "Imagen 5"
                }, {
                    url: "/projects_screenshots/veterinaria_crud/Screenshot_6.png",
                    alt: "Imagen 6"
                }, {
                    url: "/projects_screenshots/veterinaria_crud/Screenshot_7.png",
                    alt: "Imagen 7"
                }, {
                    url: "/projects_screenshots/veterinaria_crud/Screenshot_8.png",
                    alt: "Imagen 8"
                }, {
                    url: "/projects_screenshots/veterinaria_crud/Screenshot_9.png",
                    alt: "Imagen 9"
                }, {
                    url: "/projects_screenshots/veterinaria_crud/Screenshot_10.png",
                    alt: "Imagen 10"
                }, {
                    url: "/projects_screenshots/veterinaria_crud/Screenshot_11.png",
                    alt: "Imagen 11"
                }, {
                    url: "/projects_screenshots/veterinaria_crud/Screenshot_12.png",
                    alt: "Imagen 12"
                }, {
                    url: "/projects_screenshots/veterinaria_crud/Screenshot_13.png",
                    alt: "Imagen 13"
                }]
            }, {
                title: "Plataforma de seguimiento y monitoreo de placas vehículares detectadas",
                description: "Plataforma y software de detección de placas que utiliza el algoritmo de inteligencia artificial YoloV8 para el reconocimiento de matrículas. Implementación de funcionalidades para estudiar y mapear patrones de comportamiento basados en la ubicación de los registros de matrículas dentro de la plataforma web alojada en archivos estáticos usando ExpressJS.",
                github: {
                    frontend: "https://github.com/cami98735264/graphical-interface-monitoreo-placas",
                    backend: "https://github.com/cami98735264/graphical-interface-monitoreo-placas",
                },
                technologies: ["javascript", "mysql", "nodedotjs", "express"],
                live: "Ver en vivo",
                projectType: 2,
                /* images in /placas_plataforma, there is a total of 12 images */
                images: [{
                    url: "/projects_screenshots/placas_plataforma/Screenshot_1.png",
                    alt: "Imagen 1"
                }, {
                    url: "/projects_screenshots/placas_plataforma/Screenshot_2.png",
                    alt: "Imagen 2"
                }, {
                    url: "/projects_screenshots/placas_plataforma/Screenshot_3.png",
                    alt: "Imagen 3"
                }, {
                    url: "/projects_screenshots/placas_plataforma/Screenshot_4.png",
                    alt: "Imagen 4"
                }, {
                    url: "/projects_screenshots/placas_plataforma/Screenshot_5.png",
                    alt: "Imagen 5"
                }, {
                    url: "/projects_screenshots/placas_plataforma/Screenshot_6.png",
                    alt: "Imagen 6"
                }, {
                    url: "/projects_screenshots/placas_plataforma/Screenshot_7.png",
                    alt: "Imagen 7"
                },
                {
                    url: "/projects_screenshots/placas_plataforma/Screenshot_13.jpg",
                    alt: "Image 13"
                },
                {
                    url: "/projects_screenshots/placas_plataforma/Screenshot_8.png",
                    alt: "Imagen 8"
                }, {
                    url: "/projects_screenshots/placas_plataforma/Screenshot_9.png",
                    alt: "Imagen 9"
                }, {
                    url: "/projects_screenshots/placas_plataforma/Screenshot_10.png",
                    alt: "Imagen 10"
                }, {
                    url: "/projects_screenshots/placas_plataforma/Screenshot_11.png",
                    alt: "Imagen 11"
                }, {
                    url: "/projects_screenshots/placas_plataforma/Screenshot_12.png",
                    alt: "Imagen 12"
                }]
            },{
                title: "Software de detección de placas vehículares YoloV8",
                description: "Desarrollo de software de reconocimiento de matrículas utilizando el algoritmo de inteligencia artificial YoloV8.",
                github: {
                    frontend: "https://github.com/cami98735264/placas-carro",
                    backend: "https://github.com/cami98735264/placas-carro"
                },
                /* used technologies are: python, mysql, flask, yolo, opencv */
                technologies: ["python", "mysql", "flask", "yolo", "opencv"],
                live: "Ver en vivo",
                projectType: 2,
                /* images in /placas_deteccion_software, there is a total of 8 images */
                images: [{
                    url: "/projects_screenshots/placas_deteccion_software/Screenshot_1.png",
                    alt: "Imagen 1"
                }, {
                    url: "/projects_screenshots/placas_deteccion_software/Screenshot_2.png",
                    alt: "Imagen 2"
                }, {
                    url: "/projects_screenshots/placas_deteccion_software/Screenshot_3.png",
                    alt: "Imagen 3"
                }, {
                    url: "/projects_screenshots/placas_deteccion_software/Screenshot_4.png",
                    alt: "Imagen 4"
                }, {
                    url: "/projects_screenshots/placas_deteccion_software/Screenshot_5.png",
                    alt: "Imagen 5"
                }, {
                    url: "/projects_screenshots/placas_deteccion_software/Screenshot_6.png",
                    alt: "Imagen 6"
                }, {
                    url: "/projects_screenshots/placas_deteccion_software/Screenshot_7.jpg",
                    alt: "Imagen 7"
                }, {
                    url: "/projects_screenshots/placas_deteccion_software/Screenshot_8.jpg",
                    alt: "Imagen 8"
                }]
            },
        {
            title: "Plataforma deportiva para gestión de torneos",
            description: "Desarrollo de una plataforma full-stack con gestión de roles, enrutamiento y autenticación en ReactJS y ExpressJS para gestionar cada fase de los torneos deportivos, utilizando validaciones avanzadas y dinámicas con la biblioteca express-validator.",
            github: {
                frontend: "https://github.com/cami98735264",
                backend: "https://github.com/cami98735264",
            },
            technologies: ["javascript", "mysql", "nodedotjs", "react", "express"],
            live: "Ver en vivo",
            projectType: 2,
            /* images in /sports_plataforma, there is a total of 22 images */
            images: [{
                url: "/projects_screenshots/sports_plataforma/Screenshot_1.png",
                alt: "Imagen 1"
            }, {
                url: "/projects_screenshots/sports_plataforma/Screenshot_2.png",
                alt: "Imagen 2"
            }, {
                url: "/projects_screenshots/sports_plataforma/Screenshot_3.png",
                alt: "Imagen 3"
            }, {
                url: "/projects_screenshots/sports_plataforma/Screenshot_4.png",
                alt: "Imagen 4"
            }, {
                url: "/projects_screenshots/sports_plataforma/Screenshot_5.png",
                alt: "Imagen 5"
            }, {
                url: "/projects_screenshots/sports_plataforma/Screenshot_6.png",
                alt: "Imagen 6"
            }, {
                url: "/projects_screenshots/sports_plataforma/Screenshot_7.png",
                alt: "Imagen 7"
            }, {
                url: "/projects_screenshots/sports_plataforma/Screenshot_8.png",
                alt: "Imagen 8"
            }, {
                url: "/projects_screenshots/sports_plataforma/Screenshot_9.png",
                alt: "Imagen 9"
            }, {
                url: "/projects_screenshots/sports_plataforma/Screenshot_10.png",
                alt: "Imagen 10"
            }, {
                url: "/projects_screenshots/sports_plataforma/Screenshot_11.png",
                alt: "Imagen 11"
            }, {
                url: "/projects_screenshots/sports_plataforma/Screenshot_12.png",
                alt: "Imagen 12"
            }, {
                url: "/projects_screenshots/sports_plataforma/Screenshot_13.png",
                alt: "Imagen 13"
            }, {
                url: "/projects_screenshots/sports_plataforma/Screenshot_14.png",
                alt: "Imagen 14"
            }, {
                url: "/projects_screenshots/sports_plataforma/Screenshot_15.png",
                alt: "Imagen 15"
            }, {
                url: "/projects_screenshots/sports_plataforma/Screenshot_16.png",
                alt: "Imagen 16"
            }, {
                url: "/projects_screenshots/sports_plataforma/Screenshot_17.png",
                alt: "Imagen 17"
            }, {
                url: "/projects_screenshots/sports_plataforma/Screenshot_18.png",
                alt: "Imagen 18"
            }, {
                url: "/projects_screenshots/sports_plataforma/Screenshot_19.png",
                alt: "Imagen 19"
            }, {
                url: "/projects_screenshots/sports_plataforma/Screenshot_20.png",
                alt: "Imagen 20"
            }, {
                url: "/projects_screenshots/sports_plataforma/Screenshot_21.png",
                alt: "Imagen 21"
            }, {
                url: "/projects_screenshots/sports_plataforma/Screenshot_22.png",
                alt: "Imagen 22"
            }]
        },
    {
        title: "Autenticación avanzada para una plataforma de sensores",
        description: "Durante el desarrollo del sistema de sensores, creé un sistema de inicio de sesión y registro completo utilizando ExpressJS y autenticación por correo electrónico. Esto incluyó implementar la funcionalidad para enviar códigos de inicio de sesión por correo electrónico utilizando credenciales temporales de aplicaciones de Google y la biblioteca Nodemailer. En el frontend, construido con ReactJS y DaisyUI, estos códigos de inicio de sesión dinámicos se enviaron a los usuarios por correo electrónico e integraron sin problemas en el formulario de inicio de sesión, asegurando un proceso de autenticación fluido y seguro.",
        github: {
            frontend: "https://github.com/cami98735264/sensores-auth-system-router",
            backend: "https://github.com/cami98735264/sensores-auth-system-router-backend"
        },
        technologies: ["javascript", "react", "nodedotjs", "express", "mysql"],
        live: "Ver en vivo",
        projectType: 1,
        /* images in /sensors_plataforma, there are 10 images */
        images: [{
            url: "/projects_screenshots/sensors_plataforma/Screenshot_1.png",
            alt: "Imagen 1"
        }, {
            url: "/projects_screenshots/sensors_plataforma/Screenshot_2.png",
            alt: "Imagen 2"
        }, {
            url: "/projects_screenshots/sensors_plataforma/Screenshot_3.png",
            alt: "Imagen 3"
        }, {
            url: "/projects_screenshots/sensors_plataforma/Screenshot_4.png",
            alt: "Imagen 4"
        }, {
            url: "/projects_screenshots/sensors_plataforma/Screenshot_5.png",
            alt: "Imagen 5"
        }, {
            url: "/projects_screenshots/sensors_plataforma/Screenshot_6.png",
            alt: "Imagen 6"
        }, {
            url: "/projects_screenshots/sensors_plataforma/Screenshot_7.png",
            alt: "Imagen 7"
        }, {
            url: "/projects_screenshots/sensors_plataforma/Screenshot_8.png",
            alt: "Imagen 8"
        }, {
            url: "/projects_screenshots/sensors_plataforma/Screenshot_9.png",
            alt: "Imagen 9"
        }, {
            url: "/projects_screenshots/sensors_plataforma/Screenshot_10.png",
            alt: "Imagen 10"
        }]
    },
{
    title: "Traductor de lenguaje natural a lenguaje de señas (interprete virtual)",
    description: "Desarrollo de una API en ExpressJS para interpretar el lenguaje de señas colombiano basada en inteligencia artificial utilizando GPT-4 y la API de OpenAI. · Implementación de un sistema para traducir texto en lenguaje natural al lenguaje de señas colombiano, mostrado por un intérprete en una pantalla verde dentro de una plataforma web construida en NextJS. · Desarrollo y optimización de algoritmos para el procesamiento de lenguaje natural y el reconocimiento de señas para asegurar una traducción precisa y fluida.",
    github: {
        frontend: "https://github.com/cami98735264/nextjs-lenguaje-de-senas",
        backend: "https://github.com/cami98735264/nextjs-lenguaje-de-senas",
    },
    technologies: ["javascript", "mysql", "nodedotjs", "nextdotjs", "express"],
    live: "Ver en vivo",
    projectType: 2,
    /* images in /virtual_interpreter, there is 1 gif: maingif.gif */
    images: [{
        url: "/projects_screenshots/virtual_interpreter/maingif.gif",
        alt: "Imagen 1",
        lowQuality: true
    }]
}]
        },
        contactMe: {
            title: "Asunto",
            description: "Descripción",
            placeholderText: "Me gustaría hablar contigo sobre tus servicios...",
            buttonText: "¡Llevame allá!",
            contactMeTitle: "¡Contáctame y hablemos!"
        }
    },
    en: {
        aboutMe: "Hello! 👋, My name is Cristián. I'm a Full Stack developer specializing in backend and with extensive knowledge in JavaScript, ReactJS, and ExpressJS. I excel in advanced programming, database management, and user experience design (UI/UX).",
        languagesList: [{
            name: "Spanish",
            value: "es"
        }, {
            name: "English",
            value: "en"

        }],
        navbarItems: [
            {
                name: "About me",
                redirectUrl: "#about-me"
            },
            {
                name: "Projects",
                redirectUrl: "#projects"
            },
            {
                name: "Skills",
                redirectUrl: "#skills"
            },
            {
                name: "Contact",
                redirectUrl: "#contact-me"
            },
        ],
        whatsappText: "Hello! 👋, How are you? I would like to know more about your services.",
        projects: {
            projectsTitle: "My Projects",
            github: "Check it out on github!",
            live: "Check it out live!"
        },
        skills: {
            title: "My skills"
        },
        projects: {
            projectsTypes: {
                personal: "Personal project",
                labor: "Labor project"
            },
            projectsTitle: "My Projects",
            projectsList: [
                {
                    title: "Graduates tracking system",
                    description: "This software allows graduates to send their education and jobs after graduation so that the university can track statistics. I developed the application views in ReactJS, including both the home page and the dashboard system. I designed the UI/UX using the DaisyUI component library to ensure visual consistency throughout the product. In the backend, using ExpressJS, I included secure authentication systems and session management. Additionally, I integrated an external public API of data (universities in the country) to dynamically capture the user's response from the inputs.",
                    github: {
                        frontend: "https://github.com/cami98735264/egresados-iesi",
                        backend: "https://github.com/cami98735264/egresados-sanisidoro-backend"
                    },
                    technologies: ["javascript", "react", "nodedotjs", "express", "mysql"],
                    live: "Check it out live",
                    projectType: 1,
                    images: [
                        {
                            url: "/projects_screenshots/sanisidoro_egresados/Screenshot_1.png",
                            alt: "Image 1"
                        },
                        {
                            url: "/projects_screenshots/sanisidoro_egresados/Screenshot_2.png",
                            alt: "Image 2"
                        },
                        {
                            url: "/projects_screenshots/sanisidoro_egresados/Screenshot_3.png",
                            alt: "Image 3"
                        },
                        {
                            url: "/projects_screenshots/sanisidoro_egresados/Screenshot_4.png",
                            alt: "Image 4"
                        },
                        {
                            url: "/projects_screenshots/sanisidoro_egresados/Screenshot_5.png",
                            alt: "Image 5"
                        },
                        {
                            url: "/projects_screenshots/sanisidoro_egresados/Screenshot_6.png",
                            alt: "Image 6"
                        },
                        {
                            url: "/projects_screenshots/sanisidoro_egresados/Screenshot_7.png",
                            alt: "Image 7"
                        },
                        {
                            url: "/projects_screenshots/sanisidoro_egresados/Screenshot_8.png",
                            alt: "Image 8"
                        },
                        {
                            url: "/projects_screenshots/sanisidoro_egresados/Screenshot_9.png",
                            alt: "Image 9"
                        },
                        {
                            url: "/projects_screenshots/sanisidoro_egresados/Screenshot_10.png",
                            alt: "Image 10"
                        },
                        {
                            url: "/projects_screenshots/sanisidoro_egresados/Screenshot_11.png",
                            alt: "Image 11"
                        },
                        {
                            url: "/projects_screenshots/sanisidoro_egresados/Screenshot_12.png",
                            alt: "Image 12"
                        },
                        {
                            url: "/projects_screenshots/sanisidoro_egresados/Screenshot_13.png",
                            alt: "Image 13"
                        },
                        {
                            url: "/projects_screenshots/sanisidoro_egresados/Screenshot_14.png",
                            alt: "Image 14"
                        },
                        {
                            url: "/projects_screenshots/sanisidoro_egresados/Screenshot_15.png",
                            alt: "Imagen 15"
                        }, {
                            url: "/projects_screenshots/sanisidoro_egresados/Screenshot_16.png",
                            alt: "Imagen 16"
                        }
                    ]
                },
                {
                    title: "Veterinary system",
                    description: "I designed and developed the registration and login module, including the creation of the application's UI/UX. I implemented a CRUD system to manage pet appointments, integrating dynamic database data such as the type of animal and the type of consultation (surgery, review, accident, etc.). The system was configured to include consultation prices and display relevant data on the screen. Advanced functionalities were integrated to improve the management and presentation of crucial information for veterinary practice.",
                    github: {
                        frontend: "https://github.com/cami98735264/veterinaria-crud-sessions",
                        backend: "https://github.com/cami98735264/veterinaria-crud-sessions-backend"
                    },
                    technologies: ["javascript", "react", "nodedotjs", "express", "mysql"],
                    live: "Check it out live",
                    projectType: 1,
                    images: [
                        {
                            url: "/projects_screenshots/veterinaria_crud/Screenshot_1.png",
                            alt: "Image 1"
                        },
                        {
                            url: "/projects_screenshots/veterinaria_crud/Screenshot_2.png",
                            alt: "Image 2"
                        },
                        {
                            url: "/projects_screenshots/veterinaria_crud/Screenshot_3.png",
                            alt: "Image 3"
                        },
                        {
                            url: "/projects_screenshots/veterinaria_crud/Screenshot_4.png",
                            alt: "Image 4"
                        },
                        {
                            url: "/projects_screenshots/veterinaria_crud/Screenshot_5.png",
                            alt: "Image 5"
                        },
                        {
                            url: "/projects_screenshots/veterinaria_crud/Screenshot_6.png",
                            alt: "Image 6"
                        },
                        {
                            url: "/projects_screenshots/veterinaria_crud/Screenshot_7.png",
                            alt: "Image 7"
                        },
                        {
                            url: "/projects_screenshots/veterinaria_crud/Screenshot_8.png",
                            alt: "Image 8"
                        },
                        {
                            url: "/projects_screenshots/veterinaria_crud/Screenshot_9.png",
                            alt: "Image 9"
                        },
                        {
                            url: "/projects_screenshots/veterinaria_crud/Screenshot_10.png",
                            alt: "Image 10"
                        },
                        {
                            url: "/projects_screenshots/veterinaria_crud/Screenshot_11.png",
                            alt: "Image 11"
                        },
                        {
                            url: "/projects_screenshots/veterinaria_crud/Screenshot_12.png",
                            alt: "Image 12"
                        },
                        {
                            url: "/projects_screenshots/veterinaria_crud/Screenshot_13.png",
                            alt: "Image 13"
                        }
                    ]
                },
                {
                    title: "License plate tracking and monitoring platform",
                    description: "Platform and license plate detection software that uses the YoloV8 artificial intelligence algorithm for license plate recognition. Implementation of functionalities to study and map behavior patterns based on the location of license plate records within the web platform hosted in static files using ExpressJS.",
                    github: {
                        frontend: "https://github.com/cami98735264/graphical-interface-monitoreo-placas",
                        backend: "https://github.com/cami98735264/graphical-interface-monitoreo-placas",
                    },
                    technologies: ["javascript", "mysql", "nodedotjs", "express"],
                    live: "Check it out live",
                    projectType: 2,
                    images: [
                        {
                            url: "/projects_screenshots/placas_plataforma/Screenshot_1.png",
                            alt: "Image 1"
                        },
                        {
                            url: "/projects_screenshots/placas_plataforma/Screenshot_2.png",
                            alt: "Image 2"
                        },
                        {
                            url: "/projects_screenshots/placas_plataforma/Screenshot_3.png",
                            alt: "Image 3"
                        },
                        {
                            url: "/projects_screenshots/placas_plataforma/Screenshot_4.png",
                            alt: "Image 4"
                        },
                        {
                            url: "/projects_screenshots/placas_plataforma/Screenshot_5.png",
                            alt: "Image 5"
                        },
                        {
                            url: "/projects_screenshots/placas_plataforma/Screenshot_6.png",
                            alt: "Image 6"
                        },
                        {
                            url: "/projects_screenshots/placas_plataforma/Screenshot_7.png",
                            alt: "Image 7"
                        },
                        {
                            url: "/projects_screenshots/placas_plataforma/Screenshot_13.jpg",
                            alt: "Image 13"
                        },
                        {
                            url: "/projects_screenshots/placas_plataforma/Screenshot_8.png",
                            alt: "Image 8"
                        },
                        {
                            url: "/projects_screenshots/placas_plataforma/Screenshot_9.png",
                            alt: "Image 9"
                        },
                        {
                            url: "/projects_screenshots/placas_plataforma/Screenshot_10.png",
                            alt: "Image 10"
                        },
                        {
                            url: "/projects_screenshots/placas_plataforma/Screenshot_11.png",
                            alt: "Image 11"
                        },
                        {
                            url: "/projects_screenshots/placas_plataforma/Screenshot_12.png",
                            alt: "Image 12"
                        },
                    ]
                }, {
                    title: "License plate detection software YoloV8",
                    description: "Development of license plate recognition software using the YoloV8 artificial intelligence algorithm.",
                    github: {
                        frontend: "https://github.com/cami98735264/placas-carro",
                        backend: "https://github.com/cami98735264/placas-carro"
                    },
                    technologies: ["python", "mysql", "flask", "yolo", "opencv"],
                    live: "Check it out live",
                    projectType: 2,
                    images: [
                        {
                            url: "/projects_screenshots/placas_deteccion_software/Screenshot_1.png",
                            alt: "Image 1"
                        },
                        {
                            url: "/projects_screenshots/placas_deteccion_software/Screenshot_2.png",
                            alt: "Image 2"
                        },
                        {
                            url: "/projects_screenshots/placas_deteccion_software/Screenshot_3.png",
                            alt: "Image 3"
                        },
                        {
                            url: "/projects_screenshots/placas_deteccion_software/Screenshot_4.png",
                            alt: "Image 4"
                        },
                        {
                            url: "/projects_screenshots/placas_deteccion_software/Screenshot_5.png",
                            alt: "Image 5"
                        },
                        {
                            url: "/projects_screenshots/placas_deteccion_software/Screenshot_6.png",
                            alt: "Image 6"
                        },
                        {
                            url: "/projects_screenshots/placas_deteccion_software/Screenshot_7.jpg",
                            alt: "Image 7"
                        },
                        {
                            url: "/projects_screenshots/placas_deteccion_software/Screenshot_8.jpg",
                            alt: "Image 8"
                        }
                    ]
                }, 
            {
                title: "Sports platform for tournament management",
                description: "Development of a full-stack platform with role management, routing, and authentication in ReactJS and ExpressJS to manage each phase of sports tournaments, using advanced and dynamic validations with the express-validator library.",
                github: {
                    frontend: "https://github.com/cami98735264",
                    backend: "https://github.com/cami98735264",
                },
                technologies: ["javascript", "mysql", "nodedotjs", "react", "express"],
                live: "Check it out live",
                projectType: 2,
                images: [
                    {
                        url: "/projects_screenshots/sports_plataforma/Screenshot_1.png",
                        alt: "Image 1"
                    },
                    {
                        url: "/projects_screenshots/sports_plataforma/Screenshot_2.png",
                        alt: "Image 2"
                    },
                    {
                        url: "/projects_screenshots/sports_plataforma/Screenshot_3.png",
                        alt: "Image 3"
                    },
                    {
                        url: "/projects_screenshots/sports_plataforma/Screenshot_4.png",
                        alt: "Image 4"
                    },
                    {
                        url: "/projects_screenshots/sports_plataforma/Screenshot_5.png",
                        alt: "Image 5"
                    },
                    {
                        url: "/projects_screenshots/sports_plataforma/Screenshot_6.png",
                        alt: "Image 6"
                    },
                    {
                        url: "/projects_screenshots/sports_plataforma/Screenshot_7.png",
                        alt: "Image 7"
                    },
                    {
                        url: "/projects_screenshots/sports_plataforma/Screenshot_8.png",
                        alt: "Image 8"
                    },
                    {
                        url: "/projects_screenshots/sports_plataforma/Screenshot_9.png",
                        alt: "Image 9"
                    },
                    {
                        url: "/projects_screenshots/sports_plataforma/Screenshot_10.png",
                        alt: "Image 10"
                    },
                    {
                        url: "/projects_screenshots/sports_plataforma/Screenshot_11.png",
                        alt: "Image 11"
                    },
                    {
                        url: "/projects_screenshots/sports_plataforma/Screenshot_12.png",
                        alt: "Image 12"
                    },
                    {
                        url: "/projects_screenshots/sports_plataforma/Screenshot_13.png",
                        alt: "Image 13"
                    },
                    {
                        url: "/projects_screenshots/sports_plataforma/Screenshot_14.png",
                        alt: "Image 14"
                    },
                    {
                        url: "/projects_screenshots/sports_plataforma/Screenshot_15.png",
                        alt: "Image 15"
                    },
                    {
                        url: "/projects_screenshots/sports_plataforma/Screenshot_16.png",
                        alt: "Image 16"
                    },
                    {
                        url: "/projects_screenshots/sports_plataforma/Screenshot_17.png",
                        alt: "Image 17"
                    },
                    {
                        url: "/projects_screenshots/sports_plataforma/Screenshot_18.png",
                        alt: "Image 18"
                    },
                    {
                        url: "/projects_screenshots/sports_plataforma/Screenshot_19.png",
                        alt: "Image 19"
                    },
                    {
                        url: "/projects_screenshots/sports_plataforma/Screenshot_20.png",
                        alt: "Image 20"
                    },
                    {
                        url: "/projects_screenshots/sports_plataforma/Screenshot_21.png",
                        alt: "Image 21"
                    },
                    {
                        url: "/projects_screenshots/sports_plataforma/Screenshot_22.png",
                        alt: "Image 22"
                    }
                ]

            }, {
                title: "Advanced authentication for a sensors platform",
                description: "During the development of the sensor system, I created a comprehensive login and registration system using ExpressJS and email authentication. This included implementing the functionality to send login codes via email using temporary credentials from Google applications and the Nodemailer library. On the frontend, built with ReactJS and DaisyUI, these dynamic login codes were sent to users via email and seamlessly integrated into the login form, ensuring a smooth and secure authentication process.",
                github: {
                    frontend: "https://github.com/cami98735264/sensores-auth-system-router",
                    backend: "https://github.com/cami98735264/sensores-auth-system-router-backend"
                },
                technologies: ["javascript", "react", "nodedotjs", "express", "mysql"],
                live: "Check it out live",
                projectType: 1,
                /* images in /sensors_plataforma, there are 10 images */
                images: [{
                    url: "/projects_screenshots/sensors_plataforma/Screenshot_1.png",
                    alt: "Image 1"
                }, {
                    url: "/projects_screenshots/sensors_plataforma/Screenshot_2.png",
                    alt: "Image 2"
                }, {
                    url: "/projects_screenshots/sensors_plataforma/Screenshot_3.png",
                    alt: "Image 3"
                }, {
                    url: "/projects_screenshots/sensors_plataforma/Screenshot_4.png",
                    alt: "Image 4"
                }, {
                    url: "/projects_screenshots/sensors_plataforma/Screenshot_5.png",
                    alt: "Image 5"
                }, {
                    url: "/projects_screenshots/sensors_plataforma/Screenshot_6.png",
                    alt: "Image 6"
                }, {
                    url: "/projects_screenshots/sensors_plataforma/Screenshot_7.png",
                    alt: "Image 7"
                }, {
                    url: "/projects_screenshots/sensors_plataforma/Screenshot_8.png",
                    alt: "Image 8"
                }, {
                    url: "/projects_screenshots/sensors_plataforma/Screenshot_9.png",
                    alt: "Image 9"
                }, {
                    url: "/projects_screenshots/sensors_plataforma/Screenshot_10.png",
                    alt: "Image 10"
                }]
            },
        {
            title: "Natural language to sign language translator (virtual interpreter)",
            description: "Development of an API in ExpressJS to interpret Colombian sign language based on artificial intelligence using GPT-4 and the OpenAI API. · Implementation of a system to translate text in natural language to Colombian sign language, displayed by an interpreter on a green screen within a web platform built in NextJS. · Development and optimization of algorithms for natural language processing and sign recognition to ensure accurate and fluid translation.",
            github: {
                frontend: "https://github.com/cami98735264/nextjs-lenguaje-de-senas",
                backend: "https://github.com/cami98735264/nextjs-lenguaje-de-senas",
            },
            technologies: ["javascript", "mysql", "nodedotjs", "nextdotjs", "express"],
            live: "Check it out live",
            projectType: 2,
            /* images in /virtual_interpreter, there is 1 gif: maingif.gif */
            images: [{
                url: "/projects_screenshots/virtual_interpreter/maingif.gif",
                alt: "Image 1",
                lowQuality: true
            }]
            
        }]
        },
        contactMe: {
            title: "Subject",
            description: "Description",
            placeholderText: "I'd like to talk with you about the services you offer",
            buttonText: "Get me there!",
            contactMeTitle: "Let's talk about businesses!"
        }
    }

};


export default languages;