import { Link } from "react-router-dom";
const Nav = () => {
	// TODO: Add necessary code to display the navigation bar and link between the pages
	return (
		<div>
			<div>
				<Link to="/">Home</Link>
			</div>
			<div>
				<Link to="/SavedCandidates">Saved Canidates</Link>
			</div>
		</div>
	);
};

export default Nav;
