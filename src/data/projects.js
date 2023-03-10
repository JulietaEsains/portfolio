import portfolio from "/img/portfolioProject.png";
import uno from "/img/unoProject.png";
import tictactoe from "/img/tictactoeProject.png";
import questTracker from "../assets/img/questTrackerProject.PNG";

export const PROJECTS = [
  {
    id: 1,
    img: portfolio,
    title: "Portafolio web dinámico",
    date: "Feb. 2022 - Ago. 2022",
    description:
      "Proyecto para el curso de Argentina Programa. Mientras que ahora estás en mi portafolio Front End estático hecho con Reactjs, este es un portafolio con más funcionalidades hecho con Angular y otras tecnologías. Permite editar el contenido desde la página si se introduce el usuario y la contraseña correctos, manipulando una base de datos de MySQL a través de una API hecha en el framework Spring de Java.",
    link: "https://julieta-esains-portfolio.web.app",
  },
  {
    id: 2,
    img: uno,
    title: "UNO Multijugador",
    date: "Jun. 2022 - Jul. 2022",
    description:
      "Proyecto final de una materia electiva en la universidad. A través de está aplicación web, dos personas pueden jugar partidas del juego de cartas UNO entre sí desde diferentes navegadores. Hice la aplicación Front End con React y la API que utiliza con el framework Ruby on Rails.",
    link: "https://github.com/JulietaEsains/uno_card_game_react",
  },
  {
    id: 3,
    img: tictactoe,
    title: "TA-TE-TI Multijugador",
    date: "Abr. 2022 - Jun. 2022",
    description:
      "Proyecto intermedio de una materia electiva en la universidad. A través de está aplicación web, dos personas pueden jugar partidas del juego ta-te-ti entre sí desde diferentes navegadores. Hice la aplicación Front End con React y la API que utiliza con el framework Ruby on Rails.",
    link: "https://github.com/JulietaEsains/tateti_react",
  },
  {
    id: 4,
    img: questTracker,
    title: "Quest Tracker",
    date: "Dic. 2022 - en desarrollo",
    description:
      "Proyecto propio para practicar mis habilidades de desarrollo web, aprender cosas nuevas y para uso personal. Se trata de una aplicación de gestión de tareas pero con un enfoque RPG. La idea es que las tareas sean misiones que, al completarlas, te permitan obtener recompensas. También contará con un sistema de habilidades, niveles y distintas historias, como si se tratara de un juego. El objetivo es que el usuario se sienta más motivado para hacer sus tareas y registrar sus avances. El Front End está hecho con Reactjs y estilizado con TailwindCSS mientras que el Back End está hecho con el framework Spring de Java.",
    link: "https://github.com/JulietaEsains/quest_tracker",
  },
];
