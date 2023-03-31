import { FaLinkedinIn, FaGithub, FaFacebook } from "react-icons/fa";
import "../../styles/components/SocialNetwork/SocialNetwork.sass";

const networks = [
  { nome: "Facebook", icon: <FaFacebook /> },
  { nome: "Github", icon: <FaGithub /> },
  { nome: "Linkedin", icon: <FaLinkedinIn /> },
];

const SocialNetwork = () => {
  return (
    <section id="networks-container">
      {networks.map((net) => (
        <a href="#" className="networks-icon" key={net.nome}>
          {net.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetwork;
