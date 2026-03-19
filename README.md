# Recipely - Recipe Organizer

A full-stack recipe management application built with React + NestJS + PostgreSQL.

## Project Structure

- `frontend/` - React + Vite + Material-UI
- `backend/` - NestJS + TypeORM + PostgreSQL

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- PostgreSQL (or use Supabase)

### Installation
```bash
# Install root dependencies
npm install

# Install all dependencies (frontend + backend)
npm run install:all
```

### Running the App
```bash
# Run both frontend and backend
npm run dev

# Or run separately:
npm run frontend  # React app on http://localhost:5173
npm run backend   # NestJS API on http://localhost:3000
```

### Environment Variables

Create `.env` files in both frontend and backend folders:

**Frontend (.env):**
```
VITE_API_URL=http://localhost:3000
```

**Backend (.env):**
```
DATABASE_URL=your_postgres_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=7d
```

## Tech Stack

**Frontend:**
- React 18
- Material-UI (MUI)
- React Router
- Vite

**Backend:**
- NestJS
- TypeORM
- PostgreSQL
- JWT Authentication
- Passport.js

## Features

- ✅ User authentication (register/login)
- ✅ Responsive landing page
- 🚧 Recipe CRUD operations (coming soon)
- 🚧 Category management (coming soon)
- 🚧 Favorites system (coming soon)

## Author

Victoria Kabahita