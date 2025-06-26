import Imag from "../components/Imag"
import { Link, useParams } from "react-router-dom"
import PostMenuActions from "../components/PostMenuActions"
import Search from "../components/Search"
import Comments from "../components/Comments"
import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import { format } from "timeago.js"

const fetchPost = async (slug) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${slug}`);
  return res.data;
};


const SinglePostPage = () => {

  const { slug } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPost(slug),
  });

  if (isPending) return "loading...";
  if (error) return "Something went wrong!" + error.message;
  if (!data) return "Post not found!";

  return (
    <div className="flex flex-col gap-8 mt-4">
      {/* detial */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
        <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
          {data.title}
        </h1>
        <div className="flex items-center gap-2 text-[var(--Accent)] text-sm">
          <span>Written by</span>
          <Link className="text-indigo-300">{data.user.username}</Link>
          <span>on</span>
          <Link className="text-zinc-200">{data.category}</Link>
          <span>{format(data.createdAt)}</span>
        </div>
        <p className="text-[var(--Accent)] font-medium">
          {data.desc}
        </p>
        </div>
        {data.img && (<div className="hidden lg:block w-2/5">
          <Imag src={data.img} w="800" className="rounded-2xl"/>
        </div>)}
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* text */}
        <div className="lg:text:lg flex flex-col gap-6 text-justify">
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
            <h1 className="mb-4 text-sm font-medium">Author</h1>
            <div className="flex flex-col gap-4 ">
              <div className="flex items-center gap-8">
                {data.user.img && (
                <Imag
                  src={data.user.img}
                  className="w-12 h-12 rounded-full object-cover"
                  w="48"
                  h="48"
                  />
                )}
                  <Link className="text-indigo-300">{data.user.username}</Link>
              </div>
              <p className="text-sm text-zinc-200">Bringing you thoughtful articles and personal experiences.</p>
              <div className="flex gap-2">
                <Link>
                <Imag src="facebook.svg" w="24"/>
                </Link>
                <Link>
                <Imag src="instagram.svg" w="24"/>
                </Link>
              </div>
            </div>
          <PostMenuActions post={data}/>
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" to="/">
              Web Design
            </Link>
            <Link className="underline" to="/">
              Development
            </Link>
            <Link className="underline" to="/">
              Databases
            </Link>
            <Link className="underline" to="/">
              Search Engnies
            </Link>
            <Link className="underline" to="/">
              Marketing
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search/>
        </div>
        </div>
        <Comments postId={data._id}/>
    </div>
  )
}

export default SinglePostPage
