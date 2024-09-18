import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import SearchBar from '../Input/Input';
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
    const closeMenu = () => {
      setMenuOpen(false);
    };

    const link = (
      <>
        <li className="mb-2">
          <NavLink
            to={'/'}
            className={({ isActive }) =>
              `block text-sm font-semibold px-4 py-2 rounded-md transition duration-300 ease-in-out ${
                isActive
                  ? 'bg-green-500 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-blue-100 hover:text-blue-600'
              }`
            }
          >
            Home
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            to={'/add'}
            className={({ isActive }) =>
              `block text-sm font-semibold px-4 py-2 rounded-md transition duration-300 ease-in-out ${
                isActive
                  ? 'bg-green-500 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-blue-100 hover:text-blue-600'
              }`
            }
          >
            Items Add
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            to={'/reviews'}
            className={({ isActive }) =>
              `block text-sm font-semibold px-4 py-2 rounded-md transition duration-300 ease-in-out ${
                isActive
                  ? 'bg-green-500 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-blue-100 hover:text-blue-600'
              }`
            }
          >
            Reviews
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            to={'/build'}
            className={({ isActive }) =>
              `block text-sm font-semibold px-4 py-2 rounded-md transition duration-300 ease-in-out ${
                isActive
                  ? 'bg-green-500 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-blue-100 hover:text-blue-600'
              }`
            }
          >
            Website Builder
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            to={'/blog'}
            className={({ isActive }) =>
              `block text-sm font-semibold px-4 py-2 rounded-md transition duration-300 ease-in-out ${
                isActive
                  ? 'bg-green-500 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-blue-100 hover:text-blue-600'
              }`
            }
          >
            Blogs
          </NavLink>
        </li>
      </>
    );
    
    return (
        <div>
                  <body className="bg-blue-500">
        <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
          <a className="text-3xl font-bold leading-none" href="#">
            <img src="/public/S (4).png" alt="" />
          </a>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="navbar-burger flex items-center text-blue-600 p-3">
              <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          <ul className={`hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6`}>
          {
            link
          }
          </ul><NavLink
  to={'/login'}
  className={({ isActive }) =>
    `hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 text-sm font-bold rounded-xl transition duration-200 ${
      isActive
        ? 'bg-green-500 text-white'
        : 'bg-gray-50 hover:bg-gray-100 text-gray-900'
    }`
  }
>
  Log In
</NavLink>

<NavLink
  to={'/reg'}
  className={({ isActive }) =>
    `hidden lg:inline-block py-2 px-6 text-sm font-bold rounded-xl transition duration-200 ${
      isActive
        ? 'bg-green-500 text-white'
        : 'bg-blue-500 hover:bg-blue-600 text-white'
    }`
  }
>
  Register Now
</NavLink>

        </nav>
        <div className={`navbar-menu relative z-50 ${menuOpen ? '' : 'hidden'}`}>
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" onClick={closeMenu}></div>
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-8">
              <a className="mr-auto text-3xl font-bold leading-none" href="#">
                <img src="/public/S (4).png" alt="" />
              </a>
              <button className="navbar-close" onClick={closeMenu}>
                <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                  {
                    link
                  }
              </ul>
            </div>
            <div className="mt-auto">
              <div className="pt-6">
                  
              <NavLink
  to={'/login'}
  className={({ isActive }) =>
    `hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 text-sm font-bold rounded-xl transition duration-200 ${
      isActive
        ? 'bg-green-500 text-white'
        : 'bg-gray-50 hover:bg-gray-100 text-gray-900'
    }`
  }
>
  Log In
</NavLink>

<NavLink
  to={'/reg'}
  className={({ isActive }) =>
    `hidden lg:inline-block py-2 px-6 text-sm font-bold rounded-xl transition duration-200 ${
      isActive
        ? 'bg-green-500 text-white'
        : 'bg-blue-500 hover:bg-blue-600 text-white'
    }`
  }
>
  Register Now
</NavLink>

              </div>
              <p className="my-4 text-xs text-center text-gray-400">
                <span>Copyright © 2021</span>
              </p>
            </div>
          </nav>
        </div>
      </body>
        </div>
    );
};

export default Header;