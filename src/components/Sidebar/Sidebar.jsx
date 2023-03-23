import Avatar from "../../../public/img/foto.jpg";
import SocialNetwork from "../SocialNetwork/SocialNetwork";
import { AiOutlineMail } from "react-icons/ai";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside id="bio-container">
      <img id="avatar" src={Avatar} alt="Foto Leandro S dos Reis" />
      <p id="welcome-text">Seja Bem-Vindo</p>
      <SocialNetwork />
      <div id="email-container">
        <AiOutlineMail id="email-icon" />
        <a href="#" id="link-email">
          leansdr@hotmail.com
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
