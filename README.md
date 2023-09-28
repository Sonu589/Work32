# Quiz Application

## Overview

This Quiz Application is a web-based platform that allows users to participate in quizzes and test their knowledge on various topics. The application fetches quiz questions from an external API and presents them to users one at a time. Users can select their answers, track their progress, and view their scores at the end of the quiz.

### Approach

The application is built using React, a popular JavaScript library for building user interfaces. It makes use of various React components to create a dynamic and interactive quiz experience. Here's a brief overview of the components:

- **Quiz**: The main component that manages the quiz logic, including fetching questions, handling user answers, and tracking scores.

- **QuizResult**: A component that displays the user's final score and allows them to retry the quiz.

- **Report**: A component that provides a detailed report of the user's performance, showing which questions were answered correctly and which were not.

- **EmailValidationModal**: A modal component that appears when the user enters an invalid email address for quiz participation.

## Setup and Installation

To run this application locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/quiz-application.git

1. Navigate to the project directory:

    ```bash cd quiz-application

2. Install the required dependencies:
    ```bash npm install

3. Start the development server:
    ```bash npm start
4. Open your web browser and access the application at http://localhost:3000.

# Assumptions

* It is assumed that users have a stable internet connection to fetch quiz questions from the external API.

* The application assumes that users will provide a valid email address for quiz participation. Invalid email addresses trigger a validation modal.

# Challenges Faced

During the development of this application, several challenges were encountered and overcome:
1. API Integration: Integrating an external API to fetch quiz questions and parse the response data.
2. State Management: Managing the state of the quiz, including tracking user answers, scores, and timers.
3. Responsiveness: Ensuring that the application is responsive and works well on various devices and screen sizes.
4. Modal Implementation: Implementing a modal for email validation and ensuring it behaves correctly.
5. Browser Compatibility: Testing and ensuring cross-browser compatibility.

# Feedback and Contributions

If you encounter any issues, have suggestions for improvements, or would like to contribute to this project, please feel free to open an issue or create a pull request. Your feedback and contributions are highly appreciated.
Thank you for using the Quiz Application!

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
