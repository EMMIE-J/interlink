import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavLinks from './components/navbar';
import Home from './pages/homepage';
import AddItemPage from './pages/additempage';
import MyItemsPage from './pages/myitemspage';
import ContactPage from './pages/contactpage';
import SignUpPage from './pages/signup';
import LogIn from './pages/login';

function App() {
  const [items, setItems] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is signed up
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const addItem = (item) => {
    setItems([
      ...items,
      { id: items.length + 1, ...item }
    ]);
  };

  return (
    <Router>
      <NavLinks />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add-item" element={<AddItemPage onAddItem={addItem} />} />
        <Route path="/my-items" element={<MyItemsPage items={items} />} />
        <Route path="/contact" element={<ContactPage />} />  
        <Route path="/signup"
        element={<SignUpPage />} />
        <Route path="/login"
        element={<LogIn />} />
      </Routes>
    </Router>
  );
}

export default App;
