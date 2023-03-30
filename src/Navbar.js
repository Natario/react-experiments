import './Navbar.css'
import logo from './logo.svg'

function Navbar() {
    return (
      <div className="Navbar">
        <img src={logo} className="Navbar-logo" alt="logo" />
        <h3 className="Navbar-title">Title 1</h3>
        <h3 className="Navbar-title">Title 2</h3>
      </div>
    );
  }
  
  export default Navbar;