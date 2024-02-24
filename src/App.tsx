import React, { useState } from 'react';
import './App.css';

import Navbar from './component/Navbar';
import CardMenu from './component/CardMenu';
import Footer from './component/Footer';
import Content from './component/Content';

function App() {
  return (
    <div className="">
      <Navbar/>
      <main className='px-8 py-8'>
        <CardMenu />
        <Content />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
