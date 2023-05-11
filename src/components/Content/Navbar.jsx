import logo from "../../assets/logo.png";
import "../scss/Navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="right">
        <a href="#home">Home</a>
        <a href="#project">Project</a>
        <a href="#about">About</a>
      </div>
    </div>
  );
};

export default Navbar;
