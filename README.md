
## Objective
Learn to create and dynamically update a Context in React. Understand how changes in the context values are reflected across components that consume the context.

## Setup

1. **Create an 'Exercises' Directory** (If not already done):
   - Create a directory on your local machine to house all your exercises, using `mkdir Exercises`.

2. **Fork the Repository**:
   - Navigate to the GitHub repository for this exercise at `03-26-creating-updating-context`.
   - Click on the 'Fork' button to create a fork of the repository.

3. **Clone Your Forked Repository**:
   - Open the terminal.
   - Navigate to your `Exercises` directory with `cd path/to/Exercises`.
   - Run `git clone <your-forked-repo-url>` to clone the repository to your machine, creating a new directory named `03-26-creating-updating-context`.

4. **Initial Setup**:
   - Change to the exercise directory: `cd 03-26-creating-updating-context`.
   - Run `npm install` to install dependencies

## Exercise Instructions

1. **Create and Export UserContext**:
   - In `src`, create `UserContext.js`.
   - Define `UserContext` using `React.createContext()` with default user values (e.g., `{ name: 'John Doe', age: 30 }`).
   - Export `UserContext`.

2. **Create UserProfile Component**:
   - Create `UserProfile.js`.
   - Use `useContext(UserContext)` to access and display the user's name and age.

3. **Implement Context Value Updates in App**:
   - In `App.js`, import `UserContext` and `UserProfile`.
   - Use `useState` to create a state that holds user information.
   - Wrap `UserProfile` with `UserContext.Provider`, passing the state as the context value.
   - Add functionality to change the user information (e.g., a button to change the user's name).

4. **Observing Context Changes**:
   - Observe how changing the state in `App.js` updates the context values and how these changes are reflected in `UserProfile`.

## Expected Outcome

- `UserProfile` displays the initial user information from `UserContext`.
- Modifications to the user information in `App.js` are reflected in `UserProfile`.

## Submission

1. **Commit Your Changes**:
   - Save all changes.
   - Use `git add .`, then `git commit -m "Completed Creating and Updating Context exercise"`.
   - Push the commit to your forked repository with `git push`.

2. **Create a Pull Request**:
   - Go to your repository on GitHub.
   - Initiate a 'Pull Request' to the original repository.
   - Describe your implementation in the pull request details.
