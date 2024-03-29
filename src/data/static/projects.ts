export interface IProjectsData {
  id: number;
  projectTitle: string;
  projectDescriptionShort: string;
  projectDescription: string;
  projectPictureUrl: string;
  projectUrl: string;
  projectInfoUrl: string;
  projectsTechnologies?: ITechnologiesData[];
  projectsProcess?: IProcess[];
}
export interface ITechnologiesData {
  techIcon: string;
  techName: string;
  description: string;
}

export interface IProcess {
  headline: string;
  description: string;
  icon: string;
}

export const projectsData: IProjectsData[] = [
  {
    id: 1,
    projectTitle: "EcoMarket",
    projectDescriptionShort: "Venta de productos ecológicos y sostenibles.",
    projectDescription:
      "Plataforma de comercio electrónico dedicada a la venta de productos ecológicos y sostenibles. Los usuarios pueden explorar y comprar una amplia gama de productos amigables con el medio ambiente.",
    projectPictureUrl:
      "https://images.squarespace-cdn.com/content/v1/606e11b80b94173f33b2dd54/1658325669795-6Z02U7D2MN203TIKG3QQ/james-webb-desktop-background-banner.png",
    projectUrl: "#",
    projectInfoUrl: "#",
    projectsTechnologies: [
      {
        techIcon:
          "https://imgs.search.brave.com/vW62EhmdMfk7HjQovK_01sgTw5y8V14RQQYtRb1jONQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzMzL0ZpZ21hLWxv/Z28uc3Zn.svg",
        techName: "Figma",
        description:
          "Figma nos permitió crear prototipos interactivos y diseños visuales colaborativos en tiempo real. Desde la conceptualización de la interfaz hasta la creación de wireframes y prototipos.",
      },
      {
        techIcon: "https://www.svgrepo.com/show/475654/github-color.svg",
        techName: "Github",
        description:
          "Utilizamos GitHub como plataforma de control de versiones, lo que facilitó la colaboración entre los miembros del equipo de desarrollo. Uso de función de ramificación y fusión.",
      },
      {
        techIcon:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
        techName: "ReactJS",
        description:
          "Componentes reutilizables que facilitaron la gestión y actualización de la interfaz. La arquitectura de componentes fue clave para mantener un desarrollo eficiente y escalable.",
      },
      {
        techIcon:
          "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
        techName: "CSS3",
        description:
          "Clave para personalizar la apariencia de cada página, garantizando coherencia en la estética del sitio. Desde la selección de colores y fuentes hasta la disposición de los elementos.",
      },
    ],
    projectsProcess: [
      {
        headline: "Conceptualización",
        description:
          "Definimos la idea del proyecto y los objetivos a alcanzar. Realizamos investigaciones de mercado y análisis de la competencia para identificar oportunidades y desafíos.",
        icon: "https://www.svgrepo.com/show/475654/github-color.svg",
      },
      {
        headline: "Diseño",
        description:
          "Creamos prototipos interactivos y diseños visuales colaborativos en tiempo real. Desde la conceptualización de la interfaz hasta la creación de wireframes y prototipos.",
        icon: "https://www.svgrepo.com/show/475654/github-color.svg",
      },
      {
        headline: "Desarrollo",
        description:
          "Construimos una plataforma de comercio electrónico personalizada y escalable. Implementamos funcionalidades y características específicas para el cliente.",
        icon: "https://www.svgrepo.com/show/475654/github-color.svg",
      },
      {
        headline: "Lanzamiento",
        description:
          "Lanzamos la plataforma y realizamos pruebas exhaustivas para garantizar su rendimiento y seguridad. Implementamos estrategias de marketing y publicidad.",
        icon: "https://www.svgrepo.com/show/475654/github-color.svg",
      },
    ],
  },
  {
    id: 2,
    projectTitle: "TourTracker",
    projectDescriptionShort: "",
    projectDescription:
      "Plataforma interactiva para rastrear y seguir giras de artistas y bandas en todo el mundo. Los usuarios pueden descubrir conciertos, obtener información sobre fechas, lugares y comprar boletos en línea.",
    projectPictureUrl:
      "https://images.newscientist.com/wp-content/uploads/2022/08/16185328/SEI_119553269.jpg",
    projectUrl: "#",
    projectInfoUrl: "#",
  },
  {
    id: 3,
    projectTitle: "FizzFlare",
    projectDescriptionShort: "",
    projectDescription:
      "Esta plataforma ofrece a los amantes de las burbujas una experiencia única, desde la personalización de sabores hasta la participación en eventos exclusivos.",
    projectPictureUrl:
      "https://c0.wallpaperflare.com/preview/120/667/598/food-can-diet-green.jpg",
    projectUrl: "#",
    projectInfoUrl: "#",
  },
  {
    id: 4,
    projectTitle: "CloudGuard",
    projectDescriptionShort: "",
    projectDescription:
      "Una solución integral diseñada para mantener tus aplicaciones y datos seguros. Desde la detección de amenazas hasta la gestión de accesos, permite aprovechar al máximo los beneficios de la nube sin comprometer la seguridad.",
    projectPictureUrl:
      "https://bairesdev.mo.cloudinary.net/blog/2023/06/mujer-utilizando-un-telC3A9fono.jpg_s1024x1024wisk20c_wMuoHjF6GipMpsTKHgxfu_1nPPSaTUxi6UopuBeLL4.jpg?tx=w_3840,q_auto",
    projectUrl: "#",
    projectInfoUrl: "#",
  },
];
