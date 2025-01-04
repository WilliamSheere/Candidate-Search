import { useState, useEffect } from "react";
import { searchGithub, searchGithubUser } from "../api/API";

const CandidateSearch = () => {
	useEffect(() => {
	searchUser()
	}, []);
	async function searchUser() {
		const userData = await searchGithub();
    console.log (userData)
	}
	return (
		<>
			<h1>candidate</h1>
		</>
	);
};

export default CandidateSearch;
