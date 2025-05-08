import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header.jsx';

import ReadArticle from './components/ReadArticle.jsx';
import Footer from './components/Footer.jsx';
import TopicList from './components/TopicList.jsx';

import { PageTitleProvider } from './components/PageTitleContext.jsx';

function HomePage() {
	const [pageTitle, setPageTitle] = useState('Dummy Page');

	return (
		<>
			<xxx />
		</>
	);
}
