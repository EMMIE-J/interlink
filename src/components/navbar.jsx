import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white text-lg font-bold">INTERLINK</Link>
        <div className="space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link to="/add-item" className="text-gray-300 hover:text-white">Add Item</Link>
          <Link to="/my-items" className="text-gray-300 hover:text-white">My Items</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavLinks;
