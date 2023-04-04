import ProjetosCards from "../ProjetosCards/ProjetosCards";
import "../../styles/components/Projetos/Projetos.sass";
import {
  DiHtml5,
  DiCss3Full,
  DiJsBadge,
  DiMsqlServer,
  DiGit,
  DiReact,
  DiSass,
} from "react-icons/di";

const Projetos = () => {
  return (
    <div className="projetos-container">
      <h2 id="projetos-titulos">Projetos</h2>
      <p id="projetos-subtitulo">Projetos desenvolvidos para aprendizado.</p>
      <div className="projetos-grid">
        <ProjetosCards
          title="Sunny Side"
          text="Projeto desenvolvido pelo desafio do site Front-Mentor. Aplicado habilidades de Flexbox e CSS Grid. Desenvolvido apenas com HTML e CSS."
          tech1={<DiHtml5 />}
          tech2={<DiCss3Full />}
        />
        <ProjetosCards
          title="Projeto Marvel"
          text="Projeto desenvolvido durante a semana MapaDev Week do canal Dev em Dobro. Desenvolvido com HTML 5, CSS 3 e Javascript."
          tech1={<DiHtml5 />}
          tech2={<DiCss3Full />}
          tech3={<DiJsBadge />}
        />

        <ProjetosCards
          title="Loja McDonald's do Ifood"
          text="Projeto clone do Ifood desenvolvido durante o módulo Web Starter do Hcode Lab (Hcode Treinamentos). O projeto foi realizado em grupo e fui responsável por desenvolver a página da loja do McDonald's. Link do projeto completo"
          tech1={<DiHtml5 />}
          tech2={<DiSass />}
          tech3={<DiJsBadge />}
        />

        <ProjetosCards
          title="Nice Page"
          text="Projeto desenvolvido de um layout da Nicepage"
          tech1={<DiHtml5 />}
          tech2={<DiSass />}
          tech3={<DiJsBadge />}
        />
      </div>
    </div>
  );
};

export default Projetos;
