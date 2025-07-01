import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const query = e.target.value.trim();

      if (query.startsWith("@")) {
        const username = query.substring(1);
        navigate(`/id/${username}`);

      } else if (query.startsWith("#")) {
        const username = query.substring(1);
        if (location.pathname === "/posts") {
          setSearchParams({
            ...Object.fromEntries(searchParams),
            author: username,
          });
        } else {
          navigate(`/posts?author=${username}`);
        }

      } else {
        if (location.pathname === "/posts") {
          setSearchParams({
            ...Object.fromEntries(searchParams),
            search: query,
          });

        } else {
          navigate(`/posts?search=${query}`);
        }
      }
    }
  };

  return (
    <div className="bg-[var(--secondary2)] hover:bg-[var(--secondary)] p-2 rounded-full flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="gray"
      >
        <circle cx="10.5" cy="10.5" r="7.5" />
        <line x1="16.5" y1="16.5" x2="22" y2="22" />
      </svg>
      <input
        type="text"
        placeholder="Search posts or @author"
        className="bg-transparent focus:outline-none focus:ring-0"
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};

export default Search;
