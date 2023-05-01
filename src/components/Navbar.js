import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import './Navbar.css';

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <>
      <nav className='navbar' id={expandNavbar ? 'open' : 'close'}>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            GO travel
            <img
              src='../images/logo.png'
              alt='logo'
              width={30}
              height={30}
            />
          </Link>
          <div
            className='menu-icon'
            onClick={() => {
              setExpandNavbar((prev) => !prev);
            }}
          >
            <FiMenu />
          </div>
        </div>
      </nav >
    </>
  );
}

export default Navbar;