import { Link } from "react-router-dom";
import Imag from "./Imag";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { format } from "timeago.js";

const fetchPost = async () => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/posts?featured=true&limit=4&sort=newest`
  );
  return res.data;
};

const FeaturedPosts = () => {

  const { isPending, error, data } = useQuery({
    queryKey: ["featuredPosts"],
    queryFn: () => fetchPost(),
  });

  if (isPending) return "loading...";
  if (error) return "Something went wrong!" + error.message;

  const posts = data.posts;
  if (!posts || posts.length === 0) {
    return;
  }

  return (
    <div className="lg:mt-18 md:mt-16 flex flex-col lg:flex-row gap-8">
      {/* LEFT: Main Featured Post */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* Main Image */}
        {posts[0] && (<Imag
          src={posts[0].img}
          className="block md:hidden rounded-3xl object-cover" w="1280" h="850"
        />)}
        {posts[0] && ( <Imag
          src={posts[0].img}
          className="hidden md:block rounded-3xl object-cover" w="1280" h="850"
        />)}

        {/* Main Post Details */}
        <div className="flex items-center gap-4 mt-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link className="text-zinc-700 lg:text-lg">{posts[0].category}</Link>
          <span className="text-gray-500">{format(posts[0].createdAt)}</span>
        </div>

        {/* Main Post Title */}
        <Link
          to={posts[0].slug}
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          {posts[0].title}
        </Link>
      </div>

      {/* RIGHT: Additional Featured Posts */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4 justify-between">
        {/* SECOND Post */}
        {posts[1].img && <div className="flex gap-4 lg:h-1/3 justify-between w-full">
          {/* {posts[1].img && <div className="w-1/3 aspect-video"> */}
          <Imag
            src={posts[1].img}
            className="rounded-2xl object-cover w-1/3"
            w="765" h="500"
          />
          {/* </div>} */}
          <div className="w-2/3 flex flex-col justify-center">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-2">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-zinc-700">{posts[1].category}</Link>
              <span className="text-zinc-500 text-sm">{format(posts[1].createdAt)}</span>
            </div>
            <Link
              to={posts[1].slug}
              className="text-base sm:text-lg md:text-xl lg:text-lg font-medium"
            >
              {posts[1].title}
              <p className="line-clamp-2 text-[16px] text-[var(--Accent3)] ">
                {posts[1].desc}
              </p>
            </Link>
          </div>
        </div>}

        {/* THIRD placeholder */}
        {posts[2].img && <div className="flex gap-4 lg:h-1/3 justify-between">
          {/* {posts[2].img && <div className="w-1/3 aspect-video"> */}
          <Imag
            src={posts[2].img}
            className="rounded-2xl object-cover w-1/3"
            w="765" h="500"
          />
          {/* </div>} */}
          <div className="w-2/3 flex flex-col justify-center">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-2">
              <h1 className="font-semibold">03.</h1>
              <Link className="text-zinc-700">{posts[2].category}</Link>
              <span className="text-zinc-500 text-sm">{format(posts[2].createdAt)}</span>
            </div>
            <Link
              to={posts[2].slug}
              className="text-base sm:text-lg md:text-xl lg:text-lg font-medium"
            >
              {posts[2].title}
              <p className="line-clamp-2 text-[16px] text-[var(--Accent3)] ">
                {posts[2].desc}
              </p>
            </Link>
          </div>
        </div>}

        {/* FOURTH placeholder */}
        {posts[3] && <div className="flex gap-4 lg:h-1/3 justify-between">
          {/* {posts[3].img && <div className="w-1/3 aspect-video"> */}
          <Imag
            src={posts[3].img}
            className="rounded-2xl object-cover w-1/3"
            w="765" h="500"
          />
          {/* </div>} */}
          <div className="w-2/3 flex flex-col justify-center">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-2">
              <h1 className="font-semibold">04.</h1>
              <Link className="text-zinc-700">{posts[3].category}</Link>
              <span className="text-zinc-500 text-sm">{format(posts[3].createdAt)}</span>
            </div>
            <Link
              to={posts[3].slug}
              className="text-base sm:text-lg md:text-xl lg:text-lg font-medium"
            >
              {posts[3].title}
              <p className="line-clamp-2 text-[16px] text-[var(--Accent3)] ">
                {posts[3].desc}
              </p>
            </Link>
          </div>
        </div>}
      </div>
    </div>
  );
};

export default FeaturedPosts;
