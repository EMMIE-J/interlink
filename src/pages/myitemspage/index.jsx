import React from 'react';
import { Link } from 'react-router-dom';


const MyItemsPage = ({ items, onEditItem, onDeleteItem, onToggleStatus }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow container mx-auto p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">My Items</h2>
        {items.length === 0 ? (
          <p className="text-gray-600">You have no items listed.</p>
        ) : (
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item.id} className="bg-white p-4 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800">{item.itemName}</h3>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-gray-600">Category: {item.category}</p>
                <p className="text-gray-600">Location: {item.location}</p>
                <div className="mt-4 space-x-2">
                  <button
                    onClick={() => onToggleStatus(item.id)}
                    className={`px-4 py-2 rounded-lg text-white ${item.status === 'Lost' ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'}`}
                  >
                    Mark as {item.status === 'Lost' ? 'Found' : 'Lost'}
                  </button>
                  <button
                    onClick={() => onEditItem(item.id)}
                    className="px-4 py-2 rounded-lg text-white bg-yellow-600 hover:bg-yellow-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDeleteItem(item.id)}
                    className="px-4 py-2 rounded-lg text-white bg-gray-600 hover:bg-gray-700"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MyItemsPage;
