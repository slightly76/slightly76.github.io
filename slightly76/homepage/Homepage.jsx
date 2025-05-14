import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import './homepage.css';
import PhaserLogo from '/assets/logos/phaser-logo.svg?react';
import AudacityLogo from '/assets/logos/audacity-logo.svg?react';
import ReasonLogo from '/assets/logos/reason-logo.svg?react';
import ToonBoomLogo from '/assets/logos/toonboom-logo.svg?react';
import TiledLogo from '/assets/logos/tiled-logo.svg?react';
import DiscordLogo from '/assets/logos/discord-logo.svg?react';
import FigmaLogo from '/assets/logos/figma-logo.svg?react';
import TrelloLogo from '/assets/logos/trello-logo.svg?react';

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
				<div className='skills-list'>
					<h3>{'{'}</h3>
					<h3>{'JavaScript,'}</h3>
					<h3>{'Full Stack,'}</h3>
					<h3>{'Phaser,'}</h3>
					<h3>{'}'}</h3>
					<p></p>
					<h3>{'{'}</h3>
					<h3>Test Driven Development,</h3>
					<h3>{'Pair Programming,'}</h3>
					<h3>{'SCRUM Methodologies,'}</h3>
					<h3>{'Vibe Coding '}</h3>
					<h3>
						<i>//whisper it</i>
					</h3>
					<h3>{'}'}</h3>
				</div>
			</div>
			<div
				ref={(el) => (panelsRef.current[2] = el)}
				className={`panel ${activeIndex === 2 ? 'in-view' : ''}`}
			>
				<h3>Tinkering Toolbox</h3>
				<div className='icon-grid'>
					<i
						data-tooltip-id='javascript-tooltip'
						data-tooltip-content="I'd never touched JavaScript before but thanks to Northcoders I've
					used it every day since January!"
						className='devicon-javascript-plain'
					></i>

					<i
						data-tooltip-id='nodejs-tooltip'
						data-tooltip-content="This JavaScript RTE is another Northcoder's essential."
						className='devicon-nodejs-plain-wordmark'
					/>

					<i
						data-tooltip-id='npm-tooltip'
						data-tooltip-content='My favourite package manager. Other package managers exist but in my experience, NPM stands for No Problem Mate.'
						className='devicon-npm-original-wordmark'
					></i>
					<i
						data-tooltip-id='jest-tooltip'
						data-tooltip-content='Jest puts the T in TDD. Love me some green ticks.'
						className='devicon-jest-plain'
					></i>
					<PhaserLogo
						data-tooltip-id='phaser-tooltip'
						data-tooltip-content="Phaser is amazing for Game Dev in JS. Nothing else comes close. I can't recommend it enough"
						className='tech-icon phaser-logo'
					/>
					<i
						data-tooltip-id='react-tooltip'
						data-tooltip-html="<em>State</em> of the art UI elements with React. See what I did there? I used it to make the tooltip you're reading right now! Plus other things, obviously. Like my NC News app."
						className='devicon-react-original'
					/>
					<i className='devicon-reactrouter-plain'></i>
					<i className='devicon-postgresql-plain'></i>
					<i className='devicon-axios-plain'></i>
					<i className='devicon-css3-plain'></i>
					<i className='devicon-github-original'></i>
					<i className='devicon-lodash-plain'></i>
					<i className='devicon-vite-original'></i>
					<i className='devicon-supabase-plain'></i>
					<i className='devicon-vscode-plain'></i>
					<div className='grid-divider' />
					<i className='devicon-photoshop-plain'></i>
					<i className='devicon-premierepro-plain'></i>
					<ReasonLogo className='tech-icon' />
					<AudacityLogo className='tech-icon audacity-icon' />
					<ToonBoomLogo className='tech-icon' />
					<TiledLogo className='tech-icon' />
					<FigmaLogo className='tech-icon' />
					<TrelloLogo className='tech-icon' />
					<DiscordLogo className='tech-icon' />
					<i className='devicon-slack-plain'></i>
					<i className='devicon-msdos-line'></i>
					<i className='devicon-windows8-original'></i>
					<i className='devicon-apple-original'></i>
					<i className='devicon-raspberrypi-plain'></i>
				</div>
			</div>
			<div
				ref={(el) => (panelsRef.current[3] = el)}
				className={`panel ${activeIndex === 3 ? 'in-view' : ''}`}
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
					Now I'm finally returning to code thanks to a 13-week bootcamp at{' '}
					<a
						href='https://northcoders.com/'
						target='_blank'
						rel='noopener noreferrer'
					>
						Northcoders
					</a>
					. I find myself particularly passionate about games <i>and</i> being
					able to pay the bills, so please click below to stop me from playing
					games so much and discuss employing me.
				</p>
				<button>This is a button</button>
			</div>
			<Tooltip
				id='javascript-tooltip'
				className='custom-tooltip'
				renderInPortal={true}
			/>

			<Tooltip
				id='nodejs-tooltip'
				className='custom-tooltip'
				renderInPortal={true}
			/>
			<Tooltip
				id='npm-tooltip'
				className='custom-tooltip'
				renderInPortal={true}
			/>
			<Tooltip
				id='jest-tooltip'
				className='custom-tooltip'
				renderInPortal={true}
			/>
			<Tooltip
				id='phaser-tooltip'
				className='custom-tooltip'
				renderInPortal={true}
			/>
			<Tooltip id='react-tooltip' className='custom-tooltip' />
		</div>
	);
}

export default Homepage;
