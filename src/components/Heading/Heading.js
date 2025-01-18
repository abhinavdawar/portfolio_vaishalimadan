import React from 'react';
import './Heading.css';

const Heading = ({ name, ClassName }) => {
	return (
		<div className={`heading-head ${ClassName}`}>
			<div className='heading-design-line'>
				<div className='heading-design1'></div>
				<div className='heading-design2'></div>
			</div>
			<span>{name}</span>
		</div>
	);
};

export default Heading;
