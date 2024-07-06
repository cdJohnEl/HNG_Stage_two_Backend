# HNG Stage Two Backend Project

This project is a backend application built for the HNG11 Internship Stage Two. It provides user authentication, organization management, and user profile features using Node.js, Express, Sequelize, and PostgreSQL.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [License](#license)

## Description

This project implements a backend server for managing users and organizations. It includes authentication functionalities such as user registration and login using JSON Web Tokens (JWT). Users can create and manage organizations, add users to organizations, and retrieve user details based on their ID.

## Features

- User registration with validation
- User authentication using JWT
- User login with password hashing
- Organization creation and management
- Adding users to organizations
- Retrieving user details by ID

## Technologies Used

- Node.js
- Express
- Sequelize
- PostgreSQL
- bcryptjs (for password hashing)
- JSON Web Tokens (JWT) for authentication
- dotenv (for environment variable management)

## Getting Started

### Prerequisites

- Node.js (version 14.x or higher)
- npm or yarn
- PostgreSQL (make sure it's installed and running)

### Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/hng-stage-two-backend.git
cd hng-stage-two-backend
```

Install dependencies:

```bash
npm install
```

### Configuration

1. Rename `.env.example` to `.env` and configure your environment variables:

```plaintext
PORT=3000
DATABASE_URL=postgres://username:password@localhost:5432/hng_stage_two_db
JWT_SECRET=your_jwt_secret
```

Replace `DATABASE_URL`, `JWT_SECRET`, and any other configuration variables as needed.

## Usage

Start the application:

```bash
npm run dev
```

The server will start at `http://localhost:3000`.

## API Endpoints

- **Authentication**
  - `POST /auth/register`: Registers a new user.
  - `POST /auth/login`: Logs in an existing user.

- **Users**
  - `GET /api/users/:id`: Retrieves user details by ID.

- **Organizations**
  - `GET /api/organisations`: Retrieves all organizations.
  - `GET /api/organisations/:orgId`: Retrieves a specific organization by ID.
  - `POST /api/organisations`: Creates a new organization.
  - `POST /api/organisations/:orgId/users`: Adds a user to an organization.


## Testing

To run tests, use the following command:

```bash
npm test
```

The tests utilize `supertest` for API endpoint testing and ensure functionality such as user registration, login, organization creation, and authentication.

## License

This project is licensed under the [MIT License](LICENSE).