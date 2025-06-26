import { useAuth, useUser } from "@clerk/clerk-react"
import 'react-quill-new/dist/quill.snow.css';
import ReactQuill from "react-quill-new";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Upload from "../components/Upload";
import { useEffect } from "react";

const Write = () => {

  const {isLoaded, isSignedIn} = useUser();
  const [value, setValue] = useState("");
  const [cover, setCover] = useState("");
  const [img, setImg] = useState("");
  const [video, setVideo] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    img && setValue((prev) => prev + `<p><image src="${img.url}"/></p>`);
  }, [img]);
  
  useEffect(() => {
    video &&
      setValue(
        (prev) => prev + `<p><iframe class="ql-video" src="${video.url}"/></p>`
      );
  }, [video]);

  const navigate = useNavigate();

  const {getToken} = useAuth();

  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
        headers:{
          Authorization: `Bearer ${token}`,
        },
      }); 
    },
    onSuccess: (res)=>{
      toast.success("Post has been created");
      navigate(`/${res.data.slug}`);
    },
  });

  if(!isLoaded){
    return <div className="text-white">Loading...</div>
  }

  if(isLoaded && !isSignedIn){
    return <div className="text-white">You should login!</div>
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      img: cover.filePath || "",
      title: formData.get("title"),
      category: formData.get("category"),
      desc: formData.get("desc"),
      content: value,
    };

    console.log(data);
    mutation.mutate(data);
  };

  return (
  <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-4">
    <h1 className="text-xl font-light">Create a New Post</h1>
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1 mb-6">
      <Upload type="image" setProgress={setProgress} setData={setCover}>
        <button className="w-max p-2 shadow-md rounded-xl text-sm text-zinc-300 bg-[var(--secondary)] hover:bg-[var(--Accent2)] cursor-pointer">
          Add a cover image
        </button>
      </Upload>

      <input 
        type="text" 
        placeholder="My Awesome Story" 
        className="text-4xl font-semibold bg-transparent outline-none"
        name="title"
      />
      <div className="flex items-center gap-4">
        <label 
          htmlFor="" 
          className="text-sm"
          >
          Choose a category:
        </label>
        <select 
          name="category" 
          id="" 
          className="p-2 rounded-xl shadow-md bg-[var(--secondary)] hover:bg-[var(--Accent2)] cursor-pointer"
          >
          <option value="general">General</option>
          <option value="web-design">Web Design</option>
          <option value="development">Development</option>
          <option value="databases">Databases</option>
          <option value="seo">Search Engines</option>
          <option value="marketing">Marketing</option>
        </select>
      </div>
      <textarea 
        className="p-4 rounded-xl bg-[var(--Accent2)] shadow-md" 
        name="desc" 
        placeholder="A Short Description"
      />
      <div className="flex gap-2 items-center -my-4">
        <Upload type="image" setProgress={setProgress} setData={setImg}>
          <button
            type="button"
            className="flex flex-row justify-center text-[18px] items-center bg-[var(--secondary)] hover:bg-[var(--Accent2)] font-medium rounded-xl p-[3px] cursor-pointer duration-200 hover:scale-105 w-28 disabled:bg-zinc-900 disabled:cursor-not-allowed"          >
            📸<p className="text-sm pt-0.5">Add Image</p> 
          </button>
        </Upload>

        <Upload type="video" setProgress={setProgress} setData={setVideo}>
          <button
            type="button"
            className="flex flex-row justify-center text-[18px] items-center bg-[var(--secondary)] hover:bg-[var(--Accent2)] font-medium rounded-xl p-[3px] cursor-pointer duration-200 hover:scale-105 w-28 disabled:bg-zinc-900 disabled:cursor-not-allowed"
          >
            📽️<p className="text-sm pt-0.5">Add Video</p> 
          </button>
        </Upload>
      </div>
      <div className="flex flex-1">
        <ReactQuill 
          theme="snow" 
          className="flex-1 rounded-xl bg-[var(--Accent2)] shadow-md"
          value={value}
          onChange={setValue}
          readOnly={0 < progress && progress < 100}
        />
      </div>
      <button 
        disabled={mutation.isPending || (0 < progress && progress < 100)} 
        className="bg-[var(--secondary)] hover:bg-[var(--Accent2)] font-medium rounded-xl p-2 cursor-pointer duration-200 hover:scale-105 w-36 disabled:bg-zinc-900 disabled:cursor-not-allowed"
        >
        {mutation.isPending ? "Loading..." : "Send"}
      </button>
      {"Progress:" + progress}
      {mutation.isError && <span>{mutation.error.message}</span>}
    </form>
  </div>
  )
}

export default Write