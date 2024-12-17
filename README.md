# **GitHub Repositories Viewer**

## **Description**
The **GitHub Repositories Viewer** is a web application built with **React** and **TypeScript** that allows users to search for GitHub users and view their repositories. The application leverages the GitHub API to display repository details, including stars, forks, language, and last updated date. It features a responsive design, Material-UI components, and GitHub-like visuals for an enhanced user experience.

---

## **Features**
- Search for GitHub users and fetch their repositories.
- Filter repositories by name and programming language.
- View repository details, including stars, forks, and last updated date.
- Fully responsive UI inspired by GitHub’s repository pages.
- Built with React, TypeScript, and Material-UI for modern design and performance.

---

## **How to Run the Project**

### **Prerequisites**
Ensure you have the following installed on your system:
- Node.js (v16 or higher)
- npm or yarn

### **Setup Instructions**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/github-repos-viewer.git
   cd github-repos-viewer
2. Install dependencies
   ```bash
    npm install
3. Start the development server:
   ```bash
   npm start

4. Open your browser and navigate to:
   ```bash
    http://localhost:3000

## **How to Run the Test Suite**

1. Ensure all dependencies are installed:
   ```bash
   npm install
2. Run the test suite:
    ```bash
    npm test 
3. The test runner will start and watch for changes. Press a to run all tests or q to quit the test runner.

4. You can find the test coverage report in the terminal or configure jest to generate a coverage report.


# Future Improvements

- **Pagination**: Implement pagination to handle large numbers of repositories.
- **Enhanced Filtering**: Add advanced filters like sorting by stars, forks, or last updated date.
- **User Profile Display**: Display the GitHub user's profile information (avatar, bio, followers, etc.).
- **Dark Mode Toggle**: Include a dark mode toggle for improved accessibility.
- **Offline Support**: Use service workers to cache data and make the app accessible offline.
- **GraphQL API**: Use the GitHub GraphQL API for more flexible and efficient data fetching.
- **Unit Tests**: Expand the test suite to cover all components and API calls.
- **Deployment**: Deploy the application to a live server (e.g., Netlify, Vercel).

# Technologies Used

- **React**: Frontend framework for building the user interface.
- **TypeScript**: For type safety and better developer experience.
- **Material-UI**: For a clean and responsive design.
- **GitHub API**: To fetch user and repository data.
- **Jest**: For unit testing.

## **License**
This project is licensed under the MIT License. See the LICENSE file for details.