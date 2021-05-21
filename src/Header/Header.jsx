import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link className="green" to="/">
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
