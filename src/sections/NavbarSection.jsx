import DesktopNavbar from "../components/nav/DesktopNavbar";
import MobileNavbar from "../components/nav/MobileNavbar";
import { navLinks } from "../data/navData";

const NavbarSection = () => {
  return (
    <header className="relative z-[100] p-2 pb-12" data-selected="true" data-label-id="0" data-metatip="true">
      <div className="w-full">
        <DesktopNavbar links={navLinks} />
        <MobileNavbar links={navLinks} />
      </div>
    </header>
  );
};

export default NavbarSection;
