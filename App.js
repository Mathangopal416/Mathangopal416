import React from 'react';
import './App.css';
import Contact from './contact'
import About from './About'
import  User from './user'
import { Link, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
    <div className="nav-bar">

      {/* <li><Link>users</Link></li>
      <li><Link>users</Link></li> */}
  
          <Link to="/Contact"><button className="btn">Contact</button></Link>
          <Link to="/Users"><button className="btn">User</button></Link>
          <Link to="/About"><button className=" align btn">About</button></Link>
        </div>

      <Routes>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/user" element={<User />}/>
        <Route path="/About" element={<About />}/>
        {/* <Route path="/user/edit" element={<Edit />}/> */}
      </Routes>
     
    </div>
  );
}

export default App;
