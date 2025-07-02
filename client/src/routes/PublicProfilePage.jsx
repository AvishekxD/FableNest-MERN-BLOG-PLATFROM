import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Meteors } from "../components/ui/meteors";
import ReactMarkdown from "react-markdown";
import { useUser } from "@clerk/clerk-react";

function stripHtml(html) {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
}

const PublicProfilePage = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const { user: clerkUser } = useUser();

  const [userData, setUserData] = useState(null);
  const [section, setSection] = useState("posts");
  const [userPosts, setUserPosts] = useState([]);
  const [userComments, setUserComments] = useState([]);
  const [loading, setLoading] = useState(false);

  const isSelf = clerkUser?.username === username;

  useEffect(() => {
    const fetchUser = async () => {
        if (isSelf) {
            navigate("/profile");
            return;
        }
        try {
            setLoading(true);
            const res = await axios.get(
            `${import.meta.env.VITE_API_URL}/users/username/${username}`
            );
            setUserData(res.data);

            const postRes = await axios.get(
            `${import.meta.env.VITE_API_URL}/posts/user/${res.data._id}`
            );
            setUserPosts(postRes.data);

            const commentRes = await axios.get(
            `${import.meta.env.VITE_API_URL}/comments/user/${res.data._id}`
            );
            setUserComments(commentRes.data);
        } catch (err) {
            navigate("/not-found");
        } finally {
            setLoading(false);
        }
        };
        fetchUser();
    }, [username, navigate, isSelf]);

  if (!userData)
    return <div className="text-center py-10">Loading profile...</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
        <div className="relative overflow-hidden flex flex-col md:flex-row items-center gap-4 mb-8 justify-between bg-[var(--secondary4)] rounded-xl p-8">
            <div className="flex flex-col md:flex-row gap-4 items-center">
            <img
                src={userData.img || "/default-avatar.png"}
                alt="User Avatar"
                className="w-24 h-24 rounded-full object-cover shadow-md z-10"
                onError={(e) => (e.target.src = "/default-avatar.png")}
            />
            <div className="text-center md:text-left z-10">
                <h2 className="text-2xl font-semibold">
                {userData.username}
                {isSelf && (
                    <span className="text-xs text-green-400 ml-2 font-normal">
                    (You)
                    </span>
                )}
                </h2>
                {userData.email && (
                <p className="text-muted-foreground">{userData.email}</p>
                )}
                <p className="text-sm text-muted-foreground">
                Member since:{" "}
                {new Date(userData.createdAt).toLocaleDateString()}
                </p>
            </div>
            </div>
                <Meteors number={20} className="block md:hidden" />

            {/* Bio */}
            <div className="z-10 mb-2">
                <label className="text-sm font-medium text-[var(--Accent3)] mb-1 block text-center md:text-start">
                    Bio
                </label>
            <div className="p-4 md:p-0 max-w-[320px] bg-[var(--secondary5)] md:bg-[var(--secondary4)] transition ease-in-out rounded-md text-muted-foreground whitespace-pre-wrap text-sm prose prose-invert">
                <ReactMarkdown>
                {userData.bio?.trim() ? userData.bio : "No bio available."}
                </ReactMarkdown>
            </div>

            {isSelf && (
                <div className="mt-4 text-center md:text-left">
                <button
                    onClick={() => navigate("/profile")}
                    className="text-sm font-medium text-blue-400 hover:underline"
                >
                    Go to My Profile
                </button>
                </div>
            )}
            </div>
        </div>

      {/* Section Switch */}
      <div className="relative overflow-hidden flex gap-3 justify-center md:justify-start mb-6 bg-[var(--secondary4)] rounded-xl p-6">
        {["posts", "comments"].map((item) => (
          <button
            key={item}
            onClick={() => setSection(item)}
            className={`px-4 py-2 text-sm rounded-md capitalize transition-colors z-10 ${
              section === item
                ? "bg-neutral-800 text-white"
                : "bg-muted text-muted-foreground hover:bg-[var(--secondary)]"
            }`}
          >
            {item}
          </button>
        ))}
        <Meteors number={20} className="hidden md:block" />
      </div>

      {/* Content */}
      <div className="min-h-[200px] rounded-xl bg-[var(--secondary4)] p-6">
        {loading ? (
          <p className="text-muted-foreground">Loading...</p>
        ) : section === "posts" ? (
          <>
            <h3 className="text-xl font-semibold mb-2">
              Posts by {userData.username}
            </h3>
            {userPosts.length === 0 ? (
              <p className="text-muted-foreground">No posts yet.</p>
            ) : (
              <ul className="grid md:grid-cols-2 gap-4 mt-4">
                {userPosts.map((post) => {
                  const previewText = stripHtml(
                    post.summary || post.content || ""
                  );
                  const shortPreview =
                    previewText.length > 100
                      ? previewText.slice(0, 100) + "..."
                      : previewText;

                  return (
                    <li
                      key={post._id}
                      onClick={() => navigate(`/${post.slug}`)}
                      className="p-4 bg-[var(--secondary5)] rounded-md shadow hover:bg-[var(--secondary2)] cursor-pointer"
                    >
                      <h4 className="font-semibold">{post.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {shortPreview}
                      </p>
                    </li>
                  );
                })}
              </ul>
            )}
          </>
        ) : (
          <>
            <h3 className="text-xl font-semibold mb-2">Comments</h3>
            {userComments.length === 0 ? (
              <p className="text-muted-foreground">No comments yet.</p>
            ) : (
              <ul className="grid gap-4 mt-4">
                {userComments.map((comment) => (
                  <li
                    key={comment._id}
                    className="p-4 bg-[var(--secondary5)] rounded-md shadow hover:shadow-md"
                  >
                    <p className="text-sm text-muted-foreground">
                      {new Date(comment.createdAt).toLocaleString()}
                    </p>
                    {comment.post && (
                      <p
                        onClick={() => navigate(`/${comment.post.slug}`)}
                        className="text-sm font-semibold text-blue-400 cursor-pointer hover:underline"
                      >
                        Commented on: {comment.post.title}
                      </p>
                    )}
                    <p className="text-base mt-2 text-white">
                      {(typeof comment.desc === "string" &&
                        comment.desc.trim()) ||
                        "No comment found"}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default PublicProfilePage;
