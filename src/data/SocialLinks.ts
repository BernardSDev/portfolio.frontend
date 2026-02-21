import {IconType} from "react-icons";
import {FaGithub, FaLinkedin, FaWhatsapp} from "react-icons/fa";
import {RiTwitterXLine} from "react-icons/ri";

interface SocialLink {
    href: string;
    icon: IconType;
}

export const SocialLinks: SocialLink[] = [
    {
        href: "https://github.com/BernardSDev",
        icon: FaGithub
    },
    {
        href: "https://www.linkedin.com/in/bernard-s-apoh-b04134230",
        icon: FaLinkedin
    },
    {
        href: "https://x.com/BernardSam_Apoh",
        icon: RiTwitterXLine
    },
    {
        href: "https://wa.me/233248315982",
        icon: FaWhatsapp
    }
];