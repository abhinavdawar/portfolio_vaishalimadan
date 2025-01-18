import React from 'react';
import { SocialMediaLinks } from '../common/LinksData';
import { Link } from 'react-router-dom';
import './SocialLinks.css';
import '../Navbar/Navbar.css';

const SocialLinks = () => {
	const openInNewTab = (url) => {
		window.open(url, '_blank', 'noreferrer');
	};
	return (
		<div className='social-links'>
			{SocialMediaLinks.map((item) => (
				<Link
					key={item.id}
					className='menu-item'
					onClick={() => openInNewTab(`${item.url}`)}
				>
					<div>
						{item.name.map((word, index) => (
							<span key={index} style={{ '--index': `${index}` }}>
								{word}
							</span>
						))}
					</div>
					<div className='hover-clone'>
						{item.name.map((word, index) => (
							<span key={index} style={{ '--index': `${index}` }}>
								{word}
							</span>
						))}
					</div>
				</Link>
			))}
		</div>
	);
};

export default SocialLinks;
