import ProjetosCards from "../ProjetosCards/ProjetosCards";

const Projetos = () => {
  return (
    <div className="projetos-container">
      <h2>Projetos</h2>
      <p>Projetos desenvolvidos para aprendizado.</p>
      <div className="projetos-grid">
        <ProjetosCards
          title="Sunny Side"
          text="Projeto desenvolvido pelo desafio do site Front-Mentor. Aplicado habilidades de Flexbox e CSS Grid. Desenvolvido apenas com HTML e CSS"
        />
        <ProjetosCards
          title="marvel"
          text="Projeto desenvolvido durante a semana MapaDev Week do canal Dev em Dobro. Desenvolvido com HTML 5, CSS 3 e Javascript."
        />
      </div>
    </div>
  );
};

export default Projetos;
