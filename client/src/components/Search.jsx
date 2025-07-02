import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = (query) => {
    if (!query) return;
    const trimmed = query.trim();

    setTimeout (() =>{
      if (trimmed.startsWith("@")) {
        const username = trimmed.substring(1);
        navigate(`/id/${username}`);
      } else if (trimmed.startsWith("#")) {
        const username = trimmed.substring(1);
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
            search: trimmed,
          });
        } else {
          navigate(`/posts?search=${trimmed}`);
        }
      }
    },250);
  };

  return (
    <div className="bg-[var(--secondary2)] hover:bg-[var(--secondary)] rounded-2xl flex items-center gap-2 w-full md:rounded-full">
      <PlaceholdersAndVanishInput
        placeholders={[
          "Search amazing posts...",
          "Type your title...",
          "Find people using @author",
          "Find authors all Post #author",
        ]}
        onSubmit={(e) => {
          e.preventDefault();
          const value = e.target.querySelector("input")?.value;
          handleSearch(value);
        }}
        onChange={(e) => {
          // Optional: live feedback
          // handleSearch(value);
          setSubmitEnabled(e.target.value.trim().length > 0);
        }}
      />
    </div>
    
  );
};

export default Search;
