import About from "../About/About";
import TecnologiesContainer from "../TecnologiesContainer/TecnologiesContainer";
import "./MainContent.css";

const MainContent = () => {
  return (
    <section id="main-container">
      <About />
      <TecnologiesContainer />
    </section>
  );
};

export default MainContent;
