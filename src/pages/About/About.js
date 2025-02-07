import React, { useEffect } from 'react';
import Resume from '../../assests/resume.pdf';
import VerticalSeprator from '../../components/Seprator//VerticalSeprator';
import HorizontalSeprator from '../../components/Seprator//HorizontalSeprator';
import AboutInfo from '../../components/AboutInfo/AboutInfo';
import Features from '../../components/Features/Features';
import EducationAndExperience from '../../components/EducationAndExperience/EducationAndExperience';
import Skills from '../../components/Skills/Skills';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import CustomButton from '../../components/CustomButton/CustomButton';
import Heading from '../../components/Heading/Heading';
import './About.css';

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const handleDownload = () => {
		const link = document.createElement('a');
		link.download = 'RishabhTanwar_Resume';

		link.href = Resume;

		link.click();
	};

	return (
		<div className='about-container'>
			<div className='about-landing'>
				<VerticalSeprator />
				<div className='about-details'>
					<div className='about-social'>
						<SocialLinks />
					</div>
					<div className='about-intro'>
						<h1>
							<span>Hey!</span> I am Vaishali Madan,
						</h1>
						<h1>
							A Passionate & enthusiastic
						</h1>
						<h1>UI/UX Designer.Currently</h1>
						<h1>
							based <span>in</span>
							<span className='intro-place'> Gurugram,India.</span>
						</h1>
					</div>
				</div>
			</div>
			<HorizontalSeprator />
			<div className='about-me'>
				<Heading name='About me' ClassName='about-me-heading' />
				<p>
				Innovative UX/UI Designer with 8+ years of fashion design experience, skilled in usercentered design 
				principles. Combines aesthetics and functionality to create engaging digital experiences. Proficient in 
				design tools for solving user problems and recently graduated from UpGrad UI/UX Bootcamp, completing four 
				impactful design projects.
				</p>
			</div>
			<AboutInfo />
			<div className='download-button'>
				<CustomButton name='download CV' onClick={handleDownload} />
			</div>
			<Features />
			<EducationAndExperience />
			<Skills />
		</div>
	);
};

export default About;
