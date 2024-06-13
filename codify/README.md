# Real-Time Collaborative Code Editor (Codify)

A real-time collaborative code editor built with Node.js, Express, React, and Socket.IO. This application allows multiple users to edit code simultaneously, promoting seamless collaboration among developers.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Architecture](#architecture)
- [Technologies](#technologies)

## Introduction

This project is a collaborative code editor that allows multiple users to work on code in real-time. It's designed to facilitate seamless communication and collaboration among developers.

## Features

- Real-time code collaboration
- Synchronized code editing with Socket.IO
- User management with unique usernames and avatars
- Room creation and management

## Demo

![Home Page](/codify/ss/homePage.png)
![Editor Page](/codify/ss/2Users.png)
![Mutiple Users](/codify/ss/multipleUsers.png)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/HVz11/Code-Editor.git
```

2. Navigate to the project directory:

```bash
cd codify
```

3. Install dependencies:

```bash
npm install
```

4. Run the server

```bash
npm start
npm run server:dev
```

## Usage

- Open your browser and navigate to http://localhost:3000.
- Create a new room or join an existing room using a room ID.
- Start collaborating with other users in real-time.

## Architecture

The application is structured into frontend and backend components:

- Backend: Built with Node.js and Express, handling user management, room creation, and real-time synchronization using Socket.IO.
- Frontend: Developed with React, including components for the home page, editor page, and user management sidebar, integrated with the backend for real-time updates.

## Technologies

- Node.js
- Express
- React
- Socket.IO
- CodeMirror (for code editing)
