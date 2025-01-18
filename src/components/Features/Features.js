import React from 'react';
import { featuresArray } from '../common/Data';
import Heading from '../Heading/Heading';
import './Features.css';
const Features = () => {
	return (
		<div className='features-container'>
			<Heading name='My Approch Of Development' ClassName='features-heading' />
			<div className='features-details'>
				{featuresArray.map((feature, index) => (
					<div key={index} className='feature'>
						<i className='icon'>{feature.icon}</i>
						<h2 className='feature-title'>{feature.title}</h2>
						<p className='feature-desc'>{feature.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Features;
