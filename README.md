## Travel App
The Travel Guru App is a React application that allows users to sign up, log in, view destinations, express interest in destinations, and access an admin dashboard. The app utilizes React Router for navigation and includes several components for different functionalities.

## Prerequisites
Before running the Travel App, ensure that you have the following installed:

Node.js
npm (Node Package Manager)
### Installation
Clone the repository or download the source code files.

Open a terminal and navigate to the project's root directory.

Install the required dependencies by running the following command:

shell
Copy code
npm install
## Usage
To run the Travel App, follow these steps:

Make sure you are in the project's root directory in the terminal.

Start the development server by running the following command:

shell
Copy code
npm start
Open a web browser and access the app at http://localhost:3000.

## Components
The Travel App consists of the following components:

### 1. App
The App component serves as the main entry point for the application. It handles routing using React Router and manages the user's interest list.

### 2. Welcome
The Welcome component represents the landing page of the app. It provides information and options for signing up and logging in.

### 3. SignUp
The SignUp component allows new users to create an account by providing necessary details such as name, email, and password.

### 4. LogIn
The LogIn component enables users to log into their accounts using their email and password.

### 5. Home
The Home component serves as the main page of the app after a user logs in. It provides navigation to different sections such as interests and admin dashboard. It also includes a handler function to manage user interests.

### 6. Interests
The Interests component displays the user's interest list, showing the destinations they have expressed interest in.

### 7. Admin
The Admin component represents the admin dashboard, which provides additional functionality for managing destinations and user data.

## MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
