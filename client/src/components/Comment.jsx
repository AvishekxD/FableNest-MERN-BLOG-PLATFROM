import Imag from "./Imag";
import { format } from "timeago.js";

const Comment = ({ comment }) => {
  return (
    <div className="p-4 bg-[var(--secondary)] rounded-xl mb-5">
        <div className="flex items-center gap-4">
            { comment.user.Img && ( <Imag src={comment.user.Img} className="w-10 h-10 rounded-full object-cover" w="40"/>)}
            <span className="font-medium">{comment.user.username}</span>
            <span>{format(comment.createdAt)}</span>
        </div>
        <div className="mt-4">
            <p>{comment.desc}</p>
        </div>
    </div>
  )
}

export default Comment