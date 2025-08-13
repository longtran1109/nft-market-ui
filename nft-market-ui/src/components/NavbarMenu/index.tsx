import clsx from "clsx";
import { MENU_ITEMS } from "../../constants/menuItems";

interface NavbarMenuProps {
  active: string;
  onChange: (label: string) => void;
  isMobile?: boolean;
}

const NavbarMenu = ({ active, onChange, isMobile }: NavbarMenuProps) => (
  <div className={isMobile ? "flex flex-col gap-4" : "flex gap-2"}>
    {MENU_ITEMS.map(({ label }) => {
      const isActive = label === active;
      return (
        <a
          key={label}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onChange(label);
          }}
          className={clsx(
            "px-4 py-2 rounded-full transition-all",
            isActive
              ? "bg-secondary-10 text-yellow-400"
              : "text-gray-300 hover:text-white",
            isMobile && "text-center"
          )}
        >
          {label}
        </a>
      );
    })}
  </div>
);

export default NavbarMenu;
