import { Link } from 'react-router-dom';
import './footer.css';

function Footer() {
	return (
		<footer className='footer'>
			<nav className='footer-nav'>
				<Link to='/' className='footer-link'>
					Articles
				</Link>
				<Link to='/topics' className='footer-link'>
					Topics
				</Link>
			</nav>
			<p className='footerSlug'>Copyright 2025 Chris Askew</p>
		</footer>
	);
}

export default Footer;
