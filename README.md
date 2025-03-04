# Socialz - Modern Social Media Web App

## Description
Socialz is a modern social media web application built with Next.js 14 (App Router), leveraging a robust tech stack to provide a seamless and engaging user experience.

[Live Demo](https://socialz-silk.vercel.app/)

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Features
- Full-stack application built with Next.js 14 (App Router)
- Server Components, Layouts, Route Handlers, and Server Actions.
- Efficient data fetching, caching, and revalidation.
- Dynamic and static routes.
- Styled with Tailwind CSS and Shadcn UI components.
- Secure user authentication and authorization using Clerk.
- File uploads managed by UploadThing.
- Database integration with Prisma ORM.
- Optimistic updates for a smooth user experience.

## Prerequisites
- Node.js (v18.0.0 or higher)
- PostgreSQL
- npm

## Installation

### Clone the repository
```bash
git clone https://github.com/ashwin-9/socialz
cd socialz
```

### Install backend dependencies
```bash
npm install
```

### Install frontend dependencies
```bash
cd frontend
npm install
```

## Environment Variables
Create a `.env` file in the root directory with the following variables:

```
DATABASE_URL=your_postgresql_connection_string
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
UPLOADTHING_SECRET=your_uploadthing_secret
UPLOADTHING_APP_ID=your_uploadthing_app_id
```

## Running the Application

### Run Prisma migrations
```bash
npx prisma migrate dev
```

### Start the development server
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Project Structure
```
├── public/                     # Static assets
├── prisma/
│   └── schema.prisma           # Database schema
├── src/
│   ├── actions/                # Server Actions
│   ├── app/                    # Next.js App Router directory
│   │   ├── api/
│   │   │   └── uploadthing/    # UploadThing API routes
│   │   ├── notifications/
│   │   │   └── page.tsx        # Notifications page
│   │   ├── profile/
│   │   │   └── page.tsx        # Profile page
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Home page
│   ├── components/             # Reusable React components
│   │   └── ui/                 # Shadcn UI components
│   ├── lib/                    # Utility functions and libraries
│   └── middleware.ts           # Middleware configuration for Clerk
├── package.json                # Project dependencies
├── README.md                   # Project documentation
├── tailwind.config.ts          # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

## Deployment
The application is deployed on Vercel. Follow these steps to deploy:

1. Link your GitHub repository
2. Configure environment variables
3. Deploy and monitor the build process

## Technologies Used
- Next.js 14
- TypeScript
- PostgreSQL
- Prisma
- Clerk
- Tailwind CSS
- Shadcn UI
- UploadThing

## Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Create a Pull Request