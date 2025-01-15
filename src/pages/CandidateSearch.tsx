import { useState, useEffect } from "react";
import { searchGithub } from "../api/API";
import Card from "../components/Card";
import "./CandidateSearch.css";
import type { Candidate } from "../interfaces/Candidate.interface";
//searchGithubUser;

const CandidateSearch = () => {
	//const [currentCandidate, setcurrentCandidate] = useState('')
	const [users, setUsers] = useState<
		{ id: number; login: string; avatar_url: string }[]
	>([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	useEffect(() => {
		searchUser();
	}, []);
	async function searchUser() {
		const userData = await searchGithub();
		setUsers(userData);
		console.log(users);
		console.log(userData);
	}
	function saveUser() {
		const localStorageUsers: string | null= localStorage.getItem("savedUsers");
		let parsedUsers;
		if (!localStorageUsers) {
			parsedUsers = [];
		}
		else {
			parsedUsers = JSON.parse(localStorageUsers);
		}

		const newUser: Candidate = {
			login: users[currentIndex].login,
			avatar: users[currentIndex].avatar_url,
			id: users[currentIndex].id,
		};
		// if (localStorageUsers){
			parsedUsers.push(newUser);
		// }
		localStorage.setItem('savedUsers',JSON.stringify(parsedUsers))
	}
	return (
		<>
			<h1>candidate</h1>
			<Card user={users[currentIndex]} />
			<button
				className="addButton"
				onClick={() => {
					saveUser();
					setCurrentIndex(currentIndex + 1);
				}}
			>
				+
			</button>
			<button
				className="minusButton"
				onClick={() => setCurrentIndex(currentIndex + 1)}
			>
				-
			</button>
		</>
	);
};

export default CandidateSearch;
