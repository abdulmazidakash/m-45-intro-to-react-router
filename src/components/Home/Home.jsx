import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const Home = () => {
	const navigation = useNavigation();
	const location = useLocation();
	console.log(location);
	return (
		<div>
			<Header></Header>
			{
				navigation.state === 'loading' ? <p>Loading...</p> : <Outlet></Outlet>
			}
			{/* <h2>This is the home component</h2> */}

			<Footer></Footer>
		</div>
	);
};

export default Home;