import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
	return (
		<div>
			<h2>Navbar</h2>
			<nav>
				<span>My Website</span>
				<Link to='/'>Home</Link>
				<NavLink to='/users'>Users</NavLink>
				<NavLink to='/posts'>Posts</NavLink>

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