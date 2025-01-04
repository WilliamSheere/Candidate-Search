# Candidate-Search
Candidate Search Application
Description
The Candidate Search Application allows users to browse potential candidates and decide whether to save them for further consideration. It ensures a seamless experience for reviewing, saving, and managing candidate profiles with persistence across sessions.

Features
View Candidate Information

Displays one candidate at a time, showing the following details:
Name
Username
Location
Avatar
Email
Company
GitHub Profile Link (html_url)
Save or Skip Candidates

+ Button: Save the current candidate to the list of potential candidates and display the next candidate.
- Button: Skip the current candidate without saving and display the next candidate.
No More Candidates

Displays an appropriate message when there are no candidates left to review.
View Saved Candidates

A separate page lists all previously saved potential candidates with complete details.
Persistence

The list of saved candidates persists across sessions.
Empty States

Displays an appropriate message when:
No candidates are available to review.
No candidates have been saved yet.
Installation
Prerequisites
Ensure you have the following installed:

Node.js (v14 or higher)
NPM or Yarn
A MongoDB or local JSON file (if using a backend for persistence)
Steps
Clone the repository:

bash
Copy code
git clone https://github.com/your-repo/candidate-search-app.git

Usage
Candidate Review Page
Upon loading, the application displays the first candidate's details.
Use the + button to save a candidate to your list.
Use the - button to skip a candidate without saving.
Saved Candidates Page
View all saved candidates with their details.
Data persists across page reloads.

Technologies Used
Frontend: React, Vite
State Management: Context API or Redux
Backend (Optional): Node.js, Express, MongoDB (or JSON file for mock data)
Styling: CSS/SCSS or a library like Tailwind CSS
Persistence: LocalStorage or Database
Future Enhancements
Add search and filter functionality for saved candidates.
Integrate with real-world APIs for fetching candidate data.
Enable removal of saved candidates from the saved list.