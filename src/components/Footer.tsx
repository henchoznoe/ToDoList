import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="flex justify-between items-center bg-gray-200 h-20 rounded-t-xl">
      <div className="p-2">
        &copy; {new Date().getFullYear()} Noé Henchoz
      </div>
      <div className="p-2">
        <SocialIcon url="https://github.com/henchoznoe" target="_blank"/>
      </div>
    </div>
  );
}

export default Footer;