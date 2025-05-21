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

import React, { useRef, useEffect } from 'react';
import './homepage.css';
import PhaserLogo from '/assets/logos/phaser-logo.svg?react';
import AudacityLogo from '/assets/logos/audacity-logo.svg?react';
import ReasonLogo from '/assets/logos/reason-logo.svg?react';
import ToonBoomLogo from '/assets/logos/toonboom-logo.svg?react';
import TiledLogo from '/assets/logos/tiled-logo.svg?react';
import DiscordLogo from '/assets/logos/discord-logo.svg?react';
import FigmaLogo from '/assets/logos/figma-logo.svg?react';
import TrelloLogo from '/assets/logos/trello-logo.svg?react';

const CARD_GAP_VH = 3;
const FINAL_CARD_HEIGHT_VH = 85;
const EXTRA_SCROLL_BUFFER_VH = 20;

function App() {
	const scrollRef = useRef(null);
	const anchorsRef = useRef([]);

	const cards = [
		{
			title: '//welcome',
			borderColor: '#4dffca;',
			content: (
				<div
					className='header-panel glow-highlight'
					style={{ position: 'relative' }}
				>
					{/* <div className='vertical-glow-band' /> */}

					<div className='header-top'>
						<div className='header-text'>
							<h1 className='name-heading'>Chris Askew</h1>
							<div className='glow-bar' />
							<div
								className='image-and-stats'
								style={{ display: 'flex', alignItems: 'center' }}
							>
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

								<div className='stats-panel'>
									{/* <div>
										<span className='label'>*STATS*</span>
									</div> */}
									<br />
									<div>
										<span className='label'>LVL</span>
										<br /> 1 (New Game+)
									</div>
									<br />
									<div>
										<span className='label'>Class</span>
										<br /> Jnr Dev
									</div>
									<br />
									<div>
										<span className='label'>HP</span>
										<br /> 100 / 100
									</div>
									<br />
									<div>
										<span className='label'>XP</span>
										<br /> 49 /<span className='infinity-symbol'>∞</span>
									</div>
									<br />
									<div>
										<span className='label'>Feats</span>
										<br />
										Gaming, Green Ticks & Summoning Rubber Duck 🦆
									</div>
								</div>
							</div>

							<div className='glow-bar' />
							<div className='career-section'>
								<h2 className='section-title'>
									Junior Software
									<br />& Game Dev
								</h2>

								<p className='career-subtext'>
									At 49 it feels weird calling myself a Junior <i>anything</i>,
									but here we are.
								</p>
							</div>
							<div class='scroll-hint delayed-hint'>
								<div class='scroll-text'>GO!</div>
								<div class='scroll-arrow'>▽</div>
							</div>
						</div>
					</div>
				</div>
			),
		},

		{
			title: '//skillset',
			borderColor: '#f694ff',
			content: (
				<>
					<div className='career-section'>
						<h3 style={{ color: '#a277ff' }}>softSkills =</h3>
						<br />
						<div className='skills-list'>
							<h3 style={{ color: '#a277ff' }}>{'{'}</h3>
							<div className='skills-indent'>
								<h3>{'JavaScript,'}</h3>
								<h3>{'Full Stack,'}</h3>
								<h3>{'Phaser,'}</h3>
								<h3>Test Driven Development,</h3>
							</div>
							<h3 style={{ color: '#a277ff' }}>{'},'}</h3>
							<p></p>

							<h3 style={{ color: '#a277ff' }}>{'{'}</h3>
							<div className='skills-indent'>
								<h3>{'Pair Programming,'}</h3>
								<h3>{'SCRUM Methodologies,'}</h3>
								<h3>{'Problem Solving,'}</h3>
								<h3>{'Collaboration,'}</h3>
								<h3>{'Adaptability,'}</h3>
								<h3>{'Active Listening,'}</h3>
								<h3>{'Empathy,'}</h3>
								<h3>{'Mentorship,'}</h3>
								<h3>{'Initiative,'}</h3>
								<h3>{'Resilience,'}</h3>
								<h3>{'Taking Set Pieces'}</h3>
								<h3>{'& Vibe Coding '}</h3>
								<h3>
									<div className='whisper-text'>
										<i>//whisper_it</i>
									</div>
								</h3>
							</div>
							<h3 style={{ color: '#a277ff' }}>{'}'}</h3>
							<br />
							<h3 style={{ color: '#a277ff' }}>
								softSkills<span className='plus-glow'>++</span>
							</h3>
						</div>
					</div>
				</>
			),
		},
		{
			title: '//toolbox',
			borderColor: '#82e2ff',
			content: (
				<>
					<div className='icon-grid'>
						<i
							data-tooltip-id='javascript-tooltip'
							data-tooltip-content="I'd never touched JavaScript before but thanks to Northcoders I've used it every day since January!"
							className='devicon-javascript-plain'
						></i>
						<i
							data-tooltip-id='nodejs-tooltip'
							data-tooltip-content="This JavaScript RTE is another Northcoder's essential."
							className='devicon-nodejs-plain-wordmark'
						></i>
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
							data-tooltip-html='<em>State</em> of the art UI elements with React. See what I did there?'
							className='devicon-react-original'
						></i>
						<i className='devicon-reactrouter-plain'></i>
						<i className='devicon-postgresql-plain'></i>
						<i className='devicon-axios-plain'></i>
						<i className='devicon-css3-plain'></i>
						<i className='devicon-github-original'></i>
						<i className='devicon-lodash-plain'></i>
						<i className='devicon-vite-original'></i>
						<i className='devicon-supabase-plain'></i>
						<i className='devicon-vscode-plain'></i>
						<div className='glow-bar'></div>
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
				</>
			),
		},
		{ title: '//projects', borderColor: '#4dffca' },
		{
			title: '//about me then',
			borderColor: '#a277ff',
			content: (
				<div className='aboutMe'>
					<p>
						For the last 20 years I provided{' '}
						<span className='glow-highlight blue'>tech support</span> to a
						flourishing Animation & Design BA(Hons) Degree programme in the UK.
						Aside from the day to day{' '}
						<span className='glow-highlight pink'>problem solving</span> and
						session prep, I loved offering{' '}
						<span className='glow-highlight blue'>critical feedback</span>,{' '}
						<span className='glow-highlight pink'>technical mentorship</span>{' '}
						and <span className='glow-highlight blue'>pastoral care</span> to
						the students - often{' '}
						<span className='glow-highlight pink'>supporting colleagues</span>{' '}
						in adjacent creative disciplines like Film/TV & Graphic Design - and
						even supplying{' '}
						<span className='glow-highlight blue'>voice acting</span> for
						student films.
						<br />
						<br />
						Some of my former students have gone on to win BAFTAs for their work
						and I'm immensely proud to have beem even a tiny part of their{' '}
						<span className='glow-highlight blue'>journey</span>.
						<br />
						<br />
						Owing to rampant financial insecurity in Higher Education, I've
						found myself out of work for the first time since I was a teenager.
						However, I've grasped the opportunity to pivot towards a{' '}
						<span className='glow-highlight blue'>new challenge</span> in
						Software Dev, which is something I always wanted to do when I was
						younger.
					</p>
				</div>
			),
		},
		{
			title: '//about me now',
			borderColor: '#a277ff',
			content: (
				<p>
					As you can see from the toolbox card, I'm{' '}
					<span className='glow-highlight blue'>comfortable</span> with a wide
					range of various <span className='glow-highlight pink'>tech</span>,
					both new & old and I relish nothing more than having a{' '}
					<span className='glow-highlight blue'>tinker</span> with stuff. My
					partner often mocks me when I fire up a game on my PC only to fiddle
					with the settings for ages rather than just play the game.
					<br />
					<br />
					Thanks to an intense 13-week JavaScript bootcamp at{' '}
					<a
						href='https://northcoders.com/'
						target='_blank'
						rel='noopener noreferrer'
					>
						Northcoders
					</a>
					, I can now <span className='glow-highlight pink'>create</span> React
					driven <span className='glow-highlight pink'>websites</span> styled
					with CSS like this one, work with both{' '}
					<span className='glow-highlight pink'>backend & frontend</span>{' '}
					projects like NC News and even have the{' '}
					<span className='glow-highlight blue'>confidence</span> to dive into a
					library like <span className='glow-highlight pink'>Phaser</span> and
					have fun making games again, like I did in my youth. This is great,
					because <span className='glow-highlight blue'>I love games</span>.
					<br />
					<br />I thrive on hands-on problem solving and experimentation. I
					always ready to roll up my sleeves & have a go and I'm excited to get
					stuck in to your next project.
				</p>
			),
		},

		{ title: '//contact', borderColor: '#4dffca' },
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

	useEffect(() => {
		const wrapper = scrollRef.current;
		if (!wrapper) return;

		let timeoutId = null;
		let lastStickyCard = null;
		let lastScrollTop = wrapper.scrollTop;

		const onScrollLock = () => {
			const scrollY = wrapper.scrollTop;

			for (let i = 0; i < anchorsRef.current.length; i++) {
				const anchor = anchorsRef.current[i];
				if (!anchor) continue;

				const anchorTop = anchor.offsetTop;
				const anchorBottom = anchorTop + wrapper.offsetHeight;

				if (scrollY >= anchorTop && scrollY < anchorBottom) {
					if (lastStickyCard !== i) {
						lastStickyCard = i;

						//prevent juddering
						wrapper.scrollTop = anchorTop;

						//then lock scrolling
						wrapper.style.overflowY = 'hidden';

						clearTimeout(timeoutId);
						timeoutId = setTimeout(() => {
							wrapper.style.overflowY = 'auto';
						}, 700);
					}
					break;
				}
			}
		};

		wrapper.addEventListener('scroll', onScrollLock);
		return () => {
			wrapper.removeEventListener('scroll', onScrollLock);
			clearTimeout(timeoutId);
		};
	}, []);

	return (
		<div className='scroll-container' ref={scrollRef}>
			<div className='scroll-lock-wrapper'>
				<div
					className='page'
					style={{
						minHeight: `${totalStickySpace}vh`,
					}}
				>
					{cards.map((card, index) => {
						const isLast = index === cards.length - 1;
						const topOffset = `${index * CARD_GAP_VH}vh`;
						const cardHeight =
							index === cards.length - 1
								? `${FINAL_CARD_HEIGHT_VH}vh`
								: index === 5 // or whatever index card-4 is
								? '80vh' // slightly shorter
								: '95vh';

						return (
							<React.Fragment key={index}>
								<div
									ref={(el) => (anchorsRef.current[index] = el)}
									className='card-anchor'
								/>
								<div
									className={`card card-${index}`}
									style={{
										backgroundColor: card.bg,
										zIndex: index + 1,
										top: topOffset,
										minHeight: cardHeight,
										maxHeight: cardHeight,
										position: 'sticky',
									}}
								>
									<div className='card-inner-clip'>
										<div
											className='card-inner'
											style={{
												// borderTop: `6px solid ${card.borderColor}`,
												maxHeight: '100%',
												overflowY: 'auto',
											}}
										>
											{/* {index !== 0 && ( */}
											<div
												className='card-peek'
												onClick={() => scrollToCard(index)}
											>
												{card.title}
											</div>
											{/* )} */}
											{card.content ? (
												card.content
											) : (
												<>
													<h2>{card.title}</h2>
													<p>This is {card.title} content.</p>
												</>
											)}
										</div>
									</div>
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
							zIndex: -2,
						}}
					/>
				</div>
				<div className='final-glow-blocker' />
			</div>
		</div>
	);
}

export default App;
