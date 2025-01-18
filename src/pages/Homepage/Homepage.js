import React, { useEffect } from 'react';
import Landing from '../../components/Landing/Landing';
import './Homepage.css';

const Homepage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className='homepage'>
			<Landing />
		</div>
	);
};

export default Homepage;
