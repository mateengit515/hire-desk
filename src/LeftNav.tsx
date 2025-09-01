import { Link, useLocation } from 'react-router-dom';
import HireDeskLogo from './images/HireDeskLogo.png';
import BackhoeIcon from './Icons/BackhoeIcon';
import ServiceDeskIcon from './Icons/ServiceDeskIcon';
import StoreDeskIcon from './Icons/StoreDeskIcon';
import DashboardIcon from './Icons/DashBoardIcon';

const navLinks = [
  { name: 'HireDesk', path: 'dashboard' },
  { name: 'Service Desk', path: 'assets' },
  { name: 'Store Desk', path: 'issues' },
  
];


const LeftNav: React.FC = () => {
  const location = useLocation();
  // Find the current depot from the path: /depotName/...
  const match = location.pathname.match(/^\/(delhi|hyderabad|kolkata|houston)/);
  const base = match ? `/${match[1]}` : '/hyderabad';

  return (
    <nav className="left-nav">
      <div className="nav-logo">
        <img
          src={HireDeskLogo}
          alt="HireDesk Logo"
          className="nav-logo-img"
        />
      </div>
      <div className="dashboard-link-wrapper">
        <Link to={`${base}/dashboard`} className="dashboard-link">
          <DashboardIcon className="dashboard-link-icon" />
          DashBoard
        </Link>
      </div>
      <ul>
        {navLinks.map(link => (
          <li key={link.name} className="dropdown">
            <button className="left-nav-btn">
              {link.name === 'Store Desk' ? (
                <StoreDeskIcon className="left-nav-icon" />
              ) : link.name === 'Service Desk' ? (
                <ServiceDeskIcon className="left-nav-icon" />
              ) : (
                <BackhoeIcon className="left-nav-icon" />
              )} 
              <span className="left-nav-btn-label">{link.name}</span>
            </button>
            <ul className="dropdown-menu">
              {(link.name === 'HireDesk') && [
                <li key="option1"><Link to={`${base}/dashboard/asset-list`}>Asset List</Link></li>,
                <li key="option2"><Link to={`${base}/dashboard/asset-management`}>Asset Management</Link></li>,
                <li key="option3"><Link to={`${base}/dashboard/asset-renewal-reminders`}>Asset Reminders</Link></li>,
                <li key="option4"><Link to={`${base}/dashboard/employee-documents`}>Employee Documents</Link></li>,
                <li key="option5"><Link to={`${base}/dashboard/contacts`}>Contacts</Link></li>,
                <li key="option6"><Link to={`${base}/dashboard/documents`}>Documents</Link></li>,
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
