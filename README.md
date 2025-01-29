# HNG12 Stage 0 task Express API

This is a simple Nodejs/Express API that returns an email, current datetime, and GitHub URL of the intern.

## Setup Instructions

### Prerequisites
- Install [Node.js](https://nodejs.org/)
- Install pnpm
  ```sh
  npm install -g pnpm
  ```

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/PreciousIfeaka/hng12_0.git
   cd hng12_0
   ```

2. Install dependencies:
   ```sh
   pnpm install
   ```

3. Create a `.env` file in the root directory and add the values for the variables as seen in the .env.example file:
  
4. Start the server:
   ```sh
   pnpm start
   ```

The server will start and listen on the specified port (e.g., `http://localhost:3000`).

## API Documentation

### Base URL
```
http://localhost:3000
```

### Endpoints

#### `GET /`
- **Description**: Returns the configured email, current datetime, and GitHub URL.
- **Response Format**:
  ```json
  {
    "email": "your-email@example.com",
    "current_datetime": "2025-01-29T12:00:00.000Z",
    "github_url": "https://github.com/your-profile"
  }
  ```

### Example Usage
You can test the API using `curl` or a browser:
```sh
curl -X GET http://localhost:3000/
```

## Additional Resources
- [Node.js Developers for Hire](https://hng.tech/hire/nodejs-developers)

