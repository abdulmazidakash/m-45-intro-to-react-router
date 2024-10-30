import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import  './Users.css'

const Users = () => {

	const users = useLoaderData();

	// state -- data 
	// state --> loader 
	//fetch --> state set --> set state
	console.log(users);
	return (
		<div>
			<h2>Our Users: {users.length} </h2>
			<h2>fantastic and bodro users</h2>
			<div className="users">
				{
					users.map(user => <User key={user.id} user={user} ></User> )
				}
			</div>
		</div>
	);
};

export default Users;