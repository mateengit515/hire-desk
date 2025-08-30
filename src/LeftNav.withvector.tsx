import { Link, useLocation } from 'react-router-dom';
import HireDeskLogo from './images/HireDeskLogo.png';
import BackhoeLogo from './assets/react.svg'; // Example vector image

const navLinks = [
  { name: 'HireDesk', path: 'dashboard' },
  { name: 'Service Desk', path: 'assets' },
  { name: 'Store Desk', path: 'issues' },
];

const LeftNav: React.FC = () => {
  const location = useLocation();
  const match = location.pathname.match(/^\/(delhi|hyderabad|kolkata|houston)/);
  const base = match ? `/${match[1]}` : '/hyderabad';

  return (
    <nav className="left-nav">
      <div className="nav-logo">
        <img
          src={HireDeskLogo}
          alt="HireDesk Logo"
          style={{
            width: 218,
            height: 47.3913,
            opacity: 1,
            position: 'relative',
            left: 0,
            marginBottom: 8,
          }}
        />
      </div>
      <ul>
        {navLinks.map(link => (
          <li key={link.name} className="dropdown">
            <button
              style={{
                width: 212,
                height: 53,
                opacity: 1,
                borderRadius: 8,
                gap: 8,
                paddingTop: 8,
                paddingRight: 8,
                paddingBottom: 8,
                paddingLeft: 24,
                display: 'flex',
                alignItems: 'center',
                background: '#2464E8',
                border: 'none',
                cursor: 'pointer',
                transition: 'background 0.18s',
              }}
            >
              <img src={BackhoeLogo} alt="Backhoe" style={{ width: 24, height: 24, marginRight: 8 }} />
              <span style={{ color: '#fff', fontSize: 16 }}>{link.name}</span>
            </button>
            <ul className="dropdown-menu">
              {(link.name === 'HireDesk') && [
                <li key="option1"><Link to={`${base}/dashboard/overview`}>Overview</Link></li>,
                <li key="option2"><Link to={`${base}/dashboard/settings`}>Settings</Link></li>,
                <li key="option3"><Link to={`${base}/dashboard/profile`}>Profile</Link></li>,
              ]}
              {(link.name === 'Service Desk') && [
                <li key="option1"><Link to={`${base}/assets/list`}>Asset List</Link></li>,
                <li key="option2"><Link to={`${base}/assets/maintenance`}>Maintenance</Link></li>,
                <li key="option3"><Link to={`${base}/assets/reports`}>Reports</Link></li>,
              ]}
              {(link.name === 'Store Desk') && [
                <li key="option1"><Link to={`${base}/issues/open`}>Open Issues</Link></li>,
                <li key="option2"><Link to={`${base}/issues/closed`}>Closed Issues</Link></li>,
                <li key="option3"><Link to={`${base}/issues/new`}>New Issue</Link></li>,
              ]}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default LeftNav;
