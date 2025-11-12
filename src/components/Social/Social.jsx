import { socialLinks } from "../../constants/Constants";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiUpwork } from "react-icons/si";

const Social = () => {
    return (
        <div className="flex flex-row gap-4">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
            </a>
            <a href={socialLinks.upwork} target="_blank" rel="noopener noreferrer" aria-label="Upwork">
                <SiUpwork />
            </a>
        </div>
    );
};

export default Social;
