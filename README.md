# 🧑‍💻 Dot Intern

### 🌟 Project Overview

**Dot Intern** is a modern web application built for

Insert Project's Main Purpose Here, e.g., tracking internship applications, listing available intern positions, or managing team projects. It leverages a contemporary frontend stack to deliver a fast, responsive, and aesthetically pleasing user experience.

The application is engineered with a focus on type safety, development speed, and maintainability.

### 🚀 Technology Stack

This project is built using the following technologies:

| Category | Technology | Description |
| :--- | :--- | :--- |
| Framework | React | A declarative, component-based JavaScript library for building user interfaces. |
| Language | TypeScript | Adds static typing to JavaScript, improving code quality and catching errors early. |
| Build Tool | Vite | A fast frontend build tool that significantly improves the developer experience. |
| Styling | Tailwind CSS | A utility-first CSS framework that enables rapid custom UI development. |
| UI Components | shadcn/ui | A collection of beautifully designed, accessible, and customizable components built with Radix UI and Tailwind CSS. |

### 🛠️ Getting Started

Follow these steps to get your development environment set up and running.

#### Prerequisites

You must have the following installed on your system:

Node.js (v22+)

pnpm (recommended package manager for this setup)

#### Installation

1. Clone the repository:
    ```
    git clone https://github.com/dimsmaul/dot-intern.git
    ```
    ```
    cd dot-intern
    ```



2. Install dependencies using pnpm:
    ```
    pnpm install
    ```



3. Set up environment variables:

    Create a .env file in the root directory and add any necessary environment variables. (e.g., API keys, database URLs).

    ```
    VITE_API_URL=""
    VITE_AUTH_API=""
    VITE_SECRET_KEY=
    ```



#### Running the Project

Start the development server with Hot Module Reloading (HMR):
```
pnpm run dev
```


The application will be available at http://localhost:5173 (or the port specified by Vite).

#### Building for Production

To create a production-ready build:
```
pnpm run build
```

The compiled assets will be placed in the dist/ directory.

Code Quality and Linting

Run linters and formatters:

## Linting
pnpm run lint

## Type checking
pnpm run type-check




### 📂 Project Structure

The project follows a component-based structure, separating concerns into modules for better scalability and maintainability:
```
.
├── node_modules/         # Dependencies installed by pnpm
├── public/               # Static assets (images, favicon, etc.)
├── src/
│   ├── assets/           # Images, fonts, and other static files used by components
│   ├── components/       # Small, highly reusable UI elements (e.g., Buttons, Forms, built from shadcn/ui)
│   ├── feature/          # Domain-specific modules, often containing logic, components, and pages for a single feature (e.g., user authentication, dashboard logic)
│   ├── hooks/            # Custom React Hooks for reusable logic
│   ├── layouts/          # Components defining the main application shell and structural elements (e.g., Header, Sidebar, main container)
│   ├── lib/              # Configuration files, constant values, and non-React utility functions
│   ├── router/           # Centralized application routing configuration
│   ├── store/            # Global state management setup (e.g., using Zustand or Redux)
│   ├── utils/            # General utility functions
│   ├── App.tsx           # Main application root component
│   ├── index.css         # Global styles
│   └── main.tsx          # Entry point for React application (renders App.tsx)
├── .env                  # Environment variables
├── components.json       # Configuration file for shadcn/ui
├── package.json          # Project dependencies and scripts
└── ... (other config files)
```



### 🌐 Deployment

The live version of this application is deployed at:

https://dot-intern-frontend.vercel.app/ (Inferred from your GitHub link)

This project is configured for deployment on platforms like Vercel or Netlify. To deploy:

Connect your repository to the hosting platform.

Set the build command to pnpm run build.

Set the publish directory to dist.

### 📄 License


Made with ❤️ by Dimsmaul