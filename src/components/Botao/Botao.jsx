import { BsShare } from "react-icons/bs";
import "./Botao.css";

const Botao = (props) => {
  return (
    <a href="#" className="btn-projects">
      <BsShare className="btn-icon" />
      <span className="btn-title">{props.title}</span>
    </a>
  );
};

export default Botao;
