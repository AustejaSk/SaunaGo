
# SaunaGo  
A simple website for browsing mobile saunas for rent, created to practice React Router DOM, Firebase authentication, and Firestore database setup.

## Table of Contents
1. [Overview](#overview)
2. [Technologies](#technologies)
3. [Features](#features)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Login Details for Testing](#login-details-for-testing)
7. [Screenshots](#screenshots)
8. [License](#license)

## Overview
**SaunaGo** is a web app built to practice integrating React Router DOM for navigation and Firebase for authentication and Firestore database setup. The platform allows users to view available mobile saunas, while hosts can log in to manage their sauna listings and view statistics. This project was not intended to include full booking functionality but instead focuses on React routing and Firebase login.

## Technologies
- **Frontend**: React, React Router DOM, CSS3, HTML5
- **Backend**: Firebase Authentication, Firebase Firestore
- **Build Tool**: Vite

## Features
- Public browsing of available saunas
- Firebase authentication for hosts (login only)
- Hosts can manage posted saunas and view statistics
- Firebase Firestore for storing sauna data
- React Router DOM for routing
- Responsive design for desktop, tablet and mobile

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/AustejaSk/saunago.git
   ```
2. Navigate to the project directory:
   ```bash
   cd saunago
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage
Public Users: Browse through the available mobile saunas without logging in.
Hosts: Log in using the credentials provided below to manage your sauna listings and view sauna-related statistics.

## Login Details for Testing
To log in and test the host features, use the following credentials:
- **Username**: a@a.com | **Password**: a12345  
- **Username**: b@b.com | **Password**: b12345

## Screenshots
![SaunaGo Homepage](https://github.com/AustejaSk/saunago/blob/main/saunago.png?raw=true)

## License
This project is licensed under the MIT License.
