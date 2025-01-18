import React, { useState } from 'react';
import { NavbarLinks } from '../common/LinksData';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	const line = 'WELCOME TO MY PORTFOLIO';
	// to change burger classes
	const [burger_class, setBurgerClass] = useState('burger-bar unclicked');
	const [menu_class, setMenuClass] = useState('navbar-links hidden');
	const [isMenuClicked, setIsMenuClicked] = useState(false);

	// toggle burger menu change
	const updateMenu = () => {
		if (!isMenuClicked) {
			setBurgerClass('burger-bar clicked');
			setMenuClass('navbar-links visible');
		} else {
			setBurgerClass('burger-bar unclicked');
			setMenuClass('navbar-links hidden');
		}
		setIsMenuClicked(!isMenuClicked);
	};

	return (
		<div className='navbar'>
			<Link to='/' className='navbar-logo'>
				<h2>Vaishali Madan</h2>
			</Link>
			<div className='navbar-line'>
				<p>
					{line} <span className='dot'></span>
					&nbsp;&nbsp;&nbsp; {line} <span className='dot'></span>
					&nbsp;&nbsp;&nbsp; {line} <span className='dot'></span>
					&nbsp;&nbsp;&nbsp;
				</p>
				<p>
					{line} <span className='dot'></span>
					&nbsp;&nbsp;&nbsp; {line} <span className='dot'></span>
					&nbsp;&nbsp;&nbsp; {line} <span className='dot'></span>
					&nbsp;&nbsp;&nbsp;
				</p>
			</div>
			<div className={menu_class}>
				{NavbarLinks.map((item) => (
					<Link
						key={item.id}
						className='menu-item'
						to={`/${item.to}`}
						onClick={updateMenu}
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
			<div className='burger-menu' onClick={updateMenu}>
				<div className={burger_class}></div>
				<div className={burger_class}></div>
				<div className={burger_class}></div>
			</div>
		</div>
	);
};

export default Navbar;
