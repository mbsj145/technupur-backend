# Real-time User Management and Chat System with Efficient File Handling

This Node.js application combines three main features: user management API, efficient file handling using streams, and a real-time chat server. It’s built with Express, Mongoose, and Socket.io.

## Features

1. **User Management API (Express.js)**:
   - `GET /users`: Fetch a list of users.
   - `POST /users`: Add a new user by providing a user object (e.g., `name`, `email`).

2. **Efficient File Handling (Node.js Streams)**:
   - Reads and writes large files using Node.js streams to optimize memory usage.

3. **Real-time Chat Server (Socket.io)**:
   - Allows users to broadcast messages in real-time to all connected clients.
   - Basic front-end interface for sending and receiving messages.

## Getting Started

### Prerequisites

- Node.js (v16+)
- MongoDB (for the user management feature)

### Installation

1. **Install dependencies**:
   ```
   npm install
   ```

2. **Setup MongoDB**:
    set `dev_db_url` in `.env.development` file and for production set `database_url` in `.env.production` file

3. **Run the application**:
    for development you can run ```npm run development``` or ```npm run start```
    for production you can run ```npm run production```

## Usage

### User Management API

- **GET** `/api/users`: Retrieves the list of users.
- **POST** `/api/users`: Adds a new user. Send a JSON object with `name` and `email` fields.

### File Handling
when you are using ubuntu linux os then you can create input.txt file using this command 
```yes "This is a line in a large file." | head -n 100000 > input.txt```

The script in `utils/fileHandler.js` reads from `input.txt` and writes to `output.txt` using streams for efficient memory usage.

Usage:
```javascript
const { processLargeFile } = require('./utils/fileHandler');
processLargeFile('input.txt', 'output.txt');
```

### Real-time Chat

1. Start the server.
2. Open `http://localhost:4000` in multiple browser tabs to test real-time messaging.
3. Send messages and watch them broadcast to all clients in real time.