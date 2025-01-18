import React from 'react';
import './CustomButton.css';
import '../Navbar/Navbar.css';
const CustomButton = ({ name, onClick, ClassName }) => {
	return (
		<div className='custom-button'>
			<button className='menu-item' onClick={onClick}>
				<div>
					{name.split('').map((word, index) => (
						<span key={index} style={{ '--index': `${index}` }}>
							{word === ' ' ? <p>&nbsp;</p> : word}
						</span>
					))}
				</div>
				<div className={`hover-clone ${ClassName}`}>
					{name.split('').map((word, index) => (
						<span key={index} style={{ '--index': `${index}` }}>
							{word === ' ' ? <p>&nbsp;</p> : word}
						</span>
					))}
				</div>
			</button>
		</div>
	);
};

export default CustomButton;
