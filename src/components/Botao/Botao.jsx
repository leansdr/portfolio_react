import { BsShare } from "react-icons/bs";
import "../../styles/components/Botao/Botao.sass";

const Botao = (props) => {
  return (
    <a href="#" className="btn-projects">
      <BsShare className="btn-icon" />
      <span className="btn-title">{props.title}</span>
    </a>
  );
};

export default Botao;
