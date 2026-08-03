# Enterprise Graphic Design Agency Website

An enterprise-level Graphic Design Agency website built with **React**, **Vite**, and **React Router**.

The project is designed using a scalable frontend architecture that supports future expansion into:

- Client Dashboard
- Admin Panel
- Authentication
- Portfolio Management
- Blog Management
- Booking System
- CMS Integration

The goal is to maintain a clean, modular, and enterprise-ready codebase.

---

# Technology Stack

| Technology        | Purpose                   |
|-------------------|---------------------------|
| React             | UI Library                |
| Vite              | Build Tool                |
| React Router DOM  | Client-side Routing       |
| JavaScript (ES6+) | Programming Language      |
| CSS               | Global Styling            |
| Tailwind CSS      | Utility-first Styling     |
| Framer Motion     | Page & Section Animations |

---

# Project Structure

```text
src/
│
├── app/
│   ├── App.jsx
│   ├── main.jsx
│   └── providers.jsx
│
├── routes/
│
├── layouts/
│
├── pages/
│
├── sections/
│
├── components/
│
├── assets/
│
├── hooks/
│
├── services/
│
├── constants/
│
├── utils/
│
├── animations/
│
├── styles/
│
└── index.css
```

---

# Current Features

## Application

- React + Vite setup
- BrowserRouter configuration
- Global Providers
- Centralized App Router

---

## Routing

- Modular routing architecture
- Public route configuration
- Route status management
- Dynamic page rendering

---

## Layout

- MainLayout
- React Router Outlet support

---

## Pages

### Public

- Home

### System

- Coming Soon
- Temporarily Unavailable

### Errors

- 404 Not Found

---

# Route Status System

Each route is controlled using a status value.

Example:

```js
{
    path: "/",
    element: Home,
    status: "active"
}
```

Supported Status

| Status      | Description                               |
|-------------|---------------------------------------|
| active      | Page is available                     |
| coming-soon | Displays Coming Soon page             |
| maintenance | Displays Temporarily Unavailable page |

This allows unfinished pages to be added safely without breaking the application.

---

# Routing Architecture

```
Browser

↓

main.jsx

↓

Providers

↓

App

↓

AppRouter

↓

PublicRoutes

↓

MainLayout

↓

StatusRoute

↓

Page
```

---

# Available Scripts

Install dependencies

```bash
npm install
```

Start development server

```bash
npm run dev
```

Create production build

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

Run ESLint

```bash
npm run lint
```

---

# Coding Principles

This project follows:

- Single Responsibility Principle (SRP)
- Modular Architecture
- Reusable Components
- Separation of Concerns
- Scalable Folder Structure
- Enterprise Routing Pattern

---

# Future Modules

## Public Website

- Home
- About
- Services
- Portfolio
- Case Studies
- Pricing
- Process
- Testimonials
- Blog
- Resources
- Contact

---

## Authentication

- Login
- Register
- Forgot Password
- Reset Password

---

## Client Dashboard

- Dashboard
- Projects
- Orders
- Files
- Messages
- Payments
- Meetings
- Settings

---

## Admin Panel

- Dashboard
- Clients
- Portfolio
- Blog
- Services
- Resources
- Orders
- Analytics
- Media Library
- SEO
- Settings

---

# Browser Support

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

Latest stable versions are recommended.

---

# Author

**Yogesh Lilake**

Frontend Developer

Built with React + Vite using an enterprise-level scalable architecture.