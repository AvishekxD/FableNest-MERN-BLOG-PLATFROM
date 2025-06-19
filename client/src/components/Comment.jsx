import Imag from "./Imag"

const Comment = () => {
  return (
    <div className="p-4 bg-[var(--secondary)] rounded-xl mb-7">
        <div className="flex items-center gap-4">
            <Imag src="UserImage.jpg" className="w-10 h-10 rounded-full object-cover" w="40"/>
            <span className="font-medium">John Doe</span>
            <span>2 Days ago</span>
        </div>
        <div className="mt-4">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis nostrum ex reprehenderit. Lorem, ipsum dolor.</p>
        </div>
    </div>
  )
}

export default Comment