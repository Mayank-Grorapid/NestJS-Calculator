# Calculator Backend API

Welcome to the Calculator Backend API repository! This repository contains the codebase for a calculator application's backend services, allowing users to register, log in, perform calculations, save expressions, and manage their calculation history. This README provides an overview of the project, installation instructions, API endpoints, and basic usage examples.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

1. **User Authentication:**
   - Register a new user account.
   - Log in with registered credentials using JSON Web Tokens (JWT) for secure authentication.
   
2. **Calculator Operations:**
   - Calculate mathematical expressions provided by the user.
   
3. **Expression History:**
   - Retrieve the history of calculated expressions.
   - Add new expressions to the history.
   - Modify existing expressions.
   - Delete expressions from the history.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/calculator-backend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd calculator-backend
   ```

3. Install dependencies using Yarn:

   ```bash
   yarn install
   ```

4. Set up environment variables:
   - Rename `.env.example` to `.env` and provide the required configuration values (e.g., database connection details, secret keys).

5. Run the application:

   ```bash
   yarn start
   ```

## API Endpoints

- **POST** `/user/register`
  - Register a new user account.
  
- **POST** `/user/login`
  - Log in with registered credentials using JWT for authentication.
  
- **POST** `/calculate`
  - Calculate a mathematical expression.
  
- **GET** `/calcApp/history`
  - Retrieve the history of calculated expressions.
  
- **POST** `/calcApp/addHistory`
  - Add a new expression to the history.
  
- **PUT** `/calcApp/update`
  - Modify an existing expression in the history.
  
- **DELETE** `/calcApp/delete`
  - Delete an expression from the history.

## Usage

1. **Register a User:**
   - Send a `POST` request to `/user/register` with user registration details.
   
2. **Log In:**
   - Send a `POST` request to `/user/login` with registered credentials to obtain an authentication token (JWT).
   
3. **Calculate Expression:**
   - Send a `POST` request to `/calculate` with a mathematical expression to get the result.
   
4. **Retrieve History:**
   - Send a `GET` request to `/calcApp/history` to retrieve the expression history.
   
5. **Add to History:**
   - Send a `POST` request to `/calcApp/addHistory` with an expression to add it to the history.
   
6. **Modify History:**
   - Send a `PUT` request to `/calcApp/update` with the updated expression and its ID.
   
7. **Delete from History:**
   - Send a `DELETE` request to `/calcApp/delete` with the expression ID to remove it from the history.

## Contributing

Contributions to this project are welcome! If you find any bugs or want to add new features, please feel free to open issues or pull requests.

---

Thank you for choosing our Calculator Backend API! If you have any questions or need further assistance, please don't hesitate to contact us.
