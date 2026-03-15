import { useState } from "react";
import { useLocation } from "react-router-dom";
import { navLinks } from "../constants";
import { AnimatedText } from "../components/ui/animated-text";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const NavItems = () => {
    return (
      <ul className="flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20 py-2 sm:px-2">
        {navLinks.map((item) => {
          const isHash = item.href.startsWith("#");
          const href =
            isHash && location.pathname !== "/" ? `/${item.href}` : item.href;

          return (
            <li
              key={item.id}
              className="cursor-target text-neutral-400 hover:text-white sm:w-full sm:rounded-md"
              onClick={toggleMenu}
            >
              <AnimatedText href={href}>{item.name}</AnimatedText>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space relative">
          <a href="/" className="absolute sm:left-0 -left-4">
            <img
              src="/assets/logo/logooo.png"
              alt="Shamil Vm"
              className=" h-48"
            />
          </a>
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex justify-end w-full cursor-pointer"
            aria-label="Toggle Menu"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt=""
              className="w-6 h-6"
            />
          </button>
          <nav className="sm:flex w-full hidden justify-end">
            <NavItems />
          </nav>
        </div>
      </div>
      <div
        className={`absolute left-0 h-screen right-0 bg-black-200 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden z-20 mx-auto sm:hidden block ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
