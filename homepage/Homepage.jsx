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
// import SteamLogo from '/assets/logos/steam-logo.svg?react';
import { HiOutlineMailOpen } from 'react-icons/hi';
// import { TbBrowserCheck } from 'react-icons/tb';
import { PiReadCvLogoBold } from 'react-icons/pi';
import { FaRegEye } from 'react-icons/fa';
import './homepage/homepage.css';

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

	//flag to skip animation on first mount
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
			x.set(offset); //skip animation
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

		//set position without animation on first mount
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

			//only allow video on the currently focus project
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
											className='project-title-link'
										>
											<FaRegEye className='browser-icon' />
											{project.title}
										</a>
									</h3>
									{project.screenshot && (
										<img
											src={project.screenshot}
											alt={`${project.title} screenshot`}
											className='project-screenshot'
										/>
									)}

									{project.video && (
										<figure className='project-video-figure'>
											<div className='video-crt-wrapper'>
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
											</div>
											{project.videoText && (
												<figcaption className='video-caption outside-caption'>
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
										<FaRegEye
											className='browser-icon'
											title='View Live Project'
											onClick={(e) => {
												e.stopPropagation();
												window.open(
													project.livelink,
													'_blank',
													'noopener,noreferrer'
												);
											}}
											style={{ cursor: 'pointer', marginLeft: '0.5rem' }}
										/>
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
			}, 500);
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
					setPauseBeforeDelete(true);
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
	'Warning: At 49 it feels weird calling yourself a Junior *anything*, but here we are ...',
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
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	const [activeCardIndex, setActiveCardIndex] = useState(null);

	const projects = [
		{
			title: 'StackDew Valley',
			video: '/assets/stackdew_trailer.mp4',
			videoText: 'StackDew Valley early trailer',
			description:
				"A 'cosy' pixel-art farming game where you nurture bootcamp students known as Devlings via mini-games then take them to battle in the fearsome job market! This is an evolving, group project that was made as part of the Northcoders bootcamp (and hence references Northcoders team members etc).",
			livelink: 'https://stackdewvalley-686c6.web.app/',
			githublink: 'https://github.com/Stackdew/stackdew-valley',
			tech: ['Phaser', 'Firebase', 'Node', 'Tiled', 'GROUP PROJECT!'],
		},
		{
			title: 'NC News',
			description:
				"A full-stack Reddit-style article app with comments, votes, and user profiles. This project was part of the Northcoders bootcamp and was the first time we'd married frontend to backend. The site is slow to spin up sometimes because of the free data and app hosting being used. It's also currently undergoing a bit of a visual overhaul too.",
			livelink: 'https://slightly76-does-nc-news.netlify.app/',
			githublink: 'https://github.com/slightly76/nc-news',
			tech: [
				'Express',
				'PostgreSQL',
				'Axiom',
				'React',
				'React Router',
				'CSS',
				'Supabase',
				'Render',
			],
		},
		{
			title: 'Portfolio Website',
			screenshot: '/assets/website.png',
			description:
				"This very website. I hope you like it. I'm already working on a restructure of its inner workings if not! For reference, this is the third website I've ever made and the first one that's 'mobile first'. The previous one was made using Adobe GoLive and my first ever site was written in notepad & best viewed in Netscape Navigator. So, be gentle...",
			livelink: 'https://github.com/slightly76',
			githublink: 'https://github.com/slightly76',
			tech: [
				'HTML',
				'React',
				'React Router',
				'React Tooltip',
				'CSS',
				'Framer Motion',
			],
		},
		{
			title: 'Coming soon',
			description:
				"Aside from improving this site, re-dressing (CSSing?) NC News and updating StackDew Valley I'm also scratching the surface of Unity and C#, lining up some fun with GB Studio and maybe even Pico8. The longer I'm unemployed, the more varied and possibly stupid my plans get. So watch this space!",

			tech: ['Unity', 'C#', 'GB Studio', 'PICO 8', 'plus much much more...'],
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

							<div className='image-and-stats-wrapper'>
								<div className='panel-with-bars image-panel'>
									<div className='eq-bars horizontal-bars left-eq'>
										{[...Array(6)].map((_, i) => (
											<div key={i} className={`eq-bar bar-${i}`} />
										))}
									</div>

									<div className='crt-container'>
										<div className='crt-inner'>
											<div className='image-wrapper'>
												<img
													src='/assets/me.jpg'
													className='hover-image base'
													alt='Me'
												/>
												<img
													src='/assets/mehover.jpg'
													className='hover-image hover'
													alt='Me Hovering'
												/>
											</div>
										</div>
									</div>
								</div>

								<div className='stats-and-eq'>
									<div className='crt-container'>
										<div className='crt-inner'>
											<div className='stats-panel'>
												<span className='label'>-=STATS=-</span>
												<br />
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
									<div className='eq-bars horizontal-bars right-eq'>
										{[...Array(6)].map((_, i) => (
											<div key={i} className={`eq-bar bar-${i}`} />
										))}
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

					<div className='soft-skills-container' style={{ marginTop: '2rem' }}>
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
									<h4 className='category-label'>] , </h4>
								</ul>
							</div>
							<div className='skills-category'>
								<h4 className='category-label'>interpersonal: [</h4>
								<ul className='skills-list'>
									<li>"Pair Programming",</li>
									<li>"SCRUM Methodologies",</li>
									<li>"Collaboration",</li>
									<li>"Adaptability",</li>
									<li>"Active Listening",</li>
									<li>
										"Attention to{' '}
										<span
											title='Nice catch!'
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
									<br />
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
							data-tooltip-content='Lodash to the rescue. Hip-Hip 𝐴𝑟𝑟𝑎𝑦!'
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
						<div className='sprite-wrapper'>
							<img
								src='/assets/spriteME.png'
								className='hover-sprite base'
								alt='Me as a sprite'
							/>
							<img
								src='/assets/spriteMEHOVER.png'
								className='hover-sprite hover'
								alt='Me Hovering as a sprite'
							/>
							<div className='sprite-crt-overlay'></div>
						</div>

						<p className='about-text'>
							For the last 20 years I provided{' '}
							<span className='glow-highlight blue'>tech support</span> to a
							flourishing Animation & Design BA(Hons) Degree programme in the
							UK. Aside from the day to day{' '}
							<span className='glow-highlight pink'>problem solving</span> and
							session prep, I loved offering{' '}
							<span className='glow-highlight blue'>critical feedback</span>,{' '}
							<span className='glow-highlight pink'>technical mentorship</span>{' '}
							and <span className='glow-highlight blue'>pastoral care</span> to
							the students. I often{' '}
							<span className='glow-highlight pink'>supported colleagues</span>{' '}
							in adjacent creative disciplines like Film/TV & Graphic Design -
							and even supplying{' '}
							<span className='glow-highlight blue'>voice acting</span> for
							student films. I have a{' '}
							<span className='glow-highlight blue'>
								Media Production BA(Hons)
							</span>{' '}
							degree myself, which definitely came in handy.
							<br />
							<br />
							Some of my former students have gone on to win BAFTAs for their
							work and I'm immensely proud to have beem even a tiny part of
							their <span className='glow-highlight blue'>journey</span>.
							<br />
							<br />
							Unfortunately, owing to rampant financial insecurity in Higher
							Education, I've found myself out of work for the first time since
							I was a teenager. However, I've grasped the opportunity to pivot
							towards a{' '}
							<span className='glow-highlight blue'>new challenge</span> in
							<span className='glow-highlight pink'> Software & Game Dev</span>,
							which is something I always wanted to do when I was younger.
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
						<div className='sprite-marquee'>
							<div className='sprite-wrapper'>
								<img
									src='/assets/spriteME.png'
									className='hover-sprite base'
									alt='Me as a sprite'
								/>
								<img
									src='/assets/spriteMEHOVER.png'
									className='hover-sprite hover'
									alt='Me Hovering as a sprite'
								/>
								<div className='sprite-glint'></div>
								<div className='sprite-crt-overlay'></div>
							</div>
						</div>

						<p className='about-text2'>
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
							head-first into a library like{' '}
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
						<div className='sprite-hireme-wrapper'>
							<div className='sprite-wrapper'>
								<img
									src='/assets/spriteME.png'
									className='hover-sprite base'
									alt='Me as a sprite'
								/>
								<img
									src='/assets/spriteMEHOVER.png'
									className='hover-sprite hover'
									alt='Me Hovering as a sprite'
								/>
								<div className='sprite-crt-overlay'></div>
							</div>
							<div className='hireme-label'>◄ HIRE ME !!!</div>
						</div>
						<p className='contact-text'>
							I'm <i>actively</i> seeking work and I'm open to junior roles,
							apprenticeships, contract work, and freelance opportunities. If
							you like what you see and you want to know more, or you want to
							chastise me for the tech stack tooltip puns - feel free to get in
							touch! I'm genuinely eager to hear what people think of my site.
							Constructive criticism is always welcome.
						</p>
						<br />
						<a href='mailto:caskew@hotmail.com' className='contact-link'>
							<HiOutlineMailOpen className='contact-icon' />
							Email caskew@hotmail.com
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
						{
							<a
								href='https://docs.google.com/document/d/18RB1J6eTGvqjeQwB0QmqbRDql3ookEUhyEXZ0_wOQwo/edit?usp=sharing/preview'
								target='_blank'
								rel='noopener noreferrer'
								className='contact-link'
							>
								<PiReadCvLogoBold className='contact-icon' />
								My CV
							</a>
						}
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
		const wrapper = scrollRef.current;
		const card = document.querySelector(`.card-${index}`);

		if (!wrapper || !card) {
			console.warn('scrollToCard failed:', { wrapper, card, index });
			return;
		}

		//get bounding boxes relative to the viewport
		const wrapperRect = wrapper.getBoundingClientRect();
		const cardRect = card.getBoundingClientRect();

		//how far the card is from the top of the scroll container?
		const relativeOffset = cardRect.top - wrapperRect.top;

		//get sticky offset in pixels
		const stickyOffset = parseFloat(getComputedStyle(card).top) || 0;

		//calculate the scroll target
		const scrollTarget = wrapper.scrollTop + relativeOffset - stickyOffset;

		wrapper.scrollTo({
			top: scrollTarget,
			behavior: 'smooth',
		});
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

			cancelAnimationFrame(timeoutId);
			timeoutId = requestAnimationFrame(() => {
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

							wrapper.scrollTop = anchorTop;
							wrapper.style.overflowY = 'hidden';

							setTimeout(() => {
								wrapper.style.overflowY = 'auto';
							}, 700);

							const currentCard = document.querySelector(`.card-${i}`);
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
			});
		};

		wrapper.addEventListener('scroll', onScrollLock);
		return () => {
			wrapper.removeEventListener('scroll', onScrollLock);
			clearTimeout(timeoutId);
		};
	}, []);

	const setAnchorRef = (index) => (el) => {
		if (el) anchorsRef.current[index] = el;
	};

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
								: index === 5
								? '80vh'
								: '95vh';

						return (
							<React.Fragment key={index}>
								<div ref={setAnchorRef(index)} className='card-anchor' />
								<div
									className={`card card-${index}`}
									style={{
										backgroundColor: card.bg,
										zIndex: index + 1,
										top: `${index * 3}vh`,
										minHeight: cardHeight,
										maxHeight: cardHeight,
										position: 'sticky',
									}}
								>
									<div className='card-inner-clip'>
										<div
											className='card-inner'
											style={{
												maxHeight: '100%',
												overflowY: 'auto',
											}}
										>
											<div
												className='card-peek'
												onClick={() => scrollToCard(index)}
											>
												{card.title}
											</div>

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
