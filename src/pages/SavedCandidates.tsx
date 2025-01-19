import { useEffect, useState } from "react";
import type { Candidate } from "../interfaces/Candidate.interface";
const SavedCandidates = () => {
	const [savedUsers, setSavedUsers] = useState<Candidate[]>([]);
	function getStoredUsers() {
		const localStorageUsers: string | null = localStorage.getItem("savedUsers");
		let parsedUsers;
		if (!localStorageUsers) {
			parsedUsers = [];
		} else {
			parsedUsers = JSON.parse(localStorageUsers);
		}
		console.log(parsedUsers);
		setSavedUsers(parsedUsers);
	}
	useEffect(() => {
		getStoredUsers();
	}, []);

	return (
		<>
			<h1>Potential Candidates</h1>

			{savedUsers.length === 0 ? (
				<div>No more candidates.</div>
			) : (
				savedUsers.map((user) => {
					return (
						<div key={user.id}>
							<div>{user.login}</div>
							<div>
								<img src={user.avatar} alt="Avatar" />
							</div>
							<div><a href={user.htmlurl}>Github Link</a></div>
						</div>
					);
				})
			)}
		</>
	);
};

export default SavedCandidates;
