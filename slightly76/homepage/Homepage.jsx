// import React, { useEffect, useRef, useState, useMemo } from 'react';
// import { Tooltip } from 'react-tooltip';
// import 'react-tooltip/dist/react-tooltip.css';
// import './homepage.css';
// import { motion } from 'framer-motion';
// import PhaserLogo from '/assets/logos/phaser-logo.svg?react';
// import AudacityLogo from '/assets/logos/audacity-logo.svg?react';
// import ReasonLogo from '/assets/logos/reason-logo.svg?react';
// import ToonBoomLogo from '/assets/logos/toonboom-logo.svg?react';
// import TiledLogo from '/assets/logos/tiled-logo.svg?react';
// import DiscordLogo from '/assets/logos/discord-logo.svg?react';
// import FigmaLogo from '/assets/logos/figma-logo.svg?react';
// import TrelloLogo from '/assets/logos/trello-logo.svg?react';

// function Homepage() {
// 	const panelsRef = useRef([]);
// 	const observerRefs = useRef([]);
// 	const [scrollY, setScrollY] = useState(0);

// 	useEffect(() => {
// 		const handleScroll = () => {
// 			setScrollY(window.scrollY);
// 		};

// 		window.addEventListener('scroll', handleScroll);
// 		return () => window.removeEventListener('scroll', handleScroll);
// 	}, []);

// 	//define motion animation
// 	const motionPanelProps = {
// 		initial: { y: 100, opacity: 0 },
// 		whileInView: { y: 0, opacity: 1 },
// 		transition: { duration: 0.6, ease: 'easeOut' },
// 		viewport: { once: false, amount: 0.5 },
// 	};

