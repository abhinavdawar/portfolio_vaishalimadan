import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import Resume from '../../assests/resume.pdf';
import { TypeAnimation } from 'react-type-animation';
import './Landing.css';

const Landing = () => {
	const handleDownload = () => {
		const link = document.createElement('a');
		link.download = 'VaishaliMadan_Resume';

		link.href = Resume;

		link.click();
	};

	return (
		<div className='landing'>
			<div className='landing-image'></div>
			<div className='landing-content'>
				<h3>
					<span className='landing-name'>VAISHALI MADAN</span>
				</h3>
				<div className='landing-work'>
					<TypeAnimation
						sequence={[
							'Problem Solver',
							1000,
							'UX Designer',
							1000
						]}
						speed={20}
						style={{ fontSize: '5rem' }}
						repeat={Infinity}
					/>
				</div>
				<span className='landing-text'>
				Innovative UX/UI Designer with 8+ years of fashion design experience, skilled in usercentered 
				design principles.
				</span>
				<CustomButton name='Download CV' onClick={handleDownload} />
			</div>
		</div>
	);
};

export default Landing;
