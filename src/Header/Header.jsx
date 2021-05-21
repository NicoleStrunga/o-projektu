import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Header = () => {
  const [green, setGreen] = useState('');

  const handleMouse = () => {
    if (green === 'green') {
      setGreen('');
    } else {
      setGreen('green');
    }
  };

  return (
    <header>
      <h1>UMetra</h1>
      <nav>
        <ul>
          <li>
            <Link
              onMouseEnter={handleMouse}
              onMouseLeave={handleMouse}
              className={green}
              to="/"
            >
              O projektu
            </Link>
          </li>
          <li>
            <Link className="yellow" to="/about">
              O nás
            </Link>
          </li>
          <li>
            <Link className="red" to="/gallery">
              Galerie
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
