import Botao from "../Botao/Botao";
import "../../styles/components/About/About.sass";

const About = () => {
  return (
    <section id="about-container">
      <h1 id="title">Leandro S dos Reis</h1>
      <span id="job">Desenvolvedor Front End Jr</span>
      <p id="description">
        Olá! Busco oportunidades de trabalho para ingressar na área de
        desenvolvimento Web, visando aprimorar meus conhecimentos e habilidades.
        Abaixo está as tecnologias que tenho conhecimentos intermédiarios (HTML5
        e CSS3) e conhecimentos iniciante em Javascript (em aprendizado).
      </p>
      <section id="developments">
        <Botao title="Ver Projetos" />
        <Botao title="Ver Currículo" />
      </section>
    </section>
  );
};

export default About;
