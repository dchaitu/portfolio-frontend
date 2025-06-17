import { socialLinks } from "../../constants/Constants";
import { FaGithub, FaLinkedin, FaUbuntu } from 'react-icons/fa';
const Social = () => {
    return (
        <div className="social-links">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
            </a>
            <a href={socialLinks.upwork} target="_blank" rel="noopener noreferrer" aria-label="Upwork">
                {/* TODO: Add Upwork link */}
                <FaUbuntu />
            </a>
        </div>
    );
};

export default Social;
