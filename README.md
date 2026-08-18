# Shades of Ruth

A modern, responsive React e-commerce storefront for beauty products. This project demonstrates a clean frontend implementation with a focus on user experience, product browsing, and a seamless checkout flow.

[Live Demo](https://shadesofruthbackend.web.app/)

## Project Overview

Shades of Ruth is a React application that showcases professional frontend engineering practices. It features a fully functional product catalog, wishlist system, and a multi-step checkout process.

## Key Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop views.
- **Product Discovery**: Dynamic product listing with category filtering.
- **Shopping Cart & Wishlist**: Persistent state management for a smooth shopping experience.
- **Seamless Checkout**: Structured checkout flow with form validation.
- **Admin Dashboard**: Integrated management interface for products and orders (demo/development mode).
- **Global State Management**: Powered by React Context API and Redux.

## Tech Stack

- **Frontend**: React (Hooks, Context API, Redux Toolkit)
- **Styling**: SCSS, Styled Components, Material UI (MUI)
- **Routing**: React Router v6
- **Backend Integration**: Firebase (Authentication, Firestore), Axios
- **Animation**: Animate.css

## Folder Structure

```text
shades/
├── public/                 # Static assets and index.html
├── src/
│   ├── api/                # API configuration and calls
│   ├── assets/             # Global styles and images
│   ├── common/             # Shared theme and data
│   ├── Components/         # Modular React components
│   │   ├── Account/        # User profile and order history
│   │   ├── Admin/          # Management dashboard
│   │   └── Reusable/       # Shared UI elements
│   ├── contexts/           # React Context providers
│   ├── Hooks/              # Custom React hooks
│   ├── redux/              # Global state management
│   ├── App.js              # Routing and entry point
│   └── index.js            # Main React entry
└── package.json            # Dependencies and scripts
```

## Setup & Installation

This project is currently verified on Node 18.20.8 and npm 10.8.2.

### Fresh Apple Silicon Mac onboarding checklist

1. **Install a Node version manager**

   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
   source ~/.nvm/nvm.sh
   ```

2. **Use the repo's verified Node version**

   ```bash
   nvm install 18.20.8
   nvm use 18.20.8
   ```

3. **Clone the repository**

   ```bash
   git clone https://github.com/matildamwendwa/shades.git
   cd shades
   ```

4. **Create your local environment file**

   ```bash
   cp .env.example .env
   ```

   Replace the placeholder values with the real Firebase configuration for your project.
   The app reads these variables from the root-level `.env` file.

5. **Install dependencies**

   ```bash
   npm install --legacy-peer-deps
   ```

   This is the current working install path for this repo. Do not regenerate the lockfile unless you intentionally update dependencies.

6. **Start the development server**

   ```bash
   npm start
   ```

7. **Build for production**

   ```bash
   npm run build
   ```

### Environment file requirements

- The project expects a root-level file named `.env`.
- `.env` is not committed to Git.
- Copy `.env.example` to `.env` and replace the placeholder values with real Firebase project settings.
- The app reads values such as `REACT_APP_FIREBASE_API_KEY`, `REACT_APP_FIREBASE_AUTH_DOMAIN`, and `REACT_APP_FIREBASE_PROJECT_ID` from this file.

### Security notes

- Never commit the real `.env` file.
- Keep Firebase credentials scoped to the correct project and rotate them if they are ever exposed.
- This repo currently has permissive Firestore rules for local/demo usage. Review them before production use.
- The Cloud Functions directory is present as a scaffold only; it is not currently used by the app.

## Firebase Services in Use

- **Authentication**: Firebase Auth for user sign-up / sign-in / session tracking
- **Firestore**: product and user data persistence
- **Storage**: product image uploads and retrieval
- **Hosting**: static frontend deployment via Firebase Hosting

Cloud Functions are scaffolded in the `functions/` directory but are not currently used by the frontend application.

## Development Role

This project was developed as a solo project, focusing on the end-to-end frontend architecture, from UI/UX design implementation to state management and integration with Firebase for backend services.

## Future Improvements

- Migration to TypeScript for enhanced type safety.
- Implementation of unit and integration tests using Jest/React Testing Library.
- Integration with a dedicated payment gateway API (e.g., Stripe).
- Enhanced SEO optimization and performance tuning.
