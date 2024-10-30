import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
	return (
		<div>
			<h2>Navbar</h2>
			<nav>
				<span>My Website</span>
				<Link to='/'>Home</Link>
				<Link to='/users'>Users</Link>
				<Link to='/posts'>Posts</Link>
				<Link to='/about'>About</Link>
				<Link to='/contact'>Contact us</Link>

				{/* <a href="/">Home</a>
				<a href="/about">About</a>
				<a href="/contact">Contact us</a> */}
			</nav>
		</div>
	);
};

export default Header;