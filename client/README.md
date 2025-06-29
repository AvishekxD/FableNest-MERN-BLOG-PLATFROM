# Frontend of FableNest 🎈

<img src="/client/public/FableNest-homepage.gif" alt="FableNest-Landingpage" width="700" height="402"/>

---

## 🛠️ Tech Stack - Frontend (`client/`)
- React.js  
- Axios  
- React Router DOM  
- TailwindCSS  
- Motion
- Clerk
- ImageKit(for Image Optimization)

---

## 🧪 Getting Started

```txt
1. Install dependencies

cd client
npm install 

2. Other dependencies and component Used

npm i react-router-dom
npm install @imagekit/react
npm install @clerk/clerk-react
npm i motion clsx tailwind-merge
npm i react-quill-new 
npm i svix
npm i body-parser
npm i @clerk/express
npm i @tanstack/react-query
npm i axios
npm i cors
npm i react-toastify
npm i react-infinite-scroll-component
npm i timeago.js


2. Run development server

npm run dev

if you want to access in Smartphone

On your PC, open Command Prompt or Terminal: ipconifg
Look for your IPv4 address, e.g.: IPv4 Address. . . . . . . . . . : 192.168.1.10

npm run dev -- --host

In -> vite.config.js

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5173
  }
});

http://192.168.1.10:5173
```
---

## 📁 Folder Structure

```txt
client/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── background-lines.jsx
│   │   │   ├── FeaturedPosts.jsx
│   │   │   └── flip-words.jsx
│   │   │ 
│   │   ├── Comment.jsx
│   │   ├── Comments.jsx
│   │   ├── FeaturedPosts.jsx
│   │   ├── Imag.jsx
│   │   ├── MainCategories.jsx
│   │   ├── Navbar.jsx
│   │   ├── PostList.jsx
│   │   ├── PostListItem.jsx
│   │   ├── PostMenuActions.jsx
│   │   ├── Search.jsx
│   │   ├── SideMenu.jsx
│   │   └── Upload.jsx
│   │ 
│   ├── layouts/
│   │   └── MainLayout.jsx
│   │
│   ├── lib/
│   │   └── utils.ts
│   │
│   ├── routes/
│   │   ├── Homepage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── PostListPage.jsx
│   │   ├── RegisterPage.jsx
│   │   ├── SinglePostPage.jsx
│   │   └── Write.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```
---