# FableNest - MERN Blogging Platform 📝

FableNest : A full-featured blogging platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js, clerk). This project allows users to create, read, update, and delete blog posts with a seamless user experience.

---

## 🚀 Features Added

- ✍️ Create, edit, and delete blog posts. 
- 👤 User authentication (register/login).  
- 🔐 Implemented Role-Based Authorization across MERN Stack.
- 🗂️ Categorize and filter posts. 
- 💬 Add comments on posts. 
- 📈 Tracked and displayed post view counts per visit.
- 🔄 Infinite scroll with filters.
- 📱 Responsive design for all devices.
- 🔎 Added React 19 search bar with URL param syncing.
- 🧑🏻 Added Profile section for everyone.
- 📈 Added posts, comments, saved and stats(Analytics) section to UserProfiles and for PublicProfiles Added posts, comments and stats sections.
- 🔃 Added Skeletons to Profiles.

---

<img src="/client/public/FableNest-homepage.gif" alt="FableNest-Landingpage" width="800" height="482"/>

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
│   │   ├── analytics.controller.js
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
│   │   ├── analytics.route.js
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
│   │   │   │   ├── skeltons/
│   │   │   │   │   ├── SkeletonCircle.jsx
│   │   │   │   │   ├── SkeletonRect.jsx
│   │   │   │   │   └── SkeletonText.jsx
│   │   │   │   └── ui/
│   │   │   │       ├── background-lines.jsx
│   │   │   │       ├── FeaturedPosts.jsx
│   │   │   │       ├── beckground-breams.tsx
│   │   │   │       ├── flip-words.jsx
│   │   │   │       ├── meteors.jsx
│   │   │   │       ├── placeholders-and-vanish-input.jsx
│   │   │   │       ├── scroll-to-top.jsx
│   │   │   │       ├── text-hover-effect.jsx
│   │   │   │       └── typewriter-effect.jsx
│   │   │   │ 
│   │   │   │ 
│   │   │   ├── Comment.jsx
│   │   │   ├── Comments.jsx
│   │   │   ├── FeaturedPosts.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── HeatmapCalender.jsx
│   │   │   ├── Imag.jsx
│   │   │   ├── MainCategories.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── PostList.jsx
│   │   │   ├── PostListItem.jsx
│   │   │   ├── PostMenuActions.jsx
│   │   │   ├── Search.jsx
│   │   │   ├── SharePost.jsx
│   │   │   ├── SideMenu.jsx
│   │   │   ├── SideMenuSearch.jsx
│   │   │   ├── StatCard.jsx
│   │   │   ├── Upload.jsx
│   │   │   ├── UserBioEditor.jsx
│   │   │   ├── WeeklyStatsChart.jsx
│   │   │   └── YearSelector.jsx
│   │   │
│   │   ├── layouts/
│   │   │   └── MainLayout.jsx
│   │   │
│   │   ├── lib/
│   │   │   ├── shareLinks.js
│   │   │   ├── utils.ts
│   │   │   └── validateInput.js
│   │   │
│   │   ├── routes/
│   │   │   ├── About.jsx
│   │   │   ├── Homepage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   ├── NotFound.jsx
│   │   │   ├── PostListPage.jsx
│   │   │   ├── PublicProfilePage.jsx
│   │   │   ├── RegisterPage.jsx
│   │   │   ├── SinglePostPage.jsx
│   │   │   ├── UserProfilePage.jsx
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