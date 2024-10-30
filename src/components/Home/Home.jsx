import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const Home = () => {
	return (
		<div>
			<Header></Header>
			{/* <h2>This is the home component</h2> */}
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	);
};

export default Home;