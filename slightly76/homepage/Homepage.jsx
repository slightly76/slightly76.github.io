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
import './homepage.css';
import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
import { Tooltip } from 'react-tooltip';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion, useMotionValue, animate } from 'framer-motion';
import PhaserLogo from '/assets/logos/phaser-logo.svg?react';
import AudacityLogo from '/assets/logos/audacity-logo.svg?react';
import ReasonLogo from '/assets/logos/reason-logo.svg?react';
import ToonBoomLogo from '/assets/logos/toonboom-logo.svg?react';
import TiledLogo from '/assets/logos/tiled-logo.svg?react';
import DiscordLogo from '/assets/logos/discord-logo.svg?react';
import FigmaLogo from '/assets/logos/figma-logo.svg?react';
import TrelloLogo from '/assets/logos/trello-logo.svg?react';
import SteamLogo from '/assets/logos/steam-logo.svg?react';
import { HiOutlineMailOpen } from 'react-icons/hi';

const CARD_WIDTH = 300 + 32;
const DUPLICATION_FACTOR = 16;

const InfiniteCarousel = ({ projects, isActive, videoRefs }) => {
	const totalCards = projects.length;
	const duplicatedProjects = Array(DUPLICATION_FACTOR).fill(projects).flat();
	const startIndex = totalCards;
	const trackRef = useRef(null);
	const cardRef = useRef(null);

	const [cardWidth, setCardWidth] = useState(CARD_WIDTH);
	const [index, setIndex] = useState(startIndex);
	const x = useMotionValue(0);

	// Flag to skip animation on first mount
	const hasMounted = useRef(false);

	const scrollToIndex = (newIndex, animateScroll = true) => {
		const container = trackRef.current?.parentElement;
		if (!container) return;

		const containerWidth = container.offsetWidth;
		const ALIGN_NUDGE = 16;

		const offset =
			-cardWidth * newIndex +
			(containerWidth / 2 - cardWidth / 2) +
			ALIGN_NUDGE;

		if (animateScroll) {
			animate(x, offset, { type: 'spring', stiffness: 250, damping: 30 });
		} else {
			x.set(offset); // skip animation
		}
		setIndex(newIndex);
	};

	const scrollLeft = () => scrollToIndex(index - 1);
	const scrollRight = () => scrollToIndex(index + 1);

	useLayoutEffect(() => {
		if (!trackRef.current || !cardRef.current) return;

		const gap = parseFloat(getComputedStyle(trackRef.current).gap) || 0;
		const width = cardRef.current.offsetWidth;
		const fullCardWidth = width + gap;
		setCardWidth(fullCardWidth);

		const container = trackRef.current.parentElement;
		const containerWidth = container?.offsetWidth || window.innerWidth;
		const resetIndex = totalCards * Math.floor(DUPLICATION_FACTOR / 2);
		const initialOffset =
			-fullCardWidth * resetIndex + (containerWidth / 2 - fullCardWidth / 2);

		// Set position without animation on first mount
		x.set(initialOffset);
		setIndex(resetIndex);
		hasMounted.current = true;
	}, []);

	useEffect(() => {
		if (!hasMounted.current) return;

		const resetIndex = totalCards * Math.floor(DUPLICATION_FACTOR / 2);
		const modIndex = index % totalCards;

		if (index <= totalCards || index >= totalCards * (DUPLICATION_FACTOR - 1)) {
			const container = trackRef.current?.parentElement;
			const containerWidth = container?.offsetWidth || window.innerWidth;
			const resetOffset =
				-cardWidth * (resetIndex + modIndex) +
				(containerWidth / 2 - cardWidth / 2);

			const timer = setTimeout(() => {
				x.set(resetOffset);
				setIndex(resetIndex + modIndex);
			}, 300);

			return () => clearTimeout(timer);
		}
	}, [index, x, totalCards]);

	useEffect(() => {
		if (!hasMounted.current) return;

		videoRefs.current.forEach((video, i) => {
			if (!video) return;

			// Only allow video on the currently focused project
			if (i % totalCards !== index % totalCards && !video.paused) {
				video.pause();
			}
		});
	}, [index]);

	return (
		<div className='carousel-vertical-wrapper'>
			<div className='carousel-container'>
				<motion.div
					className='carousel-track'
					ref={trackRef}
					style={{
						display: 'flex',
						gap: '2rem',
						x,
					}}
				>
					{duplicatedProjects.map((project, i) => {
						const isFocused = i === index;

						return (
							<motion.div
								key={i}
								ref={i === startIndex ? cardRef : null}
								className={`project-card ${isFocused ? 'focused' : ''}`}
								initial={{ scale: 0.9, opacity: 0.7 }}
								// whileInView={{ scale: 1, opacity: 1 }}
								// viewport={{ amount: 0.5 }}
								animate={{
									scale: isFocused ? 1 : 0.9,
									opacity: isFocused ? 1 : 0.7,
								}}
								transition={{ type: 'spring', stiffness: 300, damping: 30 }}
								style={{ flex: '0 0 auto', width: '300px' }}
							>
								<div className='project-block'>
									<h3 className='project-title glow-highlight pink'>
										<a
											href={project.livelink}
											target='_blank'
											rel='noopener noreferrer'
										>
											{project.title}
										</a>
									</h3>

									{project.video && (
										<figure className='project-video-figure'>
											<video
												ref={(el) => (videoRefs.current[i] = el)}
												className='project-media'
												controls
												playsInline
												preload='metadata'
												poster={project.image || undefined}
											>
												<source src={project.video} type='video/mp4' />
												Your browser does not support the video tag.
											</video>
											{project.videoText && (
												<figcaption className='video-caption'>
													{project.videoText}
												</figcaption>
											)}
										</figure>
									)}

									<p className='project-desc'>{project.description}</p>

									<div className='project-links'></div>

									<p className='project-tech'>
										<i
											className='devicon-github-original github-icon'
											title='View on GitHub'
											onClick={(e) => {
												e.stopPropagation();
												window.open(
													project.githublink,
													'_blank',
													'noopener,noreferrer'
												);
											}}
										></i>
										<br />
										Built with: {project.tech.join(', ')}
									</p>
								</div>
							</motion.div>
						);
					})}
				</motion.div>
			</div>

			<div className='carousel-button-row'>
				<button className='carousel-btn' onClick={scrollLeft}>
					<FaArrowLeft />
				</button>
				<button className='carousel-btn' onClick={scrollRight}>
					<FaArrowRight />
				</button>
			</div>
		</div>
	);
};

