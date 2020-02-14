/** @format */

import React from 'react';
import Navbar from '../Navbar/';
import Home from '../Home/'
// import Footer from '../Footer/';

const Layout = props => {
	return (
		<div className='App-header'>
			<Navbar />
			<Home />
			{/* <Footer />  */}

		</div>
	);
};
		
export default Layout;