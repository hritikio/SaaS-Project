# Internship Project - Figma Pixel-Perfect Application

A full-stack authentication application with JWT-based authentication, protected routes, user management, and dark mode theme support. This project is a pixel-perfect implementation of a Figma design.

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Setup Instructions](#-setup-instructions)
- [API Endpoints](#-api-endpoints)
- [Screenshots](#-screenshots)
- [Design Decisions & Tradeoffs](#-design-decisions--tradeoffs)

## ✨ Features

### Authentication

- [x] User signup with email and password validation
- [x] User login with JWT token generation
- [x] Token storage in localStorage
- [x] Protected routes with automatic redirect
- [x] Logout functionality with redirect to login page
- [x] Auto-redirect to dashboard if already authenticated

### Dashboard

- [x] Summary cards showing user statistics
- [x] Total users count display
- [x] User status and email display
- [x] Dark mode support
- [x] Protected access

### User Management

- [x] User list table view
- [x] Search functionality (by name or email)
- [x] Sorting (A-Z / Z-A)
- [x] Client-side pagination (5 users per page)
- [x] Integration with JSONPlaceholder API
- [x] Dark mode support

### Settings

- [x] Profile form (name and email)
- [x] Dark/Light theme toggle
- [x] Theme persistence in localStorage
- [x] Auto-navigation to dashboard after save
- [x] Success message on save

### UI/UX

- [x] Pixel-perfect Figma implementation
- [x] Responsive design
- [x] Dark mode throughout the application
- [x] Smooth navigation with React Router
- [x] Loading states
- [x] Clean and modern interface with Tailwind CSS

## 🛠 Tech Stack

### Backend

- **Runtime**: Node.js
- **Framework**: Express.js v4.18.2
- **Language**: TypeScript v5.3.3
- **Authentication**: JSON Web Tokens (jsonwebtoken v9.0.2)
- **Validation**: Zod v3.22.4
- **CORS**: cors v2.8.5
- **Dev Server**: ts-node-dev v2.0.0

### Frontend

- **Framework**: React v19.2.0
- **Language**: TypeScript v5.9.3
- **Routing**: React Router DOM v7.13.0
- **HTTP Client**: Axios v1.13.5
- **Styling**: Tailwind CSS v4.1.18
- **Build Tool**: Vite v7.2.4

## 📁 Project Structure

```
internshipProject/
├── Backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── authController.ts      # Login/Signup handlers
│   │   ├── middleware/
│   │   │   └── auth.ts                # JWT middleware
│   │   ├── routes/
│   │   │   ├── authRoutes.ts          # Public auth routes
│   │   │   └── protectedRoutes.ts     # Protected routes
│   │   ├── validators/
│   │   │   └── authValidator.ts       # Zod validation schemas
│   │   └── server.ts                  # Express app entry point
│   ├── package.json
│   └── tsconfig.json
│
└── Frontend/
    ├── src/
    │   ├── Components/
    │   │   ├── UI/
    │   │   │   ├── Button.tsx
    │   │   │   ├── Card.tsx
    │   │   │   └── CompanyCard.tsx
    │   │   ├── Contact.tsx
    │   │   ├── DashBoardPreview.tsx
    │   │   ├── FeatureSection.tsx
    │   │   ├── Footer.tsx
    │   │   ├── HeroSection.tsx
    │   │   ├── Navbar.tsx
    │   │   ├── SolarSystemCard.tsx
    │   │   ├── Testimonial.tsx
    │   │   └── ProtectedRoute.tsx      # Route protection wrapper
    │   ├── pages/
    │   │   ├── Login.tsx               # Login page
    │   │   ├── Signup.tsx              # Signup page
    │   │   ├── Dashboard.tsx           # Dashboard summary
    │   │   ├── Users.tsx               # User management
    │   │   └── Settings.tsx            # Settings & theme toggle
    │   ├── utils/
    │   │   ├── auth.ts                 # Auth helper functions
    │   │   └── api.ts                  # Axios instance & interceptors
    │   ├── App.tsx                     # Landing page
    │   ├── Router.tsx                  # Route configuration
    │   └── main.tsx                    # App entry point
    ├── package.json
    ├── tailwind.config.js              # Tailwind with dark mode
    └── vite.config.ts
```

## 🚀 Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Backend Setup

1. Navigate to the Backend directory:

   ```bash
   cd Backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   The backend server will start on `http://localhost:5000`

### Frontend Setup

1. Navigate to the Frontend directory:

   ```bash
   cd Frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   The frontend will start on `http://localhost:5173` (or another port if 5173 is busy)

### Quick Start

1. Open two terminal windows
2. In the first terminal:
   ```bash
   cd Backend
   npm install
   npm run dev
   ```
3. In the second terminal:
   ```bash
   cd Frontend
   npm install
   npm run dev
   ```
4. Open your browser and navigate to the URL shown in the frontend terminal (typically `http://localhost:5173`)

## 📡 API Endpoints

### Public Routes

#### POST `/api/auth/signup`

Register a new user

```json
Request Body:
{
  "email": "user@example.com",
  "password": "password123"
}

Response:
{
  "token": "jwt_token_here",
  "user": { "email": "user@example.com" }
}
```

#### POST `/api/auth/login`

Login an existing user

```json
Request Body:
{
  "email": "user@example.com",
  "password": "password123"
}

Response:
{
  "token": "jwt_token_here",
  "user": { "email": "user@example.com" }
}
```

### Protected Routes

All protected routes require an `Authorization` header with a Bearer token:

```
Authorization: Bearer <jwt_token>
```

#### GET `/api/dashboard`

Get dashboard summary data

```json
Response:
{
  "message": "Dashboard data",
  "user": { "email": "user@example.com" }
}
```

## 📸 Screenshots

### Landing Page

The main landing page featuring a pixel-perfect Figma design with hero section, features showcase, and navigation bar.

![Landing Page](Frontend/images/Screenshot%202026-02-16%20030507.png)

---

### Login Page

Clean and minimalist login interface with email/password fields, validation, and signup link. Includes "Back to Home" navigation.

![Login Page](Frontend/images/Screenshot%202026-02-16%20030516.png)

---

### Signup Page

User registration page with form validation, minimum password requirements, and link to login page.

![Signup Page](Frontend/images/Screenshot%202026-02-16%20030550.png)

---

### Dashboard - Light Mode

Dashboard summary page showing user statistics, total users count, and status cards in light theme.

![Dashboard Light Mode](Frontend/images/Screenshot%202026-02-16%20030559.png)

---

### Dashboard - Dark Mode

Same dashboard with dark theme enabled, demonstrating the theme toggle functionality with persistent storage.

![Dashboard Dark Mode](Frontend/images/Screenshot%202026-02-16%20030634.png)

---

### Users Management Page

Comprehensive user management interface with:

- Search functionality (filter by name or email)
- Sorting options (A-Z and Z-A)
- Client-side pagination (5 users per page)
- Data fetched from JSONPlaceholder API

![Users Page](Frontend/images/Screenshot%202026-02-16%20030713.png)

---

### Settings Page

User settings page featuring:

- Profile information form (name and email)
- Dark/Light theme toggle switch
- Auto-navigation to dashboard after saving
- Theme persistence across sessions

![Settings Page](Frontend/images/Screenshot%202026-02-16%20030720.png)

---

### Users Management - Dark Mode

Users table with dark theme activated, showcasing the consistent dark mode styling across the application with proper contrast and readability.

![Users Page Dark Mode](Frontend/images/Screenshot%202026-02-16%20031753.png)

---

### Settings - Dark Mode

Settings page in dark theme, demonstrating the theme toggle in action with dark background and adjusted UI elements for optimal viewing.

![Settings Dark Mode](Frontend/images/Screenshot%202026-02-16%20031809.png)

---

### User Search Functionality

Demonstration of the real-time search feature filtering users by name or email, showing how the table dynamically updates based on search input.

![User Search](Frontend/images/Screenshot%202026-02-16%20031819.png)

---

### Pagination & Navigation

Users table showing pagination controls with multiple pages of data, navigation between pages, and page number indicators for easy data browsing.

![Pagination](Frontend/images/Screenshot%202026-02-16%20031839.png)

## 🤔 Design Decisions & Tradeoffs

### Authentication Strategy

**Decision**: JWT tokens stored in localStorage with 7-day expiry

- **Pros**: Simple implementation, works across tabs, persists on refresh
- **Cons**: Vulnerable to XSS attacks
- **Tradeoff**: For this internship/learning project, simplicity was prioritized. In production, consider httpOnly cookies or more secure token storage.

**Decision**: In-memory user storage (Map)

- **Pros**: Zero database setup, perfect for demo/learning
- **Cons**: Data lost on server restart, not scalable
- **Tradeoff**: Adequate for a proof-of-concept. Production apps should use PostgreSQL, MongoDB, or similar.

### Validation

**Decision**: Zod for schema validation

- **Pros**: Type-safe, simple API, good TypeScript integration
- **Cons**: Adds bundle size
- **Tradeoff**: The DX and safety benefits outweigh the minimal size increase.

**Decision**: Minimal password requirements (4+ characters)

- **Pros**: Easy for testing and demo purposes
- **Cons**: Not secure for production
- **Tradeoff**: Relaxed for development. Production should enforce strong password policies.

### Frontend Architecture

**Decision**: React Router DOM for navigation

- **Pros**: Industry standard, great documentation, feature-rich
- **Cons**: Slightly verbose for simple routing
- **Tradeoff**: Worth it for features like protected routes and navigation guards.

**Decision**: Axios over fetch API

- **Pros**: Interceptors for auth tokens, better error handling, request/response transformation
- **Cons**: Additional dependency
- **Tradeoff**: Interceptors simplified token management significantly.

**Decision**: JSONPlaceholder for user data

- **Pros**: Free, reliable, no backend implementation needed
- **Cons**: Read-only, not real user data
- **Tradeoff**: Perfect for demonstrating UI without building a full CRUD backend.

### Styling & Theming

**Decision**: Tailwind CSS v4 with class-based dark mode

- **Pros**: Utility-first, fast development, consistent design
- **Cons**: Verbose className strings, requires configuration
- **Tradeoff**: Speed of development justified the learning curve.

**Decision**: Theme stored in localStorage

- **Pros**: Persists across sessions, simple implementation
- **Cons**: No server-side preference sync
- **Tradeoff**: Client-side persistence is sufficient for a single-user application.

### Code Organization

**Decision**: Separate controllers, routes, middleware, and validators

- **Pros**: Clear separation of concerns, easy to maintain and test
- **Cons**: More files to navigate
- **Tradeoff**: Scalability and maintainability are worth the initial complexity.

**Decision**: TypeScript for both frontend and backend

- **Pros**: Type safety, better IDE support, catches errors early
- **Cons**: Compilation step, learning curve
- **Tradeoff**: Type safety dramatically reduces runtime errors.

### State Management

**Decision**: React useState/useEffect without global state library

- **Pros**: Simple, no external dependencies, adequate for app size
- **Cons**: Props drilling if app grows, no centralized state
- **Tradeoff**: For this app size, useState is sufficient. Redux/Zustand would be overkill.

### Error Handling

**Decision**: Try-catch blocks with console.error

- **Pros**: Simple error logging
- **Cons**: No user-friendly error messages, no error tracking service
- **Tradeoff**: Adequate for development. Production should add toast notifications and error tracking (Sentry, etc.).

### Security Considerations

**Decision**: CORS enabled for all origins

- **Pros**: Easy development setup
- **Cons**: Security risk in production
- **Tradeoff**: Must be restricted to specific origins before deployment.

**Decision**: No password hashing

- **Pros**: Simplified implementation
- **Cons**: Major security flaw
- **Tradeoff**: Acceptable for learning/demo. Production **must** use bcrypt or argon2.

**Decision**: Hardcoded JWT secret

- **Pros**: No environment setup needed
- **Cons**: Security vulnerability
- **Tradeoff**: Convenient for demo. Production must use environment variables and rotate secrets.

## 📝 License

This is an internship project for learning purposes.

## 👤 Author

Internship Project - Figma Pixel-Perfect Implementation Made by Hritik
