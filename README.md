# 🚗 My Car Project

## 📌 Project Title
My Car – Full Stack Car Management System

---

## 📖 Project Overview

My Car is a full-stack web application built with Next.js, MongoDB (Compass/local), and Bun.  
It allows users to manage a collection of cars with full CRUD operations, search functionality, and a favorite system.

The project demonstrates modern Next.js features like App Router, Server Actions, and API Routes.

---

## 🛠️ Tech Stack Used

### Frontend
- Next.js 15 (App Router)
- React
- TypeScript
- Tailwind CSS

### Backend
- Next.js Route Handlers (API Routes)
- Server Actions

### Database
- MongoDB (Local / MongoDB Compass)
- Mongoose

### Runtime
- Bun

---

## ✨ Features Implemented

### 🚘 Car Management
- Add new car
- Edit car details
- Delete car
- View all cars

### 🔍 Search Feature
- Search cars by model name

### ❤️ Favorites System
- Add / remove favorite cars

### 🖼️ Image Support
- Image URL based display

### 🧑‍💻 Admin Panel
- Full CRUD dashboard
- Manage cars easily

---

## 🚀 How to Run Locally

### 1. Clone Repository
```bash
git clone <your-repo-url>
cd my-car
```

---

### 2. Install Dependencies
```bash
bun install
```

---

### 3. Setup MongoDB (Compass)

Make sure MongoDB is installed and running locally.

Open MongoDB Compass and connect using:

```txt
mongodb://127.0.0.1:27017
```

Create database:

```txt
my-car
```

---

### 4. Environment Variables

Create a `.env.local` file:

```env
MONGODB_URI=mongodb://127.0.0.1:27017/my-car
```

---

### 5. Start Development Server

```bash
bun run dev
```

Open:

```txt
http://localhost:3000
```

---

## 🗄️ Database Setup

1. Install MongoDB Community Server
2. Install MongoDB Compass
3. Start MongoDB service
4. Open Compass → connect:
   ```
   mongodb://127.0.0.1:27017
   ```
5. Create database:
   ```
   my-car
   ```
6. Collections will be created automatically when data is inserted.

---

## 🌐 Routes / Pages

### Public Pages

| Route | Description |
|------|------------|
| `/cars` | View all cars |
| `/cars/[id]` | Car details page |
| `/cars/[id]/edit` | Edit car page |

---

### Admin Pages

| Route | Description |
|------|------------|
| `/admin` | Admin dashboard (add cars) |

---

## 🔌 API Routes

### Cars API

#### Get All Cars
```
GET /api/cars
```

#### Create Car
```
POST /api/cars
```

#### Get Single Car
```
GET /api/cars/[id]
```

#### Update Car
```
PUT /api/cars/[id]
```

#### Delete Car
```
DELETE /api/cars/[id]
```

#### Toggle Favorite
```
PATCH /api/cars/[id]
```

---

## ⚡ Server Actions Used

- `createCar` → Add new car
- `updateCar` → Update car details
- `deleteCar` → Remove car
- `addToFavorite` → Toggle favorite status
- `searchCar` → Search cars by model

---

## 🧠 Concepts Covered

### Next.js
- App Router
- Server Components
- Client Components
- Dynamic Routes
- Route Handlers
- Server Actions
- Search Params
- Params Handling

### React
- useState
- useEffect
- Forms handling
- Events

### Database
- MongoDB CRUD
- Mongoose schema
- Data validation
- Schema design

### Styling
- Tailwind CSS
- Responsive UI

### API
- REST API (GET, POST, PUT, PATCH, DELETE)

---

## ⚠️ Assumptions

- MongoDB is running locally (Compass / Community Server)
- Images are stored as URLs
- No authentication system implemented
- All users can access admin panel

---

## ❗ Limitations

- No login/auth system
- No cloud image upload
- No pagination
- No role-based access control
- Favorites are not user-specific
- Search is only by model name

---

## 🚀 Future Improvements

- Authentication (NextAuth)
- Cloud image upload (Cloudinary)
- Pagination system
- Filtering & sorting
- User accounts system
- Dashboard analytics
- Dark/Light mode

---

## 👨‍💻 Author

My Car Project  
Built using Next.js, MongoDB Compass, Mongoose, Tailwind CSS, and Bun.
