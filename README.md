# Concert Companion

## Overview

Concert Companion is a full-stack web application designed for concert enthusiasts to track and review the live events they attend. Inspired by platforms like Letterboxd, the app allows users to build a personal concert history, rate performances, write reviews, and view statistics about their concert-going habits.

As an avid concert-goer, I wanted to create a project that combines my passion for live music with software engineering. This project serves as both a personal tool and a demonstration of full-stack development skills.

---

## Features

### User Authentication

* Create an account and securely sign in
* Personalized concert history and statistics

### Concert Tracking

* Log concerts attended
* Record artist, venue, city, and date
* Edit or delete concert entries

### Reviews & Ratings

* Rate concerts on a 1–5 star scale
* Write detailed reviews of performances
* View all past reviews in one place

### Statistics Dashboard

* Total concerts attended
* Number of unique artists seen
* Average concert rating
* Most visited venue
* Interactive charts and visualizations

### Concert Wrapped

* Personalized yearly recap
* Top artists seen
* Favorite venue
* Total concerts attended
* Average rating for the year

---

## Tech Stack

### Frontend

* React
* TypeScript
* Tailwind CSS
* React Router

### Backend

* Node.js
* Express.js

### Database

* PostgreSQL
* Prisma ORM

### Authentication

* Clerk

### Deployment

* Vercel (Frontend)
* Railway (Backend & Database)

---

## Architecture

```text
Frontend (React + TypeScript)
            │
            ▼
     Express REST API
            │
            ▼
    PostgreSQL Database
            │
            ▼
         Prisma ORM
```

---

## Database Schema

### User

```text
id
name
email
```

### Concert

```text
id
artist
venue
city
date
userId
```

### Review

```text
id
rating
reviewText
concertId
```

---

## Learning Objectives

This project was created to strengthen my understanding of:

* Full-stack application development
* REST API design
* Database modeling and relationships
* User authentication and authorization
* Frontend state management
* Data visualization
* Deployment and production workflows

---

## Future Enhancements

* Friend system and social feed
* Concert photo uploads
* Artist search integration
* Spotify integration
* Venue recommendations
* Ticket tracking and budgeting features
* Concert wishlist functionality

---

## Screenshots

### Dashboard

*(Add screenshot here)*

### Concert Log

*(Add screenshot here)*

### Statistics Page

*(Add screenshot here)*

### Concert Wrapped

*(Add screenshot here)*

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/yourusername/concert-companion.git
cd concert-companion
```

### Install Dependencies

Frontend:

```bash
npm install
```

Backend:

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file and add:

```env
DATABASE_URL=
CLERK_SECRET_KEY=
CLERK_PUBLISHABLE_KEY=
```

### Run the Application

Frontend:

```bash
npm run dev
```

Backend:

```bash
npm run dev
```

---

## Author

Created by Dani Navarro as a personal software engineering project that combines a passion for live music and concert experiences with full-stack web development.