// 	//break panels into smaller chunks
// 	const panels = [
// 		{
// 			title: '//welcome',
// 			chunks: [
// 				<div className='header-panel'>
// 					<div className='header-top'>
// 						<div className='image-wrapper'>
// 							<img
// 								src='./assets/me.jpg'
// 								className='hover-image base'
// 								alt='Me'
// 							/>
// 							<img
// 								src='./assets/mehover.jpg'
// 								className='hover-image hover'
// 								alt='Me Hovering'
// 							/>
// 						</div>
// 						<div className='header-text'>
// 							<h1 className='name-heading'>Chris Askew</h1>
// 							<h2 className='accent'>Junior Software</h2>
// 							<h2 className='accent'>& Game Dev</h2>
// 						</div>
// 					</div>
// 					<div className='header-slug'>
// 						<p>
// 							At 49 it feels weird calling myself a Junior <i>anything</i>, but
// 							here we are.
// 						</p>
// 					</div>
// 				</div>,
// 			],
// 		},
// 		{
// 			title: '//skillset',
// 			chunks: [
// 				<>
// 					<h3>let codingSkillset =</h3>
// 					<div className='skills-list'>
// 						<h3>{'{'}</h3>
// 						<h3>{'JavaScript,'}</h3>
// 						<h3>{'Full Stack,'}</h3>
// 						<h3>{'Phaser,'}</h3>
// 						<h3>{'}'}</h3>
// 						<p></p>
// 						<h3>{'{'}</h3>
// 						<h3>Test Driven Development,</h3>
// 						<h3>{'Pair Programming,'}</h3>
// 						<h3>{'SCRUM Methodologies,'}</h3>
// 						<h3>{'Vibe Coding '}</h3>
// 						<h3>
// 							<i>//whisper it</i>
// 						</h3>
// 						<h3>{'}'}</h3>
// 					</div>
// 				</>,
// 			],
// 		},
// 		{
// 			title: '//toolbox',
// 			chunks: [
// 				<>
// 					<h3>Tinkering Toolbox</h3>
// 					<div className='icon-grid'>
// 						<i
// 							data-tooltip-id='javascript-tooltip'
// 							data-tooltip-content="I'd never touched JavaScript before but thanks to Northcoders I've used it every day since January!"
// 							className='devicon-javascript-plain'
// 						></i>
// 						<i
// 							data-tooltip-id='nodejs-tooltip'
// 							data-tooltip-content="This JavaScript RTE is another Northcoder's essential."
// 							className='devicon-nodejs-plain-wordmark'
// 						></i>
// 						<i
// 							data-tooltip-id='npm-tooltip'
// 							data-tooltip-content='My favourite package manager. Other package managers exist but in my experience, NPM stands for No Problem Mate.'
// 							className='devicon-npm-original-wordmark'
// 						></i>
// 						<i
// 							data-tooltip-id='jest-tooltip'
// 							data-tooltip-content='Jest puts the T in TDD. Love me some green ticks.'
// 							className='devicon-jest-plain'
// 						></i>
// 						<PhaserLogo
// 							data-tooltip-id='phaser-tooltip'
// 							data-tooltip-content="Phaser is amazing for Game Dev in JS. Nothing else comes close. I can't recommend it enough"
// 							className='tech-icon phaser-logo'
// 						/>
// 						<i
// 							data-tooltip-id='react-tooltip'
// 							data-tooltip-html='<em>State</em> of the art UI elements with React. See what I did there?'
// 							className='devicon-react-original'
// 						></i>
// 						<i className='devicon-reactrouter-plain'></i>
// 						<i className='devicon-postgresql-plain'></i>
// 						<i className='devicon-axios-plain'></i>
// 						<i className='devicon-css3-plain'></i>
// 						<i className='devicon-github-original'></i>
// 						<i className='devicon-lodash-plain'></i>
// 						<i className='devicon-vite-original'></i>
// 						<i className='devicon-supabase-plain'></i>
// 						<i className='devicon-vscode-plain'></i>
// 						<div className='grid-divider' />
// 						<i className='devicon-photoshop-plain'></i>
// 						<i className='devicon-premierepro-plain'></i>
// 						<ReasonLogo className='tech-icon' />
// 						<AudacityLogo className='tech-icon audacity-icon' />
// 						<ToonBoomLogo className='tech-icon' />
// 						<TiledLogo className='tech-icon' />
// 						<FigmaLogo className='tech-icon' />
// 						<TrelloLogo className='tech-icon' />
// 						<DiscordLogo className='tech-icon' />
// 						<i className='devicon-slack-plain'></i>
// 						<i className='devicon-msdos-line'></i>
// 						<i className='devicon-windows8-original'></i>
// 						<i className='devicon-apple-original'></i>
// 						<i className='devicon-raspberrypi-plain'></i>
// 					</div>
// 				</>,
// 			],
// 		},
// 		{
// 			title: '//about',
// 			chunks: [
// 				<p className='muted'>
// 					//about_me
// 					<br />
// 					<br />
// 					Faced with redundancy, I've grasped the opportunity to pivot towards
// 					Software Dev after 20 years of experience providing tech support to an
// 					Animation & Design BA(Hons) Degree programme in the UK.
// 				</p>,
// 				<p>
// 					I loved providing pastoral care to the students, doing voice acting
// 					for student films, and supporting creative disciplines like Film/TV
// 					and Graphic Design.
// 				</p>,
// 				<p>
// 					Now I'm finally returning to code thanks to a 13-week bootcamp at{' '}
// 					<a
// 						href='https://northcoders.com/'
// 						target='_blank'
// 						rel='noopener noreferrer'
// 					>
// 						Northcoders
// 					</a>
// 					. I find myself particularly passionate about games <i>and</i> being
// 					able to pay the bills.
// 				</p>,
// 				<button>This is a button</button>,
// 			],
// 		},
// 	];

// 	//flatten all chunks into stackable cards
// 	const stackedPanels = useMemo(() => {
// 		const cards = [];
// 		panels.forEach((panel) => {
// 			panel.chunks.forEach((chunk, idx) => {
// 				cards.push({
// 					key: `${panel.title}-${idx}`,
// 					content: chunk,
// 					title: panel.title,
// 				});
// 			});
// 		});
// 		return cards;
// 	}, [panels]);

// 	//intersection Observer (optional — used for state tracking, can be removed)
// 	useEffect(() => {
// 		const observers = [];

// 		observerRefs.current.forEach((el, index) => {
// 			if (!el) return;
// 			const observer = new IntersectionObserver(([entry]) => {}, {
// 				threshold: [0.5],
// 				rootMargin: '-20% 0px -60% 0px',
// 			});
// 			observer.observe(el);
// 			observers.push(observer);
// 		});

// 		return () => {
// 			observers.forEach((observer) => observer.disconnect());
// 		};
// 	}, []);

