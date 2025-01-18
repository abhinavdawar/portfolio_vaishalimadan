import React from 'react';
import { skillArrayA, skillArrayB } from '../common/Data';
import './Skills.css';
import Heading from '../Heading/Heading';
const Skills = () => {
	return (
		<div className='skills-container'>
			<Heading name='Skills' ClassName='skills-heading' />
			<div className='skill-details'>
				<div className='skill-container'>
					{skillArrayA.map((skill, index) => (
						<div key={index} className='progress_inner'>
							<span>
								<span className='label'>{skill.label}</span>
								<span className='number'>{skill.percentage}</span>
							</span>
							<div className='background'>
								<div className='bar'>
									<div
										className='bar_in'
										style={{ width: `${skill.percentage}` }}
									></div>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className='skill-container'>
					{skillArrayB.map((skill, index) => (
						<div key={index} className='progress_inner'>
							<span>
								<span className='label'>{skill.label}</span>
								<span className='number'>{skill.percentage}</span>
							</span>
							<div className='background'>
								<div className='bar'>
									<div
										className='bar_in'
										style={{ width: `${skill.percentage}` }}
									></div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Skills;
