import { Link } from "react-router-dom"
import Search from "./Search"

const SideMenu = () => {
  return (
    <div className="px-4 h-max sticky top-8">
        <h1 className="mb-4 text-sm font-medium">Search</h1> 
        <Search/>
        <h1 className="mt-8 mb-4 text-sm font-medium">Filter</h1>
        <div className="flex flex-col gap-2 text-sm">
            <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="ripple" value="newest" 
                className="appearance-none w-4 h-4 border-[1.5px] border-zinc-50 cursor-pointer rounded-sm bg-[var(--secondary2)] checked:bg-neutral-100"/>
                Newest
            </label>
            <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="ripple" value="popular" 
                className="appearance-none w-4 h-4 border-[1.5px] border-zinc-50 cursor-pointer rounded-sm bg-[var(--secondary2)] checked:bg-neutral-100"/>
                Most Popular
            </label>
            <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="ripple" value="trending" 
                className="appearance-none w-4 h-4 border-[1.5px] border-zinc-50 cursor-pointer rounded-sm bg-[var(--secondary2)] checked:bg-neutral-100"/>
                Trending
            </label>
            <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="ripple" value="oldest" 
                className="appearance-none w-4 h-4 border-[1.5px] border-zinc-50 cursor-pointer rounded-sm bg-[var(--secondary2)] checked:bg-neutral-100"/>
                Oldest
            </label>
        </div>
        <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>    
        <div className="flex flex-col gap-2 text-sm">
            <Link className="underline cursor-pointer" onClick={()=>handleCategoryChange("general")}>All</Link>
            <Link className="underline cursor-pointer" onClick={()=>handleCategoryChange("web-design")}>Web Design</Link>
            <Link className="underline cursor-pointer" onClick={()=>handleCategoryChange("development")}>Development</Link>
            <Link className="underline cursor-pointer" onClick={()=>handleCategoryChange("databases")}>Databases</Link>
            <Link className="underline cursor-pointer" onClick={()=>handleCategoryChange("seo")}>Search Engines</Link>
            <Link className="underline cursor-pointer" onClick={()=>handleCategoryChange("marketing")}>Marketing</Link>
      </div>    
    </div>
  )
}

export default SideMenu