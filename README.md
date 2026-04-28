# Shades of Ruth

A modern, responsive React e-commerce storefront for beauty products. This project demonstrates a clean frontend implementation with a focus on user experience, product browsing, and a seamless checkout flow.

[Live Demo](https://shadesofruthbackend.web.app/)

## Project Overview
Shades of Ruth is a portfolio-ready React application that showcases professional frontend engineering practices. It features a fully functional product catalog, wishlist system, and a multi-step checkout process.

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

1. **Clone the repository**:
   ```bash
   git clone https://github.com/matildamwendwa/shades.git
   cd shades
   ```

2. **Install dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## Development Role
This project was developed as a solo project, focusing on the end-to-end frontend architecture, from UI/UX design implementation to state management and integration with Firebase for backend services.

## Future Improvements
- Migration to TypeScript for enhanced type safety.
- Implementation of unit and integration tests using Jest/React Testing Library.
- Integration with a dedicated payment gateway API (e.g., Stripe).
- Enhanced SEO optimization and performance tuning.
