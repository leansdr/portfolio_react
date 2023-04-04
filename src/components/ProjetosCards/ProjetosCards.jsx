import Botao from "../Botao/Botao";
import "../../styles/components/ProjetosCards/ProjetosCards.sass";

const ProjetosCards = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text">{props.text}</p>
      </div>
      <div className="card-footer">
        <Botao
          title="Ver Projeto"
        />
        <div className="card-footer-tech">
          {props.tech1}
          {props.tech2}
          {props.tech3}
        </div>
      </div>
    </div>
  );
};

export default ProjetosCards;
