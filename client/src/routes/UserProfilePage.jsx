import { useEffect, useState } from "react";
import { useUser, useAuth } from "@clerk/clerk-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserBioEditor from "../components/UserBioEditor";
import { Meteors } from "../components/ui/meteors";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";

function stripHtml(html) {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
}

const UserProfilePage = () => {
  const [section, setSection] = useState("posts");
  const [savedPosts, setSavedPosts] = useState([]);
  const [savedPostDetails, setSavedPostDetails] = useState([]);
  const [userComments, setUserComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userPosts, setUserPosts] = useState([]);

  const { user } = useUser();
  const { getToken } = useAuth();
  const navigate = useNavigate();
  const QueryClient = useQueryClient();
  const role = user?.publicMetadata?.role;

  useEffect(() => {
    if (!user || !user.publicMetadata?.mongoId) return;

    const fetchSavedPosts = async () => {
      try {
        setLoading(true);
        const token = await getToken();
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/users/saved`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSavedPosts(res.data);

        const postsRes = await Promise.all(
          res.data.map((postId) =>
            axios
              .get(`${import.meta.env.VITE_API_URL}/posts/id/${postId}`)
              .then((r) => r.data)
              .catch(() => null)
          )
        );

        setSavedPostDetails(postsRes.filter(Boolean));
      } catch {
      } finally {
        setLoading(false);
      }
    };

    const fetchUserPosts = async () => {
      try {
        setLoading(true);
        const token = await getToken();
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/posts/user/${user.publicMetadata.mongoId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setUserPosts(res.data);
      } catch {
      } finally {
        setLoading(false);
      }
    };

    const fetchUserComments = async () => {
      try {
        setLoading(true);
        const token = await getToken();
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/comments/user/${user.publicMetadata.mongoId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setUserComments(res.data);
      } catch {
      } finally {
        setLoading(false);
      }
    };

    if (section === "comments") {
      fetchUserComments();
    } else if (section === "saved") {
      fetchSavedPosts();
    } else if (section === "posts") {
      fetchUserPosts();
    }
  }, [section, getToken, user]);

  const handleDelete = async (commentId) => {
    try {
      const token = await getToken();
      await axios.delete(`${import.meta.env.VITE_API_URL}/comments/${commentId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      toast.success("Comment deleted");
      setUserComments((prev) => prev.filter((c) => c._id !== commentId));
      await QueryClient.invalidateQueries({ queryKey: ["comments", user.publicMetadata.mongoId] });
    } catch (err) {
      toast.error(err.response?.data || "Failed to delete");
    }
  };

  if (!user) return <div className="text-center py-10">Please log in to view your profile.</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="relative overflow-hidden flex flex-col md:flex-row items-center gap-4 mb-8 justify-between bg-[var(--secondary4)] rounded-xl p-8">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <img
            src={user.imageUrl}
            alt="User Avatar"
            className="w-24 h-24 rounded-full object-cover shadow-md z-10"
          />
          <div className="text-center md:text-left z-10">
            <h2 className="text-2xl font-semibold">{user.username}</h2>
            <p className="text-muted-foreground">{user.emailAddresses[0]?.emailAddress}</p>
            <p className="text-sm text-muted-foreground">
              Member since: {new Date(user.createdAt).toLocaleDateString("en-US", {
                month: "long",
                day: "2-digit",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
        <Meteors number={20} className="block md:hidden" />
        <div>
          <UserBioEditor />
        </div>
      </div>

      <div className="relative overflow-hidden flex gap-3 justify-center md:justify-start mb-6 bg-[var(--secondary4)] rounded-xl p-6">
        {["posts", "comments", "saved"].map((item) => (
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

      <div className="mt-4 min-h-[200px] rounded-lg bg-muted/40 bg-[var(--secondary4)] rounded-xl p-6">
        {section === "posts" && (
          <div>
            <h3 className="text-xl font-semibold mb-2">Your Posts</h3>
            {loading ? (
              <p className="text-muted-foreground">Loading your posts...</p>
            ) : userPosts.length === 0 ? (
              <p className="text-muted-foreground">You haven't posted anything yet.</p>
            ) : (
              <ul className="grid md:grid-cols-2 gap-4 mt-4">
                {userPosts.map((post) => {
                  const previewText = stripHtml(post.summary || post.content || "");
                  const shortPreview =
                    previewText.length > 100 ? previewText.slice(0, 100) + "..." : previewText;

                  return (
                    <li
                      key={post._id}
                      className="p-4 bg-[var(--secondary5)] hover:bg-[var(--secondary2)] rounded-md shadow hover:shadow-md transition cursor-pointer"
                      onClick={() => navigate(`/${post.slug}`)}
                    >
                      <h4 className="font-semibold">{post.title}</h4>
                      <div className="text-sm text-muted-foreground">{shortPreview}</div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        )}

        {section === "saved" && (
          <div>
            <h3 className="text-xl font-semibold mb-2">Saved Posts</h3>
            {loading ? (
              <p className="text-muted-foreground">Loading saved posts...</p>
            ) : savedPosts.length === 0 ? (
              <p className="text-muted-foreground">No saved posts yet.</p>
            ) : (
              <ul className="grid md:grid-cols-2 gap-4 mt-4">
                {savedPostDetails.map((post) => {
                  if (!post) return null;
                  const previewText = stripHtml(post.summary || post.content || "");
                  const shortPreview =
                    previewText.length > 100 ? previewText.slice(0, 100) + "..." : previewText;

                  return (
                    <li
                      key={post._id}
                      className="p-4 bg-[var(--secondary5)] hover:bg-[var(--secondary2)] rounded-md shadow hover:shadow-md transition cursor-pointer"
                      onClick={() => navigate(`/${post.slug}`)}
                    >
                      <h4 className="font-semibold">{post.title}</h4>
                      <div className="text-sm text-muted-foreground">{shortPreview}</div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        )}

        {section === "comments" && (
          <ul className="grid gap-4 mt-4">
            {userComments.map((comment) => (
              <li
                key={comment._id}
                className="relative p-4 bg-[var(--secondary5)] rounded-md shadow"
              >
                {(user.username === comment.user?.username || role === "admin") && (
                  <button
                    onClick={() => handleDelete(comment._id)}
                    className="absolute top-2 right-2 text-[var(--Accent4)] hover:text-red-500 transition"
                    aria-label="Delete comment"
                    title="Delete comment"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 mt-1 cursor-pointer"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6m5 0V4a2 2 0 012-2h2a2 2 0 012 2v2"></path>
                      <line x1="10" y1="11" x2="10" y2="17"></line>
                      <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                  </button>
                )}

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

                <p className="text-base mt-2 text-white line-clamp-4 md:line-clamp-3">
                  {(typeof comment.desc === "string" && comment.desc.trim()) || "No comment text found."}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default UserProfilePage;
