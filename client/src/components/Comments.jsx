import axios from "axios";
import Comment from "./Comment"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuth, useUser } from "@clerk/clerk-react";
import { toast } from "react-toastify";


const fetchComments = async (postId) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/comments/${postId}`
  );
  return res.data;
};

const Comments = ({ postId }) => {

  const { user } = useUser();
  const { getToken } = useAuth();

  const { isPending, error, data } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => fetchComments(postId),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (newComment) => {
      const token = await getToken();
      return axios.post(
        `${import.meta.env.VITE_API_URL}/comments/${postId}`,
        newComment,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
    },
    onError: (error) => {
      toast.error(error.response.data);
    },
  });

  if (isPending) return "loading...";
  if (error) return "Something went wrong!" + error.message;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      desc: formData.get("desc"),
    };

    mutation.mutate(data);
  };

  return (
    <div className="flex flex-col gap-8 lg:w-3/5 mb-12">
        <h1 className="text-xl text-[var(--Accent)] underline">Comments</h1>
          <form
            onSubmit={handleSubmit}
            className="flex items-center justify-between gap-8 w-full"
          >
            <div className="flex items-center justify-between gap-3 w-full">
              <textarea name="desc" placeholder="Share your thoughts..." className="w-full p-4 rounded-xl border focus:ring-1 ring-[0.5px] ring-[var(--Accent2)] border-[var(--secondary)]"/>
              <button className="bg-[var(--secondary)] hover:bg-[var(--Accent2)] font-medium rounded-xl px-10 py-4 cursor-pointer duration-200 hover:scale-105">Send</button>
            </div>
          </form>
        {isPending ? (
            "Loading..." 
            ) : error ? (
            "Error loading comments!"
          ) : (
           <>
            {mutation.isPending && (
              <Comment
                comment={{
                  desc: `${mutation.variables.desc} (Sending...)`,
                  createdAt: new Date(),
                  user: {
                    img: user.imageUrl,
                    username: user.username,
                  },
                }}
              />
            )}

            {data.map((comment) => (
              <Comment key={comment._id} comment={comment} postId={postId} />
            ))}
          </>
        )}
    </div>
  )
}

export default Comments