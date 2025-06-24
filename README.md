## 📁 Project Structure

```txt
project-root/
├── public/                  # Static files like images, favicon, etc.
├── src/
│   ├── assets/              # Global static assets (e.g. logo, fonts, icons)
│   ├── components/          # Reusable UI components
│   │   ├── ui/              # Atomic components like Button, Input, Card, etc.
│   │   ├── layout/          # Layout components like Navbar, Footer, Sidebar
│   │   └── shared/          # Shared components used across multiple pages
│   ├── pages/               # Page-level components (if not using Next.js)
│   │   └── Home.jsx
│   ├── routes/              # Route configuration (if using react-router)
│   ├── hooks/               # Custom React hooks
│   ├── context/             # React Contexts (Auth, Theme, etc.)
│   ├── services/            # API calls and business logic
│   ├── store/               # Zustand, Redux, or any state management
│   ├── utils/               # Helper functions, validators, etc.
│   ├── constants/           # App-wide constants like URLs, roles, enums
│   ├── config/              # Config files (env config, theme config, etc.)
│   ├── styles/              # Tailwind/base styles, global CSS, SCSS modules
│   ├── App.jsx              # Root component
│   ├── main.jsx             # Entry point (index.js in CRA)
│   └── index.css
├── .env                     # Environment variables
├── .gitignore
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── README.md
└── vite.config.js | next.config.js | webpack.config.js
```
