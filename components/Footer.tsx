import { AiOutlineFacebook, AiOutlineX, AiOutlineGithub, AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 dark:bg-black shadow-sm text-gray-400 py-6 dark:border-t dark:border-gray-800">
      <div className="container mx-auto px-4 flex flex-wrap justify-center sm:justify-between items-center text-sm">
        <p className="ml-4">&copy; {currentYear} TechNova. All rights reserved.</p>
        <p className="ml-4">Powered by <a href="https://www.technova.coach" className="text-black dark:text-white hover:text-gray-300">TechNova</a></p>
      </div>
    </footer>
  );
};

export default Footer;
