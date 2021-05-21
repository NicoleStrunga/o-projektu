import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Header = () => {
  const [green, setGreen] = useState('');
  const [yellow, setYellow] = useState('');
  const [red, setRed] = useState('');
  // const [bold, setBold] = useState('title');
  const [title, setTitle] = useState('Umetra');

  const handleMouseGreen = () => {
    if (green === 'green') {
      setGreen('');
    } else {
      setGreen('green');
    }
  };

  const handleMouseYellow = () => {
    if (yellow === 'yellow') {
      setYellow('');
    } else {
      setYellow('yellow');
    }
  };

  const handleMouseRed = () => {
    if (red === 'red') {
      setRed('');
    } else {
      setRed('red');
    }
  };

  const handleTitle = () => {
    if (title === 'Umetra') {
      setTitle('UMetra');
    } else {
      setTitle('Umetra');
    }
  };

  return (
    <header>
      <h1
        onMouseEnter={handleTitle}
        onMouseLeave={handleTitle}
        className="title"
      >
        {title}
      </h1>
      <nav>
        <ul>
          <li>
            <Link
              onMouseEnter={handleMouseGreen}
              onMouseLeave={handleMouseGreen}
              className={green}
              to="/"
            >
              O projektu
            </Link>
          </li>
          <li>
            <Link
              onMouseEnter={handleMouseYellow}
              onMouseLeave={handleMouseYellow}
              className={yellow}
              to="/about"
            >
              O nás
            </Link>
          </li>
          <li>
            <Link
              onMouseEnter={handleMouseRed}
              onMouseLeave={handleMouseRed}
              className={red}
              to="/gallery"
            >
              Galerie
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
