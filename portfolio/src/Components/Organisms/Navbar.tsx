import MenuIcon from "@mui/icons-material/Menu";
import "../Organisms/style.css";

export default function Homepage() {
  return (
    <nav>
      <h1>EMMA BRIGHT</h1>
      <ul className="navigation">
        <li>
          <a href="#about" className="nav-link">
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="nav-link">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="nav-link">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
      <button className="burger-menu" id="burger-menu">
        <MenuIcon className="bars" name="menu-outline"></MenuIcon>
      </button>
    </nav>
  );
}
