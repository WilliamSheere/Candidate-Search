import { useState, useEffect } from "react";
import { searchGithub,  } from "../api/API";
import Card from "../components/Card";
//searchGithubUser;

const CandidateSearch = () => {
	//const [currentCandidate, setcurrentCandidate] = useState('')
	const [users, setUsers] = useState('')
	const [currentIndex, _setCurrentIndex] = useState(0) 
	useEffect(() => {
	searchUser()
	}, []);
	async function searchUser() {
		const userData = await searchGithub();
		setUsers(userData)
		console.log (users)
    console.log (userData)
	}
	return (
		<>
			<h1>candidate</h1>
			<Card user={users[currentIndex]}/> 
		</>
	);
};

export default CandidateSearch;
