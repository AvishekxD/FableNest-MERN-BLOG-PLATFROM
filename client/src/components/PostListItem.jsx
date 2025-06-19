import { Link } from "react-router-dom"
import Imag from "./Imag"

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
        {/* image */}
        <div className="md:hidden xl:block xl:w-2/3">
            <Imag src="Building1.jpg" className="rounded-2xl object-cover" w="750"/>
        </div>
        {/* details */}
        <div className="flex flex-col gap-4 xl:w-3/3">
            <Link to="/test" className="text-4xl font-semibold">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi similique porro ducimus.
            </Link>
            <div className="flex items-center gap-2 text-zinc-700 text-sm">
                <span>Written by</span>
                <Link className="text-zinc-200">John Doe</Link>
                <span>on</span>
                <Link className="">Photography</Link>
                <span>2 Days ago</span>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Cupiditate voluptatibus quis eveniet, reiciendis delectus, 
                labore beatae deleniti exercitationem nam, aspernatur asperiores esse!
            </p>
            <Link to="/test" className="underline text-indigo-200 text-sm">Read More</Link>
        </div>
    </div>
  )
}

export default PostListItem