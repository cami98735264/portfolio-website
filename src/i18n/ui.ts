const projectType = {
    es: {
        1: 'Proyecto laboral',
        2: 'Proyecto personal'
    },
    en: {
        1: 'Labor project',
        2: 'Personal project'
    }
}
export const languages = {
    en: 'English',
    es: 'Español',
};

export const showDefaultLang = true;

export const defaultLang = 'es';
export const routes = {
    es: {
        'projects': 'proyectos',
        'skills': 'habilidades',
        'experience': 'experiencia',
    },
}

export const ui = {
    en: {
        'nav.aboutMe': 'About me',
        'nav.projects': 'Projects',
        'nav.skills': 'Skills',
        'nav.experience': 'Experience',
        'aboutMe.title': 'Hello! 👋 My name is Cristián, I am a Full Stack developer',
        'aboutMe.description': 'I\'m a Full Stack developer specializing in backend and with extensive knowledge in JavaScript, ReactJS, and ExpressJS. I excel in advanced programming, database management, and user experience design (UI/UX).',
        'aboutMe.contact': 'Contact me',
        'aboutMe.resume': 'Download CV',
        'emailContact.subject': 'Hi! I\'d like to talk about your services',
        'emailContact.body': 'Hi Cristián, I found your portfolio and I would like to talk to you about your services. When can we meet?',
        'whatsappContact.text': 'Hi Cristián, I found your portfolio and I would like to talk to you about your services. When can we meet?',
        'layout.projectsTitle': 'Projects',
        'layout.skillsTitle': 'Skills',
        'layout.experienceTitle': 'Experience',
        'layout.title': 'Cristián Dev - Full Stack Developer',
        'projectsList': {
            1: {
                title: 'License plate tracking and monitoring platform',
                description: 'Platform and license plate detection software that uses the YoloV8 artificial intelligence algorithm for license plate recognition. Implementation of functionalities to study and map behavior patterns based on the location of license plate records within the web platform hosted in static files using ExpressJS.',
                projectType: projectType['en'][1]
            },
            2: {

            },
            3: {

            }
        }
    },
    es: {
        'nav.aboutMe': 'Sobre mi',
        'nav.projects': 'Proyectos',
        'nav.skills': 'Habilidades',
        'nav.experience': 'Experiencia',
        'aboutMe.title': 'Hola! 👋 Mi nombre es Cristián, soy un desarrollador Full Stack',
        'aboutMe.description': 'Soy un desarrollador Full Stack especializado en backend y con amplios conocimientos en JavaScript, ReactJS y ExpressJS. Destaco en programación avanzada, gestión de bases de datos y diseño de experiencia de usuario (UI/UX).',
        'aboutMe.contact': 'Contáctame',
        'aboutMe.resume': 'Descargar CV',
        'emailContact.subject': 'Hola! Me gustaría hablar sobre tus servicios',
        'emailContact.body': 'Hola Cristián, encontré tu portafolio y me gustaría hablar contigo sobre tus servicios. ¿Cuándo podemos reunirnos?',
        'whatsappContact.text': 'Hola Cristián, encontré tu portafolio y me gustaría hablar contigo sobre tus servicios. ¿Cuándo podemos reunirnos?',
        'layout.projectsTitle': 'Proyectos',
        'layout.skillsTitle': 'Habilidades',
        'layout.experienceTitle': 'Experiencia',
        'layout.title': 'Cristián Dev - Desarrollador Full Stack',
        'projectsList': {
            1: {
                title: 'Plataforma de detección y monitoreo de placas vehículares',
                description: 'Plataforma y software de detección de placas que utiliza el algoritmo de inteligencia artificial YoloV8 para el reconocimiento de matrículas. Implementación de funcionalidades para estudiar y mapear patrones de comportamiento basados en la ubicación de los registros de matrículas dentro de la plataforma web alojada en archivos estáticos usando ExpressJS.',
                projectType: projectType['en'][1]
            },
            2: {

            },
            3: {

            }
        },
    },
} as const;