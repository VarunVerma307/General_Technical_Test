This project is a MERN (MongoDB, Express, React, Node.js) stack web application that allows users to view property listings, manage their accounts, and perform authentication tasks such as login and signup.

Features
User Authentication: Sign up and login using JWT (JSON Web Token) for secure authentication.
Product Listings: View properties fetched from the backend API on the product listing page.
User Profile: Update and view user profile details after login.

Technologies
Frontend: React, Vite, Tailwind CSS, React Router DOM
Backend: Node.js, Express, MongoDB, JWT for authentication
Database: MongoDB
Installation
Backend
Clone the repository:

bash
Copy code
git clone <repo-url>
cd backend
Install dependencies:

bash
Copy code
npm install
Create .env file in the backend directory and add the following:

env
Copy code
PORT=5000
MONGO_URI=<your_mongodb_uri>
JWT_SECRET=<your_jwt_secret>
Start the server:

bash
Copy code
npm start
Frontend
Navigate to the frontend directory:

bash
Copy code
cd ../frontend
Install dependencies:

bash
Copy code
npm install
Start the frontend development server:

bash
Copy code
npm run dev
Usage
Backend Usage
The backend server will run on http://localhost:5000. It provides REST API endpoints for user authentication and product listings.

POST /api/auth/login – Login user
POST /api/auth/signup – Sign up a new user
GET /api/products – Fetch product listing (properties)

Frontend Usage
The frontend development server will run on http://localhost:3000.

Users can:
Sign up and log in via the login/signup page.
View property listings on the product listing page after login.
Access and update their profile on the profile page.

Folder Structure
bash
Copy code
backend/
│
├── controllers/        # API controllers for authentication and products
├── models/             # MongoDB models (User, Product)
├── routes/             # API routes (auth, products)
├── middleware/         # Middleware (authentication)
├── server.js           # Entry point for the backend server
├── config/             # Database connection and environment setup
└── .env                # Environment variables (MONGO_URI, JWT_SECRET, etc.)
  
frontend/
│
├── src/
│   ├── components/     # React components
│   ├── pages/          # Main pages (Login, Signup, ProductListing, Profile)
│   ├── App.js          # Main App component with routes
│   └── index.js        # Entry point for React
│
└── vite.config.js      # Vite configuration
