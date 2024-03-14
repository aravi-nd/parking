import React from 'react';
import { Link } from 'react-router-dom';
import '../Login/Login.css';
import './services.css'

export default function About() {
  return (
    <div className='custom-grid2 style'>
      <section className='service-section'>
        <h2>VIEW SLOTS</h2>
        <Link to="/ViewSlot/ViewSlot.js">
          <button className='service-button'>GO</button>
        </Link>
        <p>
        </p>
      </section>
      <section className='service-section'>
        <h2>BOOK SLOT</h2>
        <Link to="/ViewSlot/ViewSlot.js">
          <button className='service-button'>GO</button>
        </Link>
        <p>
        </p>
      </section>
      <section className='service-section'>
        <h2>SHOW PRICING</h2>
        <Link to="/ViewSlot/ViewSlot.js">
          <button  className='service-button'>GO</button>
        </Link>
        <p>
        </p>
      </section>
    </div>
  );
}
