import { Link } from "react-router-dom";


const Post = ({post}) => {
	const {id, title} = post;
	const postStyle = {
		border: '2px solid crimson',
		padding: '5px',
		borderRadius: '20px'
	}
	return (
		<div  style={postStyle}>
			<h4>Post of Id:{id} </h4>
			<p>{title} </p>
			<Link to={`/post/${id}`} >Post Detail</Link>
			<Link to={`/post/${id}`}><button>Show Details</button></Link>
			<button>Click to see details</button>
		</div>
	);
};

export default Post;