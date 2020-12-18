import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <FontAwesomeIcon
        onClick={openLinkedin}
        className="icon"
        size="3x"
        icon={faLinkedin}
      />

      <FontAwesomeIcon
        onClick={openGithub}
        className="icon"
        size="3x"
        icon={faGithub}
      />
    </div>
  );
}
