# HTS_Assignment

## Node.js Express User Management Application

This is a Node.js Express application for user management. It provides endpoints to register users, authenticate users, and manage user data.

### Features

- User registration
- User authentication
- Error handling with custom error messages
- Response handling for uniform API responses
- Request body validation using AJV
- Password hashing and comparison using bcrypt
- MongoDB integration for data storage
- JWT token generation and authentication

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/your-repo.git
   ```

2. Navigate to the project directory:

    ```bash
    cd your-repo
    ```

3. Rename sample.env to .env and add your MongoDB URL to it.

4. Install dependencies:
   
    ```bash
    npm install
    ```

5. To run the application, use the following command:

    ```bash
    npm run start
    ```

The application will start, and you can access it at http://localhost:5000 (or another port if specified in your .env file).

## Routes

### User Routes

- `POST /api/user/register`: Register a new user.
- `POST /api/user/login`: Authenticate a user and generate a JWT token.

For detailed information on each route, refer to the API documentation.

## Configuration

The application uses environment variables for configuration. Make sure to set up the following variables in your `.env` file:

- `PORT`: Port number for the server (default: 3000).
- `MONGO_URI`: MongoDB connection URL.
- `JWT_SECRET`: Secret key for JWT token generation.
