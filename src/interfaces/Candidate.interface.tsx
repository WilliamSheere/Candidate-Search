// TODO: Create an interface for the Candidate objects returned by the API
//candidates name, username, location, avatar, email, html_url, and company
export interface Candidate {
	name: string;
	username: string;
	id: number;
	location: string;
	avatar: string;
	email: string;
	htmlurl: string;
	company: string;
}

