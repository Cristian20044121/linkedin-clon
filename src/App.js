import React from 'react';
import './App.css';
import { Header } from './Header'

function App() {
  return (
    <div className="App">
      {/* HEADER */}
        <Header />

      {/* App body */}
      <div className='app_body'>
      {/* Sidebar*/}
      <Sidebar />
      </div>
      {/* Feed */}
      {/* Widgets */}
    </div>
  );
}

export default App;
