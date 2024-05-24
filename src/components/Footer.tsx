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
      url: "ttest",
    },
    {
      icon: <FiTwitter />,
      url: "test",
    },
    {
      icon: <FiGithub />,
      url: "ttest",
    },
    {
      icon: <FiInstagram />,
      url: "test",
    },
    {
      icon: <FiLinkedin />,
      url: "test",
    },
  ];
  return (
    <footer className="text-white items-center flex justify-between gap-x-4 mt-10">
      <p className="sm:text-sm text-xs text-white/70">
        © {new Date().getFullYear()} Aziz Imranzade. Bütün Hüquqlar qorunur
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
