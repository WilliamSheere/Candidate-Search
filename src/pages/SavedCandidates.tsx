import { useEffect } from "react";

const SavedCandidates = () => {
  function getStoredUsers (){
    const localStorageUsers: string | null = localStorage.getItem("savedUsers");
		let parsedUsers;
		if (!localStorageUsers) {
			parsedUsers = [];
		} else {
			parsedUsers = JSON.parse(localStorageUsers);
		}
    console.log (parsedUsers)
  }
  useEffect(() => {
    getStoredUsers ()
  }, [])
  
  return (
    <>
      <h1>Potential Candidates</h1>
    </>
  );
};

export default SavedCandidates;
