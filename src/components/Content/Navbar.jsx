import logo from "../../assets/logo.png";
import "../scss/Navbar.scss";
import { useSpring, animated as a } from "@react-spring/web";

const Navbar = () => {
  const [props, api] = useSpring(() => ({
    from: { y: -100},
    to: { y: 0 },
    config: { mass: 1, friction: 14, tension: 250 },
  }));
  return (
    <a.div className="navbar" style={props}>
      <div className="left">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="right">
        <a href="#home">Home</a>
        <a href="#project">Project</a>
        <a href="#about">About</a>
      </div>
    </a.div>
  );
};

export default Navbar;
