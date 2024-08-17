import React from 'react';
import { Link } from 'react-router-dom';
import backgroundimg from '../../assets/images/backgroundimg.jpg'; // Ensure the path is correct

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">INTERLINK</div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="rounded-lg p-2 text-gray-700"
          />
          <nav className="ml-4 space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/add-item" className="hover:underline">Add Item</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

const ItemList = () => {
  // Example items (in a real app, this would come from state or props)
  const items = [
    { id: 1, name: 'Lost Wallet', location: 'Park', status: 'Lost' },
    { id: 2, name: 'Found Keys', location: 'Mall', status: 'Found' },
  ];

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold text-white mb-4">Items</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(item => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold">{item.name}</h3>
            <p className="text-gray-600">{item.location}</p>
            <span className={`text-sm ${item.status === 'Lost' ? 'text-red-500' : 'text-green-500'}`}>
              {item.status}
            </span>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link to="/add-item" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
          Add New Item
        </Link>
      </div>
    </div>
  );
};

const ContactForm = () => {
  return (
    <div className="container mx-auto mt-16">
      <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
      <form className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Your Name</label>
          <input type="text" className="w-full p-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Your Email</label>
          <input type="email" className="w-full p-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Message</label>
          <textarea className="w-full p-2 border rounded-lg"></textarea>
        </div>
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
          Send
        </button>
      </form>
    </div>
  );
};

const HomePage = () => {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundImage: `url(${backgroundimg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <Header />
      <div className="flex-grow">
        <ItemList />
        <ContactForm />
      </div>
    </div>
  );
};

export default HomePage;