function useTypewriter(lines, delay = 50, linePause = 700) {
	const [displayedText, setDisplayedText] = useState('');
	const [currentLine, setCurrentLine] = useState(0);
	const [currentChar, setCurrentChar] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [deleteCount, setDeleteCount] = useState(0);
	const [buffer, setBuffer] = useState('');
	const [pauseBeforeDelete, setPauseBeforeDelete] = useState(false);

	useEffect(() => {
		if (currentLine >= lines.length) return;

		const fullLine = lines[currentLine];

		if (pauseBeforeDelete) {
			const pause = setTimeout(() => {
				setPauseBeforeDelete(false);
				setIsDeleting(true);
			}, 500); // Pause before correction starts (ms)
			return () => clearTimeout(pause);
		}

		if (isDeleting) {
			if (deleteCount > 0) {
				const timeout = setTimeout(() => {
					setBuffer((prev) => prev.slice(0, -1));
					setDeleteCount(deleteCount - 1);
				}, delay * 3);
				return () => clearTimeout(timeout);
			} else {
				setIsDeleting(false);
			}
		}

		if (currentChar < fullLine.length) {
			const nextChar = fullLine[currentChar];

			if (nextChar === '[' && fullLine.slice(currentChar).match(/^\[<-\d+\]/)) {
				const match = fullLine.slice(currentChar).match(/^\[<-(\d+)\]/);
				if (match) {
					const count = parseInt(match[1], 10);
					setPauseBeforeDelete(true); // <-- trigger the pause
					setDeleteCount(count);
					setCurrentChar(currentChar + match[0].length);
				}
			} else {
				const timeout = setTimeout(() => {
					setBuffer((prev) => prev + nextChar);
					setCurrentChar(currentChar + 1);
				}, delay);
				return () => clearTimeout(timeout);
			}
		} else {
			const timeout = setTimeout(() => {
				setDisplayedText((prev) => prev + buffer + '\n');
				setCurrentLine((prev) => prev + 1);
				setCurrentChar(0);
				setBuffer('');
			}, linePause);
			return () => clearTimeout(timeout);
		}
	}, [
		lines,
		currentLine,
		currentChar,
		delay,
		linePause,
		isDeleting,
		deleteCount,
		pauseBeforeDelete,
	]);

	return displayedText + buffer;
}

