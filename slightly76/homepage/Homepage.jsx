import React, { useEffect, useRef } from 'react';
import './homepage.css';

function Homepage() {
	const panelsRef = useRef([]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					entry.target.classList.toggle('in-view', entry.isIntersecting);
				});
			},
			{ threshold: 0.6 }
		);

		panelsRef.current.forEach((panel) => {
			if (panel) observer.observe(panel);
		});

		return () => {
			panelsRef.current.forEach((panel) => {
				if (panel) observer.unobserve(panel);
			});
		};
	}, []);

	return (
		<div className='homepage'>
			<div className='panel' ref={(el) => (panelsRef.current[0] = el)}>
				<div className='header-panel'>
					<div className='crt-image-wrapper'>
						<img className='crt-image base' src='./assets/me.jpg' alt='Me' />
						<img
							className='crt-image hover'
							src='./assets/mehover.jpg'
							alt='Me Hover'
						/>
					</div>
					<div className='header-text'>
						<h1 className='name-heading'>Chris Askew</h1>
						<h2 className='accent'>Junior Software</h2>
						<h2 className='accent'>& Game Dev</h2>
					</div>
				</div>
				<p>
					At 49 it feels weird calling myself a Junior <i>anything</i>, but here
					we are.
				</p>
			</div>

			<div className='panel' ref={(el) => (panelsRef.current[1] = el)}>
				<h3>/coding_skillset.</h3>
				<h3>JavaScript | Full Stack | Phaser</h3>
				<h3>
					Test Driven Development | Pair Programming | SCRUM Methodologies |
					Vibe Coding <i>(whisper it)</i>
				</h3>
			</div>

			<div
				className='panel text-content'
				ref={(el) => (panelsRef.current[2] = el)}
			>
				<p className='muted'>
					/about_me.
					<br />
					<br />
					Tackling the spectre of redundancy head-on by pivoting towards
					Software Dev, after over 20 years experience providing tech support to
					an Animation & Design BA(Hons) Degree here in the UK. As a result of
					my work in Education I'm comfortable imparting Hardware & Software
					Support for PC & Mac, performing Technical Demonstration, undertaking
					Video & Audio Editing, assisting Lighting & Camera Operation etc.
					<br />
					<br />I had a great rapport with the students and offered pastoral
					support too, revelling in voice acting & narration roles for student
					film & radio projects when the opportunity arose. I'm also comfortable
					working with creative disciplines such as Illustration, Graphic
					Design, Film/TV/Radio. I guess I enjoyed the creative side of things
					more than the generic IT support. As you can probably tell, I tend to
					roll up my sleeves and have a go <i>regardless</i> of the challenge.
					The classic 'Jack of all'.
					<br />
					<br />
					So, I reckon I'm probably half way through my career journey (fingers
					crossed!) and I'm ready for a fresh challenge in coding. It's
					something I loved as a kid and would have remained on that career path
					had I not been directed otherwise by parents & teachers who didn't
					really <i>get it</i> in the late 80's. Now, thanks to an intense 13
					week bootcamp in JavaScript at{' '}
					<a
						href='https://northcoders.com/'
						target='_blank'
						rel='noopener noreferrer'
					>
						Northcoders
					</a>{' '}
					I'm stood on the precipice of what feels like an exciting career
					redemption.
				</p>
				<p>
					I'm particularly passionate about games <i>whilst</i> being able to
					pay the bills, so please click <a href='#'>here</a> to stop me from
					playing games so much and maybe employ me.
				</p>
				<button>This is a button</button>
			</div>
		</div>
	);
}

export default Homepage;
