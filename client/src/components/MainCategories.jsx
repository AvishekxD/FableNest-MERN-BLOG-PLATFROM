import { Link } from "react-router-dom"

const MainCategories = () => {
  return (
    <div className="hidden md:flex sticky top-3 z-[999] bg-[var(--primary)] rounded-3xl xl:rounded-full p-4 shadow-[0_0_6px_rgba(0,0,0,0.5)] shadow-zinc-800 items-center justify-center gap-8 backdrop-blur-lg">
        <div className="flex-1 flex items-center justify-between flex-wrap">
            <Link
                to="/posts"
                className="hover:bg-[var(--secondary)] bg-[var(--secondary2)] text-white rounded-full px-4 py-2 hover:scale-105 duration-300"
            >
                All Posts
            </Link>
            <Link
                to="/posts?cat=web-design"
                className="hover:bg-[var(--secondary)] text-white rounded-full px-4 py-2 bg-[var(--secondary2)] hover:scale-105 duration-300"
            >
                Web Design
            </Link>
            <Link
                to="/posts?cat=development"
                className="hover:bg-[var(--secondary)] text-white rounded-full px-4 py-2 bg-[var(--secondary2)] hover:scale-105 duration-300"
            >
                Development
            </Link>
            <Link
                to="/posts?cat=databases"
                className="hover:bg-[var(--secondary)] text-white rounded-full px-4 py-2 bg-[var(--secondary2)] hover:scale-105 duration-300"
            >
                Databases
            </Link>
            <Link
                to="/posts?cat=seo"
                className="hover:bg-[var(--secondary)] text-white rounded-full px-4 py-2 bg-[var(--secondary2)] hover:scale-105 duration-300"
            >
                Search Engines
            </Link>
            {/* <Link
                to="/posts?cat=marketing"
                className="hover:bg-[var(--secondary)] text-white rounded-full px-4 py-2 bg-[var(--secondary2)]"
            >
                Marketing
            </Link> */}
        </div>
        <span className="text-xl font-medium">|</span>
        <div className="bg-[var(--secondary2)] hover:bg-[var(--secondary)] p-2 rounded-full flex items-center gap-2">
            <svg 
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="gray"
            >
                <circle cx="10.5" cy="10.5" r="7.5"/>
                <line x1="16.5" y1="16.5" x2="22" y2="22"/>
            </svg>
            <input type="text" placeholder="search a post..." className="bg-transparent focus:outline-none focus:ring-0"/>
        </div>
        
    </div>
  )
}

export default MainCategories