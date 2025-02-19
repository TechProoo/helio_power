import { useEffect } from "react"; 
import Logo from "../Image/solar_logo.png";
import { FiArrowRight } from "react-icons/fi"; // Changed to react-icons
import { NavLink } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNav } from "../NavContext";

gsap.registerPlugin(ScrollTrigger);

interface NavbarProps {
  color: string;
}

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact Us", path: "/contact" },
];

const Navbar: React.FC<NavbarProps> = ({ color }) => {
  const { activeLink, setActiveLink } = useNav(); // Use global state

  useEffect(() => {
    ScrollReveal().reveal(".logo_subName", {
      duration: 2400,
      distance: "200px",
      origin: "right",
      delay: 100,
    });
  }, []);

  return (
    <div className="navbar_container">
      <div className="flex items-center justify-between">
        <div className="logo_cover flex items-center gap-2">
          <div className="logo_img">
            <img src={Logo} alt="Helio Power Logo" />
          </div>
          <b className="logo_name ft_hd pt-2">
            Helio
            <span className="logo_subName" style={{ color }}>
              Power
            </span>
          </b>
        </div>
        <div className="nav_links flex gap-4 flex-col">
          {navItems.map((item) => (
            <div key={item.name} className="relative">
              {activeLink === item.name && (
                <FiArrowRight
                  className="absolute text-white"
                  style={{ left: "-30px" }}
                />
              )}
              <NavLink
                to={item.path}
                className={`nav_link ${
                  activeLink === item.name ? "ft_hd navbar_active" : "text-white"
                }`}
                style={activeLink === item.name ? { color } : undefined}
                onClick={() => setActiveLink(item.name)}
              >
                {item.name}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
