import {
  DiHtml5,
  DiCss3Full,
  DiJsBadge,
  DiMsqlServer,
  DiGit,
  DiReact,
  DiSass,
} from "react-icons/di";

import { TbSql } from "react-icons/tb";

import "./tecnologiesContainer.css";

const technologies = [
  {
    id: "html",
    name: "HTML5",
    icon: <DiHtml5 />,
    nivel: "Conhecimento Intermediário",
  },
  {
    id: "css",
    name: "CSS3",
    icon: <DiCss3Full />,
    nivel: "Conhecimento Intermediário",
  },
  {
    id: "sass",
    name: "Sass",
    icon: <DiSass />,
    nivel: "Conhecimento Iniciante (Em aprendizado)",
  },
  {
    id: "js",
    name: "JavaScript",
    icon: <DiJsBadge />,
    nivel: "Conhecimento Iniciante (Em aprendizado)",
  },
  {
    id: "react",
    name: "React",
    icon: <DiReact />,
    nivel: "Conhecimento Iniciante (Em aprendizado)",
  },
  {
    id: "git",
    name: "Git",
    icon: <DiGit />,
    nivel: "Conhecimento Iniciante (Em aprendizado)",
  },
  {
    id: "sql",
    name: "SQL",
    icon: <TbSql />,
    nivel: "Conhecimento Intermediário",
  },
];

const TecnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <p id="technologies-container-description">
        Hard Skills que tenho conhecimento
      </p>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.nivel}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TecnologiesContainer;
