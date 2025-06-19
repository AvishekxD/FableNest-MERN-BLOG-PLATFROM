import Imag from "../components/Imag"
import { Link } from "react-router-dom"
import PostMenuActions from "../components/PostMenuActions"
import Search from "../components/Search"
import Comments from "../components/Comments"

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8 mt-4">
      {/* detial */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
        <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <div className="flex items-center gap-2 text-[var(--Accent)] text-sm">
          <span>Written by</span>
          <Link className="text-indigo-300">John Doe</Link>
          <span>on</span>
          <Link>Photography</Link>
          <span>2 Days ago</span>
        </div>
        <p className="text-[var(--Accent)] font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dicta, accusantium 
          quod recusandae dolorem temporibus expedita praesentium dolore repellendus labore 
          nam voluptates ipsa molestias, velit laudantium consequuntur! Expedita facere labore 
          iure accusantium!
        </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Imag src="Sunset.jpg" w="800" className="rounded-2xl"/>
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* text */}
        <div className="lg:text:lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus eaque eligendi unde. 
            Perferendis ipsa rerum fugiat necessitatibus sunt similique nostrum libero asperiores qui dolores 
            magnam dolore consequuntur quam odio nemo, facilis repellendus, quidem dignissimos exercitationem 
            expedita voluptas sequi, totam corrupti! Placeat recusandae deserunt mollitia sint quasi nobis 
            molestiae modi aliquid quod aliquam, suscipit quo vel neque adipisci excepturi delectus quidem, 
            provident repudiandae itaque eligendi, molestias est. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Distinctio ex pariatur fuga odio officia ullam, veniam quia similique labore culpa? Lorem 
            ipsum dolor sit amet consectetur adipisicing elit. Recusandae, corrupti?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus eaque eligendi unde. 
            Perferendis ipsa rerum fugiat necessitatibus sunt similique nostrum libero asperiores qui dolores 
            magnam dolore consequuntur quam odio nemo, facilis repellendus, quidem dignissimos exercitationem 
            expedita voluptas sequi, totam corrupti! Placeat recusandae deserunt mollitia sint quasi nobis 
            molestiae modi aliquid quod aliquam, suscipit quo vel neque adipisci excepturi delectus quidem, 
            provident repudiandae itaque eligendi, molestias est. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Distinctio ex pariatur fuga odio officia ullam, veniam quia similique labore culpa? Lorem 
            ipsum dolor sit amet consectetur adipisicing elit. Recusandae, corrupti?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus eaque eligendi unde. 
            Perferendis ipsa rerum fugiat necessitatibus sunt similique nostrum libero asperiores qui dolores 
            magnam dolore consequuntur quam odio nemo, facilis repellendus, quidem dignissimos exercitationem 
            expedita voluptas sequi, totam corrupti! Placeat recusandae deserunt mollitia sint quasi nobis 
            molestiae modi aliquid quod aliquam, suscipit quo vel neque adipisci excepturi delectus quidem, 
            provident repudiandae itaque eligendi, molestias est. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Distinctio ex pariatur fuga odio officia ullam, veniam quia similique labore culpa? Lorem 
            ipsum dolor sit amet consectetur adipisicing elit. Recusandae, corrupti?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus eaque eligendi unde. 
            Perferendis ipsa rerum fugiat necessitatibus sunt similique nostrum libero asperiores qui dolores 
            magnam dolore consequuntur quam odio nemo, facilis repellendus, quidem dignissimos exercitationem 
            expedita voluptas sequi, totam corrupti! Placeat recusandae deserunt mollitia sint quasi nobis 
            molestiae modi aliquid quod aliquam, suscipit quo vel neque adipisci excepturi delectus quidem, 
            provident repudiandae itaque eligendi, molestias est. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Distinctio ex pariatur fuga odio officia ullam, veniam quia similique labore culpa? Lorem 
            ipsum dolor sit amet consectetur adipisicing elit. Recusandae, corrupti?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus eaque eligendi unde. 
            Perferendis ipsa rerum fugiat necessitatibus sunt similique nostrum libero asperiores qui dolores 
            magnam dolore consequuntur quam odio nemo, facilis repellendus, quidem dignissimos exercitationem 
            expedita voluptas sequi, totam corrupti! Placeat recusandae deserunt mollitia sint quasi nobis 
            molestiae modi aliquid quod aliquam, suscipit quo vel neque adipisci excepturi delectus quidem, 
            provident repudiandae itaque eligendi, molestias est. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Distinctio ex pariatur fuga odio officia ullam, veniam quia similique labore culpa? Lorem 
            ipsum dolor sit amet consectetur adipisicing elit. Recusandae, corrupti?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus eaque eligendi unde. 
            Perferendis ipsa rerum fugiat necessitatibus sunt similique nostrum libero asperiores qui dolores 
            magnam dolore consequuntur quam odio nemo, facilis repellendus, quidem dignissimos exercitationem 
            expedita voluptas sequi, totam corrupti! Placeat recusandae deserunt mollitia sint quasi nobis 
            molestiae modi aliquid quod aliquam, suscipit quo vel neque adipisci excepturi delectus quidem, 
            provident repudiandae itaque eligendi, molestias est. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Distinctio ex pariatur fuga odio officia ullam, veniam quia similique labore culpa? Lorem 
            ipsum dolor sit amet consectetur adipisicing elit. Recusandae, corrupti?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus eaque eligendi unde. 
            Perferendis ipsa rerum fugiat necessitatibus sunt similique nostrum libero asperiores qui dolores 
            magnam dolore consequuntur quam odio nemo, facilis repellendus, quidem dignissimos exercitationem 
            expedita voluptas sequi, totam corrupti! Placeat recusandae deserunt mollitia sint quasi nobis 
            molestiae modi aliquid quod aliquam, suscipit quo vel neque adipisci excepturi delectus quidem, 
            provident repudiandae itaque eligendi, molestias est. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Distinctio ex pariatur fuga odio officia ullam, veniam quia similique labore culpa? Lorem 
            ipsum dolor sit amet consectetur adipisicing elit. Recusandae, corrupti?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus eaque eligendi unde. 
            Perferendis ipsa rerum fugiat necessitatibus sunt similique nostrum libero asperiores qui dolores 
            magnam dolore consequuntur quam odio nemo, facilis repellendus, quidem dignissimos exercitationem 
            expedita voluptas sequi, totam corrupti! Placeat recusandae deserunt mollitia sint quasi nobis 
            molestiae modi aliquid quod aliquam, suscipit quo vel neque adipisci excepturi delectus quidem, 
            provident repudiandae itaque eligendi, molestias est. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Distinctio ex pariatur fuga odio officia ullam, veniam quia similique labore culpa? Lorem 
            ipsum dolor sit amet consectetur adipisicing elit. Recusandae, corrupti?
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
            <h1 className="mb-4 text-sm font-medium">Author</h1>
            <div className="flex flex-col gap-4 ">
              <div className="flex items-center gap-8">
                  <Imag 
                    src="Author.jpg" 
                    className="w-12 h-12 rounded-full object-cover" 
                    w="48" 
                    h="48"
                  />
                  <Link className="text-indigo-300">John Doe</Link>
              </div>
              <p className="text-sm text-zinc-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <div className="flex gap-2">
                <Link>
                <Imag src="facebook.svg" w="24"/>
                </Link>
                <Link>
                <Imag src="instagram.svg" w="24"/>
                </Link>
              </div>
            </div>
          <PostMenuActions/>
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
        <Comments />
    </div>
  )
}

export default SinglePostPage