// 	return (
// 		<div className='homepage'>
// 			{stackedPanels.map((card, i) => (
// 				<div key={card.key} className='panel-wrapper'>
// 					<div
// 						ref={(el) => (observerRefs.current[i] = el)}
// 						className='panel-anchor'
// 					/>
// 					<motion.div
// 						ref={(el) => (panelsRef.current[i] = el)}
// 						className='panel'
// 						style={{
// 							zIndex: stackedPanels.length - i,
// 							position: 'sticky',
// 							top: 0,
// 						}}
// 						{...motionPanelProps}
// 					>
// 						<div className='panel-inner'>{card.content}</div>
// 					</motion.div>
// 				</div>
// 			))}

// 			<Tooltip
// 				id='javascript-tooltip'
// 				className='custom-tooltip'
// 				renderInPortal={true}
// 			/>
// 			<Tooltip
// 				id='nodejs-tooltip'
// 				className='custom-tooltip'
// 				renderInPortal={true}
// 			/>
// 			<Tooltip
// 				id='npm-tooltip'
// 				className='custom-tooltip'
// 				renderInPortal={true}
// 			/>
// 			<Tooltip
// 				id='jest-tooltip'
// 				className='custom-tooltip'
// 				renderInPortal={true}
// 			/>
// 			<Tooltip
// 				id='phaser-tooltip'
// 				className='custom-tooltip'
// 				renderInPortal={true}
// 			/>
// 			<Tooltip id='react-tooltip' className='custom-tooltip' />
// 		</div>
// 	);
// }

// export default Homepage;

import React, { useRef } from 'react';
import './homepage.css';

const CARD_GAP_VH = 3;
const FINAL_CARD_HEIGHT_VH = 85;
const EXTRA_SCROLL_BUFFER_VH = 5;

function App() {
	const scrollRef = useRef(null);
	const anchorsRef = useRef([]);

	const cards = [
		{
			title: '//welcome',
			content: (
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
			),
		},

		{ title: 'Card 2', bg: '#f694ff' },
		{ title: 'Card 3', bg: '#a277ff' },
		{ title: 'Card 4', bg: '#ffd166' },
		{ title: 'Card 5', bg: '#f14166' },
		{ title: 'Card 6', bg: '#06d6a0' },
	];

	const totalStickySpace =
		(cards.length - 1) * CARD_GAP_VH +
		FINAL_CARD_HEIGHT_VH +
		EXTRA_SCROLL_BUFFER_VH;

	const scrollToCard = (index) => {
		if (!scrollRef.current || !anchorsRef.current[index]) return;

		const targetOffset = anchorsRef.current[index].offsetTop;

		scrollRef.current.scrollTo({
			top: targetOffset,
			behavior: 'smooth',
		});
	};

	return (
		<div className='scroll-lock-wrapper' ref={scrollRef}>
			<div
				className='page'
				style={{
					minHeight: `${totalStickySpace}vh`,
				}}
			>
				{cards.map((card, index) => {
					const isLast = index === cards.length - 1;
					const topOffset = `${index * CARD_GAP_VH}vh`;
					const cardHeight = isLast ? `${FINAL_CARD_HEIGHT_VH}vh` : '95vh';

					return (
						<React.Fragment key={index}>
							<div
								ref={(el) => (anchorsRef.current[index] = el)}
								className='card-anchor'
							/>
							<div
								className='card'
								style={{
									backgroundColor: card.bg,
									zIndex: index + 1,
									top: topOffset,
									minHeight: cardHeight,
									maxHeight: cardHeight,
									position: 'sticky',
								}}
							>
								{index !== 0 && (
									<div
										className='card-peek'
										onClick={() => scrollToCard(index)}
									>
										⬇️ Go to {card.title}
									</div>
								)}
								{card.content ? (
									card.content
								) : (
									<>
										<h2>{card.title}</h2>
										<p>This is {card.title} content.</p>
									</>
								)}
							</div>
						</React.Fragment>
					);
				})}

				{/* Phantom scroll buffer */}
				<div
					style={{
						height: '900vh',
						visibility: 'hidden',
						pointerEvents: 'none',
					}}
				/>
			</div>
		</div>
	);
}

export default App;
