

const projectType = {
  es: {
    1: "Proyecto laboral",
    2: "Proyecto personal",
  },
  en: {
    1: "Labor project",
    2: "Personal project",
  },
};
export const languages = {
  en: "English",
  es: "Español",
};

export const showDefaultLang = true;

export const defaultLang = "es";
export const routes = {
  es: {
    projects: "proyectos",
    skills: "habilidades",
    experience: "experiencia",
  },
};



export const ui = {
  en: {
    "nav.aboutMe": "About me",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "aboutMe.title":
      "Hello! 👋 My name is Cristián, I am a Full Stack developer",
    "aboutMe.description":
      "I'm a Full Stack developer specializing in backend and with extensive knowledge in JavaScript, ReactJS, and ExpressJS. I excel in advanced programming, database management, and user experience design (UI/UX).",
    "aboutMe.contact": "Contact me",
    "aboutMe.resume": "Download CV",
    "emailContact.subject": "Hi! I'd like to talk about your services",
    "emailContact.body":
      "Hi Cristián, I found your portfolio and I would like to talk to you about your services. When can we meet?",
    "whatsappContact.text":
      "Hi Cristián, I found your portfolio and I would like to talk to you about your services. When can we meet?",
    "layout.projectsTitle": "Projects",
    "layout.skillsTitle": "Skills",
    "layout.experienceTitle": "Experience",
    "layout.title": "Cristián Dev - Full Stack Developer",
    projectsList: {
      1: {
        title: "License plate tracking and monitoring platform",
        description:
          "Platform and license plate detection software that uses the YoloV8 artificial intelligence algorithm for license plate recognition. Implementation of functionalities to study and map behavior patterns based on the location of license plate records within the web platform hosted in static files using ExpressJS.",
        projectType: projectType["en"][1],
        date: "06/2023",
      },
      2: {
        title: "License plate detection software YoloV8",
        description:
          "Development of license plate recognition software using the YoloV8 artificial intelligence algorithm.",
        projectType: projectType["en"][1],
        date: "04/2023",
      },
      3: {
        title: "Sports platform for tournament management",
        description:
          "Development of a full-stack platform with role management, routing, and authentication in ReactJS and ExpressJS to manage each phase of sports tournaments, using advanced and dynamic validations with the express-validator library.",
        projectType: projectType["en"][1],
        date: "06/2024",
      },
      4: {
        title:
          "Natural language to sign language translator (virtual interpreter)",
        description:
          "Development of an API in ExpressJS to interpret Colombian sign language based on artificial intelligence using GPT-4 and the OpenAI API. · Implementation of a system to translate text in natural language to Colombian sign language, displayed by an interpreter on a green screen within a web platform built in NextJS. · Development and optimization of algorithms for natural language processing and sign recognition to ensure accurate and fluid translation.",
        projectType: projectType["en"][1],
        date: "09/2023",
      },
      5: {
        title: "Graduates tracking system",
        description:
          "This software allows graduates to send their education and jobs after graduation so that the university can track statistics. I developed the application views in ReactJS, including both the home page and the dashboard system. I designed the UI/UX using the DaisyUI component library to ensure visual consistency throughout the product. In the backend, using ExpressJS, I included secure authentication systems and session management. Additionally, I integrated an external public API of data (universities in the country) to dynamically capture the user's response from the inputs.",
        projectType: projectType["en"][2],
        date: "02/2024",
      },
      6: {
        title: "Veterinary system",
        description:
          "I designed and developed the registration and login module, including the creation of the application's UI/UX. I implemented a CRUD system to manage pet appointments, integrating dynamic database data such as the type of animal and the type of consultation (surgery, review, accident, etc.). The system was configured to include consultation prices and display relevant data on the screen. Advanced functionalities were integrated to improve the management and presentation of crucial information for veterinary practice.",
        projectType: projectType["en"][2],
        date: "03/2024",
      },
      7: {
        title: "Advanced authentication for a sensors platform",
        description:
          "During the development of the sensor system, I created a comprehensive login and registration system using ExpressJS and email authentication. This included implementing the functionality to send login codes via email using temporary credentials from Google applications and the Nodemailer library. On the frontend, built with ReactJS and DaisyUI, these dynamic login codes were sent to users via email and seamlessly integrated into the login form, ensuring a smooth and secure authentication process.",
        projectType: projectType["en"][2],
        date: "05/2024",
      },
      8: {
        title: "Personal portfolio V.1",
        description:
          "I designed and developed this first version of my portfolio using Astro, a static site generator. I created the UI/UX design and implemented the functionalities to display my projects, skills, and experience. I included a contact form with email and WhatsApp options to facilitate communication with potential clients. The site was optimized for SEO and performance, achieving a Lighthouse score of 100 in all categories.",
        projectType: projectType["en"][2],
        date: "06/2024",
      },
      9: {
        title: "Personal portfolio V.2",
        description:
          "I designed and developed this second version also using Astro, I improved the UI/UX design and added new functionalities and a better language management system. I included a dark mode and a language switcher to improve the user experience. I optimized the site for SEO and performance, achieving a Lighthouse score of 100 in all categories.",
        projectType: projectType["en"][2],
        date: "08/2024",
      },
    },
  },
  es: {
    "nav.aboutMe": "Sobre mi",
    "nav.projects": "Proyectos",
    "nav.skills": "Habilidades",
    "nav.experience": "Experiencia",
    "aboutMe.title":
      "Hola! 👋 Mi nombre es Cristián, soy un desarrollador Full Stack",
    "aboutMe.description":
      "Soy un desarrollador Full Stack especializado en backend y con amplios conocimientos en JavaScript, ReactJS y ExpressJS. Destaco en programación avanzada, gestión de bases de datos y diseño de experiencia de usuario (UI/UX).",
    "aboutMe.contact": "Contáctame",
    "aboutMe.resume": "Descargar CV",
    "emailContact.subject": "Hola! Me gustaría hablar sobre tus servicios",
    "emailContact.body":
      "Hola Cristián, encontré tu portafolio y me gustaría hablar contigo sobre tus servicios. ¿Cuándo podemos reunirnos?",
    "whatsappContact.text":
      "Hola Cristián, encontré tu portafolio y me gustaría hablar contigo sobre tus servicios. ¿Cuándo podemos reunirnos?",
    "layout.projectsTitle": "Proyectos",
    "layout.skillsTitle": "Habilidades",
    "layout.experienceTitle": "Experiencia",
    "layout.title": "Cristián Dev - Desarrollador Full Stack",
    projectsList: {
      1: {
        title: "Plataforma de detección y monitoreo de placas vehículares",
        description:
          "Plataforma y software de detección de placas que utiliza el algoritmo de inteligencia artificial YoloV8 para el reconocimiento de matrículas. Implementación de funcionalidades para estudiar y mapear patrones de comportamiento basados en la ubicación de los registros de matrículas dentro de la plataforma web alojada en archivos estáticos usando ExpressJS.",
        projectType: projectType["en"][1],
        date: "06/2023",
      },
      2: {
        title: "Software de detección de placas vehículares YoloV8",
        description:
          "Desarrollo de software de reconocimiento de matrículas utilizando el algoritmo de inteligencia artificial YoloV8.",
        projectType: projectType["en"][1],
        date: "04/2023",
      },
      3: {
        title: "Plataforma deportiva para gestión de torneos",
        description:
          "Desarrollo de una plataforma full-stack con gestión de roles, enrutamiento y autenticación en ReactJS y ExpressJS para gestionar cada fase de los torneos deportivos, utilizando validaciones avanzadas y dinámicas con la librería express-validator.",
        projectType: projectType["en"][1],
        date: "06/2024",
      },
      4: {
        title:
          "Traductor de lenguaje natural a lenguaje de señas (intérprete virtual)",
        description:
          "Desarrollo de una API en ExpressJS para interpretar el lenguaje de señas colombiano basado en inteligencia artificial utilizando GPT-4 y la API de OpenAI. · Implementación de un sistema para traducir texto en lenguaje natural a lenguaje de señas colombiano, mostrado por un intérprete en pantalla verde dentro de una plataforma web construida en NextJS. · Desarrollo y optimización de algoritmos para el procesamiento de lenguaje natural y el reconocimiento de señas para garantizar una traducción precisa y fluida.",
        projectType: projectType["en"][1],
        date: "09/2023",
      },
      5: {
        title: "Sistema de seguimiento de egresados",
        description:
          "Este software permite a los egresados enviar su educación y trabajos después de la graduación para que la universidad pueda hacer seguimiento de estadísticas. Desarrollé las vistas de la aplicación en ReactJS, incluyendo tanto la página de inicio como el sistema de dashboard. Diseñé el UI/UX utilizando la librería de componentes DaisyUI para garantizar consistencia visual en todo el producto. En el backend, utilizando ExpressJS, incluí sistemas de autenticación segura y gestión de sesiones. Adicionalmente, integré una API pública externa de datos (universidades del país) para capturar dinámicamente la respuesta del usuario desde los inputs.",
        projectType: projectType["en"][2],
        date: "02/2024",
      },
      6: {
        title: "Sistema veterinario",
        description:
          "Diseñé y desarrollé el módulo de registro y login, incluyendo la creación del UI/UX de la aplicación. Implementé un sistema CRUD para gestionar las citas de mascotas, integrando datos dinámicos de la base de datos como el tipo de animal y el tipo de consulta (cirugía, revisión, accidente, etc.). El sistema se configuró para incluir precios de consulta y mostrar datos relevantes en pantalla. Se integraron funcionalidades avanzadas para mejorar la gestión y presentación de información crucial para la práctica veterinaria.",
        projectType: projectType["en"][2],
        date: "03/2024",
      },
      7: {
        title: "Autenticación avanzada para una plataforma de sensores",
        description:
          "Durante el desarrollo del sistema de sensores, creé un sistema de login y registro completo utilizando ExpressJS y autenticación por email. Esto incluyó la implementación de la funcionalidad para enviar códigos de login por email utilizando credenciales temporales de aplicaciones de Google y la librería Nodemailer. En el frontend, construido con ReactJS y DaisyUI, estos códigos de login dinámicos se enviaron a los usuarios por email e integraron sin problemas en el formulario de login, garantizando un proceso de autenticación fluido y seguro.",
        projectType: projectType["en"][2],
        date: "05/2024",
      },
      8: {
        title: "Portafolio personal V.1",
        description:
          "Diseñé y desarrollé esta primera versión de mi portafolio utilizando Astro, un generador de sitios estáticos. Creé el diseño UI/UX e implementé las funcionalidades para mostrar mis proyectos, habilidades y experiencia. Incluí un formulario de contacto con opciones de email y WhatsApp para facilitar la comunicación con potenciales clientes. El sitio fue optimizado para SEO y rendimiento, logrando un score de Lighthouse de 100 en todas las categorías.",
        projectType: projectType["en"][2],
        date: "06/2024",
      },
      9: {
        title: "Portafolio personal V.2",
        description:
          "Diseñé y desarrollé esta segunda versión también utilizando Astro, mejoré el diseño UI/UX y añadí nuevas funcionalidades y un mejor sistema de gestión de idiomas. Incluí un modo oscuro y un selector de idiomas para mejorar la experiencia de usuario. Optimicé el sitio para SEO y rendimiento, logrando un score de Lighthouse de 100 en todas las categorías.",
        projectType: projectType["en"][2],
        date: "08/2024",
      },
    },
  },
} as const;
