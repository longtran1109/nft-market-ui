import { useState } from "react";
import Navbar from "../Navbar";
import Button from "../Button";
import { HOME } from "../../constants/navBar";

const Header = () => {
  const [activeTab, setActiveTab] = useState(HOME);

  return (
    <header className="flex justify-between items-center bg-secondary-5 py-[10px] px-[20px] lg:px-[30px]">
      <div className="flex">
        <Navbar active={activeTab} onChange={setActiveTab} />
      </div>

      <div className="flex gap-2 sm:h-[36px] h-[40px]">
        <Button variant="primary" name="sign up" className="italic" />
        <Button variant="secondary" name="log in" className="italic" />
      </div>
    </header>
  );
};

export default Header;
