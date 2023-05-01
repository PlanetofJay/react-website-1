import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const handleExpandNavbar = () => setExpandNavbar(!expandNavbar);
  const handleCloseNavbar = () => setExpandNavbar(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            GO travel <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleExpandNavbar}>
            <i className={expandNavbar ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={expandNavbar ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={handleCloseNavbar}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/services' className='nav-links' onClick={handleCloseNavbar}>
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/products' className='nav-links' onClick={handleCloseNavbar}>
                Products
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/sign-up' className='nav-links-sign-up' onClick={handleCloseNavbar}>
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav >
    </>
  );
}

export default Navbar;