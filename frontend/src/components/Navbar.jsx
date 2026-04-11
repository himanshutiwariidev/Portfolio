import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-orange-500/20 bg-neutral-950/90 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-2 py-3 text-orange-50 md:px-8">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12" />
        </div>

        <ul className="hidden gap-6 text-lg font-medium text-orange-100 md:flex">
          <Link to="/"><li className="cursor-pointer transition hover:text-orange-400">Home</li></Link>
          <li className="cursor-pointer transition hover:text-orange-400">About</li>
          <li className="cursor-pointer transition hover:text-orange-400">Services</li>
          <li className="cursor-pointer transition hover:text-orange-400">Projects</li>
          <Link to="/blog"><li className="cursor-pointer transition hover:text-orange-400">Blogs</li></Link>
{/*           <Link to="/admin/login"><li className="cursor-pointer transition hover:text-orange-400">Admin</li></Link>
 */}          <li className="cursor-pointer transition hover:text-orange-400">Contact</li>
        </ul>

        <div className="text-orange-300 md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
          </button>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col items-center gap-4 border-t border-orange-500/20 bg-neutral-950 py-4 text-orange-100 shadow-lg shadow-orange-950/50">
          <Link to="/"><li className="cursor-pointer transition hover:text-orange-400">Home</li></Link>
          <Link to="/blog"><li className="cursor-pointer transition hover:text-orange-400">Blogs</li></Link>
{/*           <Link to="/admin/login"><li className="cursor-pointer transition hover:text-orange-400">Admin</li></Link>
 */}          <li className="cursor-pointer transition hover:text-orange-400">About</li>
          <li className="cursor-pointer transition hover:text-orange-400">Services</li>
          <li className="cursor-pointer transition hover:text-orange-400">Projects</li>
          <li className="cursor-pointer transition hover:text-orange-400">Contact</li>
        </ul>
      </div>
    </nav>
  );
};
