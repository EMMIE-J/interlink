import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import backgroundimg from '../../assets/images/backgroundimg.jpg';

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
        <AddNewItemButton />
      </div>
    </div>
  );
};

const AddNewItemButton = () => {
  const navigate = useNavigate();

  const handleAddNewItem = () => {
    const user = localStorage.getItem('user');
    if (!user) {
      navigate('/signup');
    } else {
      navigate('/add-item');
    }
  };

  return (
    <button 
      onClick={handleAddNewItem} 
      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
    >
      Add New Item
    </button>
  );
};

const HomePage = () => {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundImage: `url(${backgroundimg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="flex-grow">
        <ItemList />
      </div>
    </div>
  );
};

export default HomePage;
