import UilAngleRightB from "@iconscout/react-unicons/icons/uil-angle-right-b";
import UilAngleLeftB from "@iconscout/react-unicons/icons/uil-angle-left-b";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { PROJECTS as data } from "../data/projects";
import Project from "../components/projects/Project";
import { useEffect, useState } from "react";
import "../styles/projects/projects.css";

import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(data);
  }, []);

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Proyectos</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        className="projects__container container swiper"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <Project key={project.id} project={project} />
          </SwiperSlide>
        ))}

        <div className="swiper-button-next">
          <UilAngleRightB className="project__swiper__icon" size={100} />
        </div>
        <div className="swiper-button-prev">
          <UilAngleLeftB className="project__swiper__icon" size={100} />
        </div>
        <div className="swiper-pagination"></div>
      </Swiper>
    </section>
  );
}

export default Projects;
