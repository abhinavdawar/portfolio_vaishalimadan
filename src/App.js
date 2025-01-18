import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<div className='router-container'>
				<Routes>
					<Route exact path='/' element={<Homepage />} />
					<Route exact path='/about' element={<About />} />
					<Route exact path='/' element={<Homepage />} />
				</Routes>
			</div>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
