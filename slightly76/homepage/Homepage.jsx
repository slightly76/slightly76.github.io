import React from 'react';
import { useEffect, useRef, useState } from 'react';
import './homepage.css';

function Homepage() {
	const panelsRef = useRef([]);
	const [activeIndex, setActiveIndex] = useState(null);

	useEffect(() => {
		const handleScroll = () => {
			const viewportCenter = window.innerHeight / 2;

			const distances = panelsRef.current.map((panel) => {
				if (!panel) return Infinity;
				const rect = panel.getBoundingClientRect();
				const panelCenter = rect.top + rect.height / 2;
				return Math.abs(viewportCenter - panelCenter);
			});

			const closestIndex = distances.indexOf(Math.min(...distances));
			setActiveIndex(closestIndex);
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className='homepage'>
			<div
				ref={(el) => (panelsRef.current[0] = el)}
				className={`panel ${activeIndex === 0 ? 'in-view' : ''}`}
			>
				<div className='header-panel'>
					<div className='header-top'>
						<div className='image-wrapper'>
							<img
								src='./assets/me.jpg'
								className='hover-image base'
								alt='Me'
							/>
							<img
								src='./assets/mehover.jpg'
								className='hover-image hover'
								alt='Me Hovering'
							/>
						</div>

						<div className='header-text'>
							<h1 className='name-heading'>Chris Askew</h1>
							<h2 className='accent'>Junior Software</h2>
							<h2 className='accent'>& Game Dev</h2>
						</div>
					</div>
					<div className='header-slug'>
						<p>
							At 49 it feels weird calling myself a Junior <i>anything</i>, but
							here we are.
						</p>
					</div>
				</div>
			</div>

			<div
				ref={(el) => (panelsRef.current[1] = el)}
				className={`panel ${activeIndex === 1 ? 'in-view' : ''}`}
			>
				<h3>let codingSkillset =</h3>
				<h3>{'{JavaScript, Full Stack, Phaser}'}, </h3>
				<h3>
					{'{Test Driven Development, Pair Programming, SCRUM Methodologies & '}{' '}
					<i>(whisper it)</i> Vibe Coding{'}'}
				</h3>
			</div>

			<div
				ref={(el) => (panelsRef.current[2] = el)}
				className={`panel ${activeIndex === 2 ? 'in-view' : ''}`}
			>
				<p className='muted'>
					//about_me
					<br />
					<br />
					Faced with redundancy, I've grasped the opportunity to pivot towards
					Software Dev after 20 years of experience providing tech support to an
					Animation & Design BA(Hons) Degree programme in the UK. I'm
					comfortable with PC & Mac support, technical demonstrations,
					video/audio editing, and more.
				</p>
				<br />
				<br />
				<p>
					I loved providing pastoral care to the students, doing voice acting
					for student films, and supporting creative disciplines like Film/TV
					and Graphic Design.
				</p>
				<p>
					Now I'm returning to code thanks to a 13-week bootcamp at{' '}
					<a
						href='https://northcoders.com/'
						target='_blank'
						rel='noopener noreferrer'
					>
						Northcoders
					</a>
					. I find myself particularly passionate about games <i>and</i> being
					able to pay the bills, so please click <a href='#'>here</a> to stop me
					from playing games so much and discuss employing me.
				</p>
				<button>This is a button</button>
			</div>
		</div>
	);
}

export default Homepage;
