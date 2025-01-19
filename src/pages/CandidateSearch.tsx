import { useState, useEffect } from "react";
import { searchGithub } from "../api/API";
import Card from "../components/Card";
import "./CandidateSearch.css";
import type { Candidate } from "../interfaces/Candidate.interface";
//searchGithubUser;

const CandidateSearch = () => {
	//const [currentCandidate, setcurrentCandidate] = useState('')
	const [users, setUsers] = useState<
		{ id: number; login: string; avatar_url: string; html_url:string }[]
	>([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [displayUsers, setDisplayUsers] = useState(true);
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
		const localStorageUsers: string | null = localStorage.getItem("savedUsers");
		let parsedUsers;
		if (!localStorageUsers) {
			parsedUsers = [];
		} else {
			parsedUsers = JSON.parse(localStorageUsers);
		}

		const newUser: Candidate = {
			login: users[currentIndex].login,
			avatar: users[currentIndex].avatar_url,
			id: users[currentIndex].id,
			htmlurl: users[currentIndex].html_url
		};
		// if (localStorageUsers){
		parsedUsers.push(newUser);
		// }
		localStorage.setItem("savedUsers", JSON.stringify(parsedUsers));
	}
	function handleIndex() {
		if (users.length - 1 === currentIndex) {
			setDisplayUsers(false);
		} else {
			setCurrentIndex(currentIndex + 1);
		}
	}
	return (
		<>
			<h1>candidate</h1>
			{displayUsers ? (
				<>
					<Card user={users[currentIndex]} />
					<button
						className="addButton"
						onClick={() => {
							saveUser();
							handleIndex();
						}}
					>
						+
					</button>
					<button
						className="minusButton"
						onClick={() => handleIndex()}
					>
						-
					</button>
				</>
			) : (
				<div>No more potential candidates.</div>
			)}
		</>
	);
};

export default CandidateSearch;
