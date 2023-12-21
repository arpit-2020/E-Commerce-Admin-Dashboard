# E-Commerce Admin Dashboard

## Introduction

This project is designed to provide a secure platform for efficient product management, incorporating JWT Token-Based Authentication for enhanced security.

## Authentication (JWT Token-Based)

Implemented JWT Token-Based Authentication ensures secure transmission of information between client and server. JSON Web Tokens manage user sessions, restricting access to authenticated users only.

## User Management

The application includes user management features such as 'Sign Up' and 'Log In':

- **Sign Up:** New users can create accounts by providing essential information (username, email, password).
  
- **Log In:** Registered users can securely log into their accounts using their credentials.

## Product Management

The core functionality revolves around product management, offering features like:

- **Add Products:** Users can seamlessly add new products by providing details like name, price, images, and relevant information.

- **Update Products:** Modify product information with ease.

- **Delete Products:** Remove products from the system.

- **List Products:** View existing products, complemented by a powerful search feature using regex for efficient product discovery.

### Tech Stack

- **MongoDB:** Database of choice for robust data management.
  
- **ExpressJS:** Creates the server and builds RESTful APIs for efficient request handling.
  
- **ReactJS:** Powers the user interface, ensuring a responsive and interactive user experience.
  
- **NodeJS:** Serves as the runtime environment, facilitating seamless communication between client and server.

## Security Measures

- **Password Security:** Passwords are securely hashed and salted using bcrypt for resistance against decryption.

- **JWT Authentication:** Tokens are assigned and expire, mitigating unauthorized access.

## How to Install and Run

### Frontend


1. **Clone the Repository:**

   ```bash
   git clone https://github.com/arpit-2020/E-Commerce-Admin-Dashboard.git
   cd MERN-E-Commerce-Dashboard.git

2. **Navigate to the Frontend Directory:**

   ```bash
   cd frontend
   npm install
   npm start
   
2. **Navigate to the Backend Directory:**

   ```bash
   cd backend
   npm install
   nodemon
