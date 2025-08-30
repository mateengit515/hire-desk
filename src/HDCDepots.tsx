import React from 'react';
import { Link } from 'react-router-dom';
import './styles/HDCDepots.css';

const depots = [
  { name: 'Delhi', path: '/hyderabad' },
  { name: 'Hyderabad', path: '/hyderabad' },
  { name: 'Kolkata', path: '/hyderabad' },
  { name: 'Houston', path: '/hyderabad' }
];

const HDCDepots: React.FC = () => {
  return (
    <div className="hdc-depots-container">
      <h2>HDC Depots</h2>
      <ul>
        {depots.map((depot) => (
          <li key={depot.name}>
            <Link to={depot.path}>{depot.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HDCDepots;
