import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//import ReadArticle from './components/ReadArticle.jsx';
//import Footer from './components/Footer.jsx';
//import TopicList from './components/TopicList.jsx';
import Homepage from './homepage/Homepage.jsx';

//import { PageTitleProvider } from './components/PageTitleContext.jsx';

function App() {
	//const [pageTitle, setPageTitle] = useState('Dummy Page');

	return (
		<>
			<Homepage />
		</>
	);
}

export default App;
