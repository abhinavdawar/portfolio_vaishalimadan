import React from 'react';
import { aboutInfoA, aboutInfoB } from '../common/Data';
import './AboutInfo.css';

const AboutInfo = () => {
	return (
		<div className='about-info-container'>
			<div className='about-info left'>
				<ul>
					{aboutInfoA.map((info, index) => (
						<li key={index}>
							<span>{info.name}</span>
							<span>{info.value}</span>
						</li>
					))}
				</ul>
			</div>
			<div className='about-info right'>
				<ul>
					{aboutInfoB.map((info, index) => (
						<li key={index}>
							<span>{info.name}</span>
							<span>{info.value}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default AboutInfo;
