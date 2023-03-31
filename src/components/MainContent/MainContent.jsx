import About from "../About/About";
import TecnologiesContainer from "../TecnologiesContainer/TecnologiesContainer";
import "../../styles/components/MainContent/MainContent.sass";
import Projetos from "../Projetos/Projetos";

const MainContent = () => {
  return (
    <section id="main-container">
      <About />
      <TecnologiesContainer />
      <Projetos/>
    </section>
  );
};

export default MainContent;
