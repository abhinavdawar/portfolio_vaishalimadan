import React from 'react';
import Heading from '../Heading/Heading';
import { educationArray, experienceArray } from '../common/Data';
import './EducationAndExperience.css';

const EducationAndExperience = () => {
	return (
		<div className='carrer-info-container'>
			<div className='education-container'>
				<Heading name='Education' ClassName='education-heading' />
				<ul>
					{educationArray.map((education, index) => (
						<li key={index}>
							<div className='list_inner'>
								<div className='time'>
									<span>{education.period}</span>
								</div>
								<div className='place'>
									<h3>{education.instituteName}</h3>
									<span>{education.education}</span>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
			<div className='experience-container'>
				<Heading name='Experience' ClassName='experience-heading' />
				<ul>
					{experienceArray.map((experience, index) => (
						<li key={index}>
							<div className='list_inner'>
								<div className='time'>
									<span>{experience.period}</span>
								</div>
								<div className='place'>
									<h3>{experience.company}</h3>
									<span>{experience.designation}</span>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default EducationAndExperience;
