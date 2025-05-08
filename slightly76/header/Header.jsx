import React from 'react';
//import ncnLogo from '../assets/ncnewslogo.png';
//import userAvatar from '../assets/icons/icon-avatar.svg';
import './header.css';
import { usePageTitle } from './PageTitleContext.jsx';
import { useState } from 'react';

function Header() {
	const { pageTitle } = usePageTitle();
	return (
		<header className='header'>
			<div className='top-container'>
				<img src={ncnLogo} className='logo' alt='NC News logo' />

				<div className='text-container'>
					<p className='headline'>NC News</p>
					<p className='tagline'>push someone's buttons today!</p>
				</div>
			</div>

			<div className='bottom-container'>
				<h2 className='activePage'>{pageTitle}</h2>
				<img src={userAvatar} className='user' alt='user avatar' />
			</div>
		</header>
	);
}

export default Header;
