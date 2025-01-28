import { IconBaseProps, IconType } from "react-icons";
import {
  FiYoutube,
  FiTwitter,
  FiGithub,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";
import Link from "next/link";
import { ReactNode } from "react";
const Footer = () => {
  const socials: { icon: ReactNode; url: string }[] = [
    {
      icon: <FiYoutube />,
      url: "https://www.youtube.com/@therealmartinezzz",
    },
    {
      icon: <FiTwitter />,
      url: "https://x.com/therealmrtnz",
    },
    {
      icon: <FiGithub />,
      url: "https://github.com/therealmartinezzz",
    },
    {
      icon: <FiLinkedin />,
      url: "https://www.linkedin.com/in/aziz-imranzade-784b6330b/",
    },
  ];
  return (
    <footer className="text-white items-center flex justify-between gap-x-4 mt-10">
      <p className="sm:text-sm text-xs text-white/70">
        © {new Date().getFullYear()} David Martinez. Bütün Hüquqlar qorunur
      </p>
      <div className="flex  gap-x-4">
        {socials.map((social, key) => (
          <Link
            key={key}
            href={social.url}
            className="text-lg hover:text-sky-500  transition-all hover:-translate-y-1"
          >
            {social.icon}
          </Link>
        ))}
      </div>
    </footer>
  );
};
export default Footer;