const terminalLines = [
	'> load REBOOT_CAREER.EXE',
	'Please wait.',
	'.',
	'input role:',
	'> Junior Softwrae & Game D[<-12]are & Game Dev',
	'Loading.',
	'.',
	'.',
	'Warning: At 49 it feels weird calling yourself a Junior *anything*, but here you are ...',
];

const CARD_GAP_VH = 3;
const FINAL_CARD_HEIGHT_VH = 85;
const EXTRA_SCROLL_BUFFER_VH = 20;

function App() {
	const scrollRef = useRef(null);
	const anchorsRef = useRef([]);

	const videoRefs = useRef([]);

	const [hp, setHp] = useState(99);

	const output = useTypewriter(terminalLines, 55, 800);

	useEffect(() => {
		const interval = setInterval(() => {
			setHp((prevHp) => {
				let next = prevHp + (Math.random() > 0.5 ? 1 : -1);
				return Math.max(1, Math.min(99, next));
			});
		}, 250);

		return () => clearInterval(interval);
	}, []);

	const [activeCardIndex, setActiveCardIndex] = useState(null);

	const projects = [
		{
			title: 'StackDew Valley',
			video: '../assets/stackdew_trailer.mp4',
			videoText: 'StackDew Valley early trailer',
			description:
				"A 'cosy' pixel-art farming game where you nurture bootcamp students known as Devlings via mini-games then take them to battle in the fearsome job market! This is an evolving, group project that was made as part of the Northcoders bootcamp (and hence references Northcoders team members etc).",
			livelink: 'https://stackdew.netlify.app/',
			githublink: 'xxx',
			tech: ['Phaser', 'Firebase', 'Node', 'Tiled', 'GROUP PROJECT!'],
		},
		{
			title: 'NC News',
			description:
				"A full-stack Reddit-style article app with comments, votes, and user profiles. This project was part of the Northcoders bootcamp and was the first time we'd married frontend to backend. The site is slow to spin up sometimes and is undergoing a bit of a visual overhaul.",
			livelink: 'https://slightly76-does-nc-news.netlify.app/',
			githublink: 'https://github.com/slightly76/nc-news',
			tech: ['Express', 'PostgreSQL', 'Axiom', 'React', 'CSS'],
		},
		{
			title: 'Portfolio Website',
			description: 'This website wot I made.',
			livelink: 'https://github.com/slightly76',
			githublink: 'xxx',
			tech: [
				'HTML',
				'React',
				'React Router',
				'React Tooltip',
				'CSS',
				'Framer Motion',
			],
		},
	];

	const duplicatedProjects = [...projects, ...projects];

	const cards = [
		{
			title: '//welcome',
			borderColor: '#4dffca;',
			content: (
				<div
					className='header-panel glow-highlight'
					style={{ position: 'relative' }}
				>
					<div className='header-top'>
						<div className='header-text'>
							<h1 className='marquee-wrapper name-heading'>Chris Askew</h1>
							<div className='glow-bar' />
							<div className='image-and-stats'>
								<div className='crt-container'>
									<div className='crt-inner'>
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
									</div>
								</div>

								<div className='crt-container'>
									<div className='crt-inner'>
										<div className='stats-panel'>
											{/* <div>
										<span className='label'>*STATS*</span>
									</div> */}
											<br />
											<div>
												<span className='label'>LVL</span>
												<br /> 1 (New Career+)
											</div>
											<br />
											<div>
												<span className='label'>Class</span>
												<br /> Jnr Dev
											</div>
											<br />
											<div>
												<span className='label'>HP</span>
												<br /> {hp} / 100
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
												Gaming, Green Ticks & Summoning Rubber Ducks
												<a href='https://www.vecteezy.com/free-vector/rubber-duck'></a>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className='glow-bar' />

							<div className='crt-container terminal-crt'>
								<div className='crt-inner'>
									<pre className='terminal-output'>{output}</pre>
								</div>
							</div>
						</div>
					</div>
					<div className='scroll-hint delayed-hint'>
						<div className='scroll-text'>GO!</div>
						<div className='scroll-arrow'>▽</div>
					</div>
				</div>
			),
		},

		{
			title: '//skillSet',
			borderColor: '#f694ff',
			content: (
				<>
					<h2>//skillSet</h2>

					<div className='soft-skills-container'>
						<div className='code-line'>
							<span className='keyword'>let</span>{' '}
							<span className='comment'>softSkills</span> = {'{'}
						</div>
						<div className='skills-object'>
							<div className='skills-category'>
								<h4 className='category-label'>technical: [</h4>
								<ul className='skills-list'>
									<li>"JavaScript",</li>
									<li>"Full Stack",</li>
									<li>"Phaser",</li>
									<li>"Test Driven Development",</li>
									<li>"Problem Solving"</li>
									<h4 className='category-label'>] , [</h4>
								</ul>
							</div>
							<div className='skills-category'>
								<h4 className='category-label'>interpersonal:</h4>
								<ul className='skills-list'>
									<li>"Pair Programming",</li>
									<li>"SCRUM Methodologies",</li>
									<li>"Collaboration",</li>
									<li>"Adaptability",</li>
									<li>"Active Listening",</li>
									<li>
										"Attention to{' '}
										<span
											title='Keen eye there...'
											style={{
												cursor: 'help',
												pointerEvents: 'auto',
											}}
										>
											Derail"
										</span>
									</li>
									<li>"Mentorship",</li>
									<li>"Initiative",</li>
									<li>"Resilience",</li>

									<li className='whisper-skill'>
										"Vibe Coding"{' '}
										<span className='whisper-comment'>//whisper_it</span>
									</li>
									<h4 className='category-label'>]</h4>
									<span>{'}'}</span>
								</ul>
							</div>
						</div>
						<pre className='level-up-block'>
							<span className='keyword'>function</span>{' '}
							<span className='comment'>levelUp</span>(
							<span className='comment'>skill</span>,
							<span className='comment'> category</span>) {'{'}
							<br />
							<span className='keyword'>if</span> (!
							<span className='comment'>softSkills</span>[
							<span className='comment'>category</span>].includes(
							<span className='comment'>skill</span>)) {'{'}
							<br />
							<span className='comment'>softSkills</span>[
							<span className='comment'>category</span>].push(
							<span className='comment'>skill</span>);
							<br />
							{'}'}
							{'}'}
							<br />
							<br />
							<span className='comment'>levelUp</span>("
							<span className='string'>gainfulEmployment</span>", "
							<span className='string'>interpersonal</span>");
						</pre>
					</div>
				</>
			),
		},

		{
			title: '//techStack',
			borderColor: '#82e2ff',
			content: (
				<>
					<h2>//techStack</h2>
					<div className='icon-grid'>
						<i
							data-tooltip-id='javascript-tooltip'
							data-tooltip-content="I'd never touched JavaScript before but thanks to Northcoders I've used it literally every day since January!"
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
							data-tooltip-content="Phaser is amazing for Game Dev in JS. Nothing else comes close. I simply can't recommend it enough!"
							className='phaser-logo'
						/>
						<i
							data-tooltip-id='react-tooltip'
							data-tooltip-content='𝑺𝒕𝒂𝒕𝒆 of the art UI elements with React. See what I did there?'
							className='devicon-react-original'
						></i>
						<i
							data-tooltip-id='reactrouter-tooltip'
							data-tooltip-content='Routing and navigation in React. Used in NC News.'
							className='devicon-reactrouter-plain'
						></i>
						<i
							data-tooltip-id='postgresql-tooltip'
							data-tooltip-content='PostgreSQL relational database management system. Used in NC News.'
							className='devicon-postgresql-plain'
						></i>
						<i
							data-tooltip-id='axios-tooltip'
							data-tooltip-content="I 𝑝𝑟𝑜𝑚𝑖𝑠𝑒 I've used this to fetch data asynchronously. Used in NC News."
							className='devicon-axios-plain'
						></i>
						<i
							data-tooltip-id='css-tooltip'
							data-tooltip-content="Sheets that cascade with style? You're looking at one."
							className='devicon-css3-plain'
						></i>
						<i
							data-tooltip-id='github-tooltip'
							data-tooltip-content='Version control I can 𝑐𝑜𝑚𝑚𝑖𝑡 to.'
							className='devicon-github-original'
						></i>
						<i
							data-tooltip-id='lodash-tooltip'
							data-tooltip-content='Lodash to the rescue. Hip-Hip Array!'
							className='devicon-lodash-plain'
						></i>
						<i
							data-tooltip-id='vite-tooltip'
							data-tooltip-content="Isn't everyone 𝑑𝑒𝑝𝑒𝑛𝑑𝑒𝑛𝑡 on Vite? My go to bundle of joy."
							className='devicon-vite-original'
						></i>
						<i
							data-tooltip-id='supabase-tooltip'
							data-tooltip-content='Supabase open source database hosting. BaaS Queen! Used in NC News.'
							className='devicon-supabase-plain'
						></i>
						<i
							data-tooltip-id='vscode-tooltip'
							data-tooltip-content='VS Code puts the 𝑔𝑟𝑒𝑎𝑡 in Integrated Development Environment.'
							className='devicon-vscode-plain'
						></i>

						<div className='glow-bar'></div>

						<i
							data-tooltip-id='photoshop-tooltip'
							data-tooltip-content="The go-to image manipulation tool. Others imitate, but these guys charge. Being comfortable in PS means I'm also down to use Gimp, Pixlr, Aseprite, MSPaint, etc..."
							className='devicon-photoshop-plain'
						></i>
						<i
							data-tooltip-id='premiere-tooltip'
							data-tooltip-content='Ditto for video editing. Used it a lot over the last 20 years. Again, as a result I can also use Final Cut, DaVinci Resolve, even Avid if needed.'
							className='devicon-premierepro-plain'
						></i>
						<ReasonLogo
							data-tooltip-id='reason-tooltip'
							data-tooltip-content='Reason is a Digital Audio Workstation (think Photoshop for sound). Its amazing. A veritable noise playground.'
							className='tech-icon'
						/>
						<AudacityLogo
							data-tooltip-id='audacity-tooltip'
							data-tooltip-content="If Reason is Photoshop for Sound, then Audacity is MSPaint. Don't mock, it gets the job done."
							className='tech-icon audacity-icon'
						/>
						<ToonBoomLogo
							data-tooltip-id='toonboom-tooltip'
							data-tooltip-content="I supported ToonBoom Harmony in my previous job. Look no further for an 'Industry Standard' 2D animation package."
							className='tech-icon'
						/>
						<TiledLogo
							data-tooltip-id='tiled-tooltip'
							data-tooltip-content='Tiled is a great, FREE(!), open source level editor. We used it on StackDew Valley.'
							className='tech-icon'
						/>
						<FigmaLogo
							data-tooltip-id='figma-tooltip'
							data-tooltip-content='Figma is a collaborative UX/UI design tool. No puns here. Too risky ... 👀'
							className='tech-icon'
						/>
						<TrelloLogo
							data-tooltip-id='trello-tooltip'
							data-tooltip-content="Trello is a Kanban style collaborative project management tool. It must work because this website exists. If you don't know what Kanban is, I think they had a hit in '89 with 'I Beg Your Pardon'. The jokes are 𝑏𝑎𝑐𝑘, baby!"
							className='tech-icon'
						/>
						<DiscordLogo
							data-tooltip-id='discord-tooltip'
							data-tooltip-content='Communication is key and Discord has it on 𝑙𝑜𝑐𝑘.'
						/>
						<i
							data-tooltip-id='slack-tooltip'
							data-tooltip-content='Slack makes Teams look like Skype, which made GooglePlus look like mIRC'
							className='devicon-slack-plain'
						></i>
						<i
							data-tooltip-id='msdos-tooltip'
							data-tooltip-content='My familiarity with DOS makes terminal feel kinda cosy.'
							className='devicon-msdos-line'
						></i>
						<i
							data-tooltip-id='windows8-tooltip'
							data-tooltip-content="I've used every version of Windows from 3.1 to 11. Ten is best. Fight me."
							className='devicon-windows8-original'
						></i>
						<i
							data-tooltip-id='apple-tooltip'
							data-tooltip-content="I'm also familiar with Apple OS from a previous role and was once certified for OSX."
							className='devicon-apple-original'
						></i>
						<i
							data-tooltip-id='raspberrypi-tooltip'
							data-tooltip-content='I 𝑑𝑖𝑑 say I like to tinker.'
							className='devicon-raspberrypi-plain'
						></i>
					</div>
				</>
			),
		},
		{
			title: '//projects',
			borderColor: '#4dffca',
			content: (
				<>
					<h2 style={{ marginBottom: '2rem' }}>//currentProjects</h2>
					<InfiniteCarousel
						projects={projects}
						isActive={activeCardIndex === 3}
						videoRefs={videoRefs}
					/>
				</>
			),
		},

		{
			title: '//aboutMeThen',
			borderColor: '#a277ff',
			content: (
				<>
					<h2>//aboutMeThen</h2>
					<div className='aboutMe career-section' style={{ marginTop: '2rem' }}>
						<p>
							For the last 20 years I provided{' '}
							<span className='glow-highlight blue'>tech support</span> to a
							flourishing Animation & Design BA(Hons) Degree programme in the
							UK. Aside from the day to day{' '}
							<span className='glow-highlight pink'>problem solving</span> and
							session prep, I loved offering{' '}
							<span className='glow-highlight blue'>critical feedback</span>,{' '}
							<span className='glow-highlight pink'>technical mentorship</span>{' '}
							and <span className='glow-highlight blue'>pastoral care</span> to
							the students - often{' '}
							<span className='glow-highlight pink'>supporting colleagues</span>{' '}
							in adjacent creative disciplines like Film/TV & Graphic Design -
							and even supplying{' '}
							<span className='glow-highlight blue'>voice acting</span> for
							student films. I have a{' '}
							<span className='glow-highlight blue'>Media Production</span>{' '}
							degree myself, which helped.
							<br />
							<br />
							Some of my former students have gone on to win BAFTAs for their
							work and I'm immensely proud to have beem even a tiny part of
							their <span className='glow-highlight blue'>journey</span>.
							<br />
							<br />
							Owing to rampant financial insecurity in Higher Education, I've
							found myself out of work for the first time since I was a
							teenager. However, I've grasped the opportunity to pivot towards a{' '}
							<span className='glow-highlight blue'>new challenge</span> in
							<span className='glow-highlight pink'> Software Dev</span>, which
							is something I always wanted to do when I was younger.
						</p>
					</div>
				</>
			),
		},
		{
			title: '//aboutMeNow',
			borderColor: '#a277ff',
			content: (
				<>
					<h2>//aboutMeNow</h2>
					<div className='aboutMe career-section' style={{ marginTop: '2rem' }}>
						<p>
							As you can see from the toolbox card, I'm{' '}
							<span className='glow-highlight pink'>comfortable</span> with a
							wide range of various disciplines from{' '}
							<span className='glow-highlight blue'>animation</span>, to{' '}
							<span className='glow-highlight blue'>video editing</span>, to{' '}
							<span className='glow-highlight blue'> musical composition</span>{' '}
							and <span className='glow-highlight pink'>tech</span>, both old &
							new. I relish nothing more than having a{' '}
							<span className='glow-highlight pink'>tinker</span> with stuff. My
							partner often mocks me when I fire up a game on my PC only to
							fiddle with the settings for ages rather than just play the game.
							Don't get me started on modding ...
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
							, I can now{' '}
							<span className='glow-highlight pink'>
								create React driven websites
							</span>{' '}
							styled with <span className='glow-highlight pink'>CSS</span> like
							this one, work with both{' '}
							<span className='glow-highlight pink'>backend & frontend</span>{' '}
							projects like "NC News" and even have the{' '}
							<span className='glow-highlight pink'>confidence</span> to dive
							headfirst into a library like{' '}
							<span className='glow-highlight pink'>Phaser</span> and enjoy
							myself making games again, like I did in my youth. This is great,
							because; I love games. My Steam library is overflowing, I adore
							retro gaming and I have over 200 boardgames.{' '}
							<span className='glow-highlight blue'>I. Love. Games.</span>
							<br />
							<br />I thrive on{' '}
							<span className='glow-highlight pink'>hands-on</span> problem
							solving and experimentation. I'm always ready to roll up my
							sleeves & <span className='glow-highlight pink'>have a go</span>{' '}
							and I'm excited to
							<span className='glow-highlight pink'> get stuck in</span> to your
							next project.
						</p>
					</div>
				</>
			),
		},

		{
			title: '//contactMe',
			borderColor: '#4dffca',
			content: (
				<>
					<h2>//contactMe</h2>
					<div className='career-section' style={{ marginTop: '2rem' }}>
						<p>
							I'm <i>actively</i> seeking work and I'm open to junior roles,
							apprenticeships, contract work, and freelance opportunities. If
							you like what you see and you want to know more, or you just want
							to chastise me for the tech stack tooltip puns - feel free to get
							in touch;{' '}
						</p>
						<br />
						<a href='mailto:caskew@hotmail.com' className='contact-link'>
							<HiOutlineMailOpen className='contact-icon' />
							Email
						</a>
						<br />
						<a
							href='https://github.com/slightly76'
							target='_blank'
							rel='noopener noreferrer'
							className='contact-link'
						>
							<i className='devicon-github-original contact-icon'></i>
							GitHub
						</a>
						<br />
						<a
							href='https://www.linkedin.com/in/chris-askew-91812619a/'
							target='_blank'
							rel='noopener noreferrer'
							className='contact-link'
						>
							<i className='devicon-linkedin-plain contact-icon'></i>
							LinkedIn
						</a>
						<br />
						<a
							href='https://steamcommunity.com/id/slightly76/'
							target='_blank'
							rel='noopener noreferrer'
							className='contact-link'
						>
							<SteamLogo className='contact-icon' />
							Steam
						</a>
					</div>
				</>
			),
		},
	];

	let skipNextScrollLock = false;

	const totalStickySpace =
		(cards.length - 1) * CARD_GAP_VH +
		FINAL_CARD_HEIGHT_VH +
		EXTRA_SCROLL_BUFFER_VH;

	const scrollToCard = (index) => {
		if (!scrollRef.current || !anchorsRef.current[index]) return;

		const targetOffset = anchorsRef.current[index].offsetTop;
		skipNextScrollLock = true;

		scrollRef.current.scrollTo({
			top: targetOffset,
			behavior: 'smooth',
		});

		//re-enable scroll lock *after* smooth scroll finishes (around 600ms ish)
		setTimeout(() => {
			skipNextScrollLock = false;
		}, 700);
	};

	useEffect(() => {
		const wrapper = scrollRef.current;
		if (!wrapper) return;

		let timeoutId = null;
		let lastStickyCard = null;
		let lastScrollTop = wrapper.scrollTop;
		let scrollingUp = false;

		const onScrollLock = () => {
			if (skipNextScrollLock) return;

			const scrollY = wrapper.scrollTop;
			scrollingUp = scrollY < lastScrollTop;
			lastScrollTop = scrollY;

			for (let i = 0; i < anchorsRef.current.length; i++) {
				const anchor = anchorsRef.current[i];
				if (!anchor) continue;

				const anchorTop = anchor.offsetTop;
				const anchorBottom = anchorTop + wrapper.offsetHeight;

				if (scrollY >= anchorTop && scrollY < anchorBottom) {
					videoRefs.current.forEach((ref) => {
						if (ref && !ref.paused) ref.pause();
					});
					if (lastStickyCard !== i) {
						lastStickyCard = i;
						setActiveCardIndex(i);

						// Prevent judder
						wrapper.scrollTop = anchorTop;

						// Lock scroll
						wrapper.style.overflowY = 'hidden';
						clearTimeout(timeoutId);
						timeoutId = setTimeout(() => {
							wrapper.style.overflowY = 'auto';
						}, 700);

						const currentCard = document.querySelector(`.card-${i}`);

						// animation for scrolling back up
						if (currentCard && scrollingUp) {
							currentCard.classList.add('card-reveal-prep');

							setTimeout(() => {
								currentCard.classList.add('fade-in-up');

								setTimeout(() => {
									currentCard.classList.remove('fade-in-up');
									currentCard.classList.remove('card-reveal-prep');
									document.querySelectorAll('.card').forEach((el) => {
										el.style.visibility = 'visible';
									});
								}, 400);
							}, 50);
						}

						// animation for scrolling down
						if (currentCard && !scrollingUp) {
							currentCard.classList.add('card-settle-in');
							currentCard.classList.add('fade-in-up');

							setTimeout(() => {
								currentCard.classList.remove('fade-in-up');
								currentCard.classList.remove('card-settle-in');
							}, 500);
						}
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
			<Tooltip
				id='react-tooltip'
				className='custom-tooltip'
				renderInPortal={true}
			/>
			<Tooltip
				id='reactrouter-tooltip'
				className='custom-tooltip'
				renderInPortal={true}
			/>
			<Tooltip
				id='postgresql-tooltip'
				className='custom-tooltip'
				renderInPortal={true}
			/>
			<Tooltip
				id='axios-tooltip'
				className='custom-tooltip'
				renderInPortal={true}
			/>
			<Tooltip
				id='css-tooltip'
				className='custom-tooltip'
				renderInPortal={true}
			/>
			<Tooltip
				id='github-tooltip'
				className='custom-tooltip'
				renderInPortal={true}
			/>
			<Tooltip
				id='lodash-tooltip'
				className='custom-tooltip'
				renderInPortal={true}
			/>
			<Tooltip
				id='vite-tooltip'
				className='custom-tooltip'
				renderInPortal={true}
			/>
			<Tooltip
				id='supabase-tooltip'
				className='custom-tooltip'
				renderInPortal={true}
			/>
			<Tooltip
				id='vscode-tooltip'
				className='custom-tooltip'
				renderInPortal={true}
			/>
			<Tooltip
				id='photoshop-tooltip'
				className='custom-tooltip'
				renderInPortal={true}
			/>
			<Tooltip
				id='premiere-tooltip'
				className='custom-tooltip'
				renderInPortal={true}
			/>
			<Tooltip
				id='reason-tooltip'
				className='custom-tooltip'
				renderInPortal={true}
			/>
			<Tooltip
				id='audacity-tooltip'
				className='custom-tooltip'
				renderInPortal={true}
			/>
			<Tooltip
				id='toonboom-tooltip'
				className='custom-tooltip'
				renderInPortal={true}
			/>
			<Tooltip
				id='tiled-tooltip'
				className='custom-tooltip'
				renderInPortal={true}
			/>
			<Tooltip
				id='figma-tooltip'
				className='custom-tooltip'
				renderInPortal={true}
			/>
			<Tooltip
				id='trello-tooltip'
				className='custom-tooltip'
				renderInPortal={true}
			/>
			<Tooltip
				id='discord-tooltip'
				className='custom-tooltip'
				renderInPortal={true}
			/>
			<Tooltip
				id='slack-tooltip'
				className='custom-tooltip'
				renderInPortal={true}
			/>
			<Tooltip
				id='msdos-tooltip'
				className='custom-tooltip'
				renderInPortal={true}
			/>
			<Tooltip
				id='windows8-tooltip'
				className='custom-tooltip'
				renderInPortal={true}
			/>
			<Tooltip
				id='apple-tooltip'
				className='custom-tooltip'
				renderInPortal={true}
			/>
			<Tooltip
				id='raspberrypi-tooltip'
				className='custom-tooltip'
				renderInPortal={true}
			/>
		</div>
	);
}

export default App;
