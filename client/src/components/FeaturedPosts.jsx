import { Link } from "react-router-dom";
import Imag from "./Imag";

const FeaturedPosts = () => {
  return (
    <div className="mt-16 flex flex-col lg:flex-row gap-8">
      {/* LEFT: Main Featured Post */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* Main Image */}
        <Imag
          src="Little-girl1.jpg"
          className="block md:hidden rounded-3xl object-cover" w="1280"
        />
        <Imag
          src="Little-girl2.jpg"
          className="hidden md:block rounded-3xl object-cover" w="1280"
        />

        {/* Main Post Details */}
        <div className="flex items-center gap-4 mt-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link className="text-zinc-700 lg:text-lg">Photography</Link>
          <span className="text-gray-500">2 Days ago</span>
        </div>

        {/* Main Post Title */}
        <Link
          to="/test"
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          Strings of joy, stories told without words.
        </Link>
      </div>

      {/* RIGHT: Additional Featured Posts */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4 justify-between ">
        {/* SECOND Post */}
        <div className="flex gap-4 lg:h-1/3 justify-between">
          <Imag
            src="ChaiAndCofee.jpg"
            className="rounded-2xl object-cover w-1/3"
            w="765"
          />
          <div className="w-2/3 flex flex-col justify-center">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-2">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-zinc-700">Minimalism</Link>
              <span className="text-zinc-500 text-sm">2 Days ago</span>
            </div>
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-xl lg:text-lg font-medium"
            >
              Warm mornings with chai, coffee, books, peace, and light.
            </Link>
          </div>
        </div>

        {/* THIRD placeholder */}
        <div className="flex gap-4 lg:h-1/3 justify-between">
          <Imag
            src="SideHeadshot1.jpg"
            className="rounded-2xl object-cover w-1/3"
            w="765"
          />
          <div className="w-2/3 flex flex-col justify-center">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-2">
              <h1 className="font-semibold">03.</h1>
              <Link className="text-zinc-700">Productivity</Link>
              <span className="text-zinc-500 text-sm">2 Days ago</span>
            </div>
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-xl lg:text-lg font-medium"
            >
                Focused morning work, fresh ideas and clear thoughts.
            </Link>
          </div>
        </div>

        {/* FOURTH placeholder */}
        <div className="flex gap-4 lg:h-1/3 justify-between">
          <Imag
            src="Ani1.jpg"
            className="rounded-2xl object-cover w-1/3"
            w="765"
          />
          <div className="w-2/3 flex flex-col justify-center">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-2">
              <h1 className="font-semibold">04.</h1>
              <Link className="text-zinc-700">Photography</Link>
              <span className="text-zinc-500 text-sm">3 Days ago</span>
            </div>
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-xl lg:text-lg font-medium"
            >
              Nature stands still under the soft gray sky.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
