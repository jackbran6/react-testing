import React, {useState} from "react";
import '../components/NavBar.css'
import { Link } from 'react-router-dom'
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function NavBar() {
    const [click, setClick] = useState(false)
    const closeMobileMenu  = () => setClick(false);
    
    const handleClick= () => {
        setClick(!click);
    }

  return (
  <>
  <IconContext.Provider value={{ color: '#fff'}}>
    <div className="navbar">
        <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                <MdFingerprint className='navbar-icon'/>
                Jack Branthwaite
            </Link>
            <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes/> : <FaBars/>}    
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                    <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/projects" className="nav-links" onClick={closeMobileMenu}>
                        Projects
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/cv" className="nav-links" onClick={closeMobileMenu}>
                        CV
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    </div>
    </IconContext.Provider>
  </>)

}

export default NavBar;
