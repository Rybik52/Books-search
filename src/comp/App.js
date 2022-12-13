import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Catalog from './Catalog';
import Book from './Book';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/book/:id" element={<Book />} />
      </Routes>
    </Router>
  );

  
}
