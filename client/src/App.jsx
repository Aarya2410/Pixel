import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';  // Fixed imports
import logo from './assets/logo.svg';
import { Home, CreatePost } from './pages';  // Ensure these pages are correctly exported from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-4 py-4 border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logo}  alt="logo" className="w-28 object-contain" />
        </Link>

        <Link to ="/CreatePost"className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create</Link>
      </header>

      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />  {/* Ensure Home component is properly defined */}
          <Route path="/createpost" element={<CreatePost />} />  {/* Ensure CreatePost component is properly defined */}
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
