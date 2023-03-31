import Botao from "../Botao/Botao";

import {
  DiHtml5,
  DiCss3Full,
  DiJsBadge,
  DiMsqlServer,
  DiGit,
  DiReact,
  DiSass,
} from "react-icons/di";

const ProjetosCards = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text">{props.text}</p>
      </div>
      <div className="card-footer">
        <Botao title="Ver Projeto" />
        <DiHtml5/>
      </div>
    </div>
  );
};

export default ProjetosCards;
