import { useState } from "react";
import NavbarMenu from "../NavbarMenu";
import { Menubar, CloseIcon } from "../../assets";

interface NavbarProps {
  active: string;
  onChange: (label: string) => void;
}

const Navbar = ({ active, onChange }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen((prev) => !prev);

  const handleChangeNavBarPc = (label: string) => onChange(label);

  const handleChangeNavbarMobile = (label: string) => {
    onChange(label);
    setIsOpen(false);
  };

  return (
    <nav className="bg-secondary-5 px-0 py-3 flex items-center">
      <button
        className="lg:hidden text-white mr-4"
        onClick={handleClose}
        aria-label="navbar-icon"
      >
        {isOpen ? <CloseIcon /> : <Menubar />}
      </button>

      <div className="flex items-center mr-6">
        <img src="./logo.png" alt="logo" />
      </div>

      <div className="hidden lg:flex">
        <NavbarMenu active={active} onChange={handleChangeNavBarPc} />
      </div>

      {isOpen && (
        <div className="absolute top-[60px] left-0 w-full h-full bg-secondary-5 z-50 p-6 lg:hidden">
          <NavbarMenu
            active={active}
            onChange={handleChangeNavbarMobile}
            isMobile
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
