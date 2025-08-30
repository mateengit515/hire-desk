import React from 'react';
import LeftNav from './LeftNav';
import './styles/LeftNav.css';
import { Outlet } from 'react-router-dom';

const HyderabadDepot: React.FC = () => {
	return (
		<div style={{ display: 'flex' }}>
			<LeftNav />
			<div style={{ marginLeft: 220, padding: '2rem', flex: 1, textAlign: 'center' }}>
				<Outlet />
			</div>
		</div>
	);
};

export default HyderabadDepot;
