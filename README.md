# FableNest - MERN Blogging Platform 📝

FableNest : A full-featured blogging platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js, clerk). This project allows users to create, read, update, and delete blog posts with a seamless user experience.

---

## 🚀 Features Added

- ✍️ Create, edit, and delete blog posts  
- 👤 User authentication (register/login)  
- 🔐 Implemented Role-Based Authorization across MERN Stack
- 🗂️ Categorize and filter posts  
- 💬 Add comments on posts  
- 📈 Tracked and displayed post view counts per visit
- 🔄 Infinite scroll with filters
- 📱 Responsive design for all devices  
- 🔎 Added React 19 search bar with URL param syncing

---

## 📌 Project Status

🧬 This project is still under construction, but it will be finished later.

<img src="https://i.pinimg.com/originals/67/60/90/6760900d6e002a489f5a9b43cf3c280f.gif" alt="Under Construction" width="600" height="430"/>

---

## 🛠️ Tech Stack

### Frontend (`client/`)
- React.js  
- Axios  
- React Router DOM  
- TailwindCSS  
- Motion
- Clerk
- ImageKit(for Image Optimization)

### Backend (`backend/`)
- Node.js  
- Express.js  
- MongoDB with Mongoose  
- JWT for authentication
- Bcrypt for password hashing

---

## 📁 Folder Structure

```txt
MERN-BLOGGING-PLATFORM/
│
├── backend/
│   ├── controllers/
│   │   ├── comment.controller.js
│   │   ├── post.controller.js
│   │   ├── user.controller.js
│   │   └── webhook.controller.js
│   │
│   ├── lib/
│   │   └── connectDB.js
│   │
│   ├── middlewares/
│   │   └── increaseVisit.js
│   │
│   ├── models/
│   │   ├── comment.model.js
│   │   ├── post.model.js
│   │   └── user.model.js
│   │
│   ├── routes/
│   │   ├── comment.route.js
│   │   ├── post.route.js
│   │   ├── user.route.js
│   │   └── webhook.route.js
│   │
│   ├── .env
│   ├── .gitignore
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
│
├── client/
│   ├── public/
│   ├── node_modules/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   │    ├── ui/
│   │   │   │   ├── background-lines.jsx
│   │   │   │   ├── FeaturedPosts.jsx
│   │   │   │   └── flip-words.jsx
│   │   │   │ 
│   │   │   ├── Comment.jsx
│   │   │   ├── Comments.jsx
│   │   │   ├── FeaturedPosts.jsx
│   │   │   ├── Imag.jsx
│   │   │   ├── MainCategories.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── PostList.jsx
│   │   │   ├── PostListItem.jsx
│   │   │   ├── PostMenuActions.jsx
│   │   │   ├── Search.jsx
│   │   │   ├── SideMenu.jsx
│   │   │   └── Upload.jsx
│   │   │
│   │   ├── layouts/
│   │   │   └── MainLayout.jsx
│   │   │
│   │   ├── lib/
│   │   │   └── utils.ts
│   │   │
│   │   ├── routes/
│   │   │   ├── Homepage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   ├── PostListPage.jsx
│   │   │   ├── RegisterPage.jsx
│   │   │   ├── SinglePostPage.jsx
│   │   │   └── Write.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── .env
│   ├── .gitignore
│   ├── index.html
│   ├── eslint.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── vite.config.js
│   ├── package.json
│   ├── package-lock.json
│   └── README.md
│
└── README.md
```
### 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.