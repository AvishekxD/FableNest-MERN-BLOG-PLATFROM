import { useEffect, useState } from "react";
import Imag from "./Imag";
import { Link } from "react-router-dom";
import { 
    SignedIn, 
    SignedOut,  
    useAuth, 
    UserButton 
} from "@clerk/clerk-react";

const Navbar = () => { 
    const [open, setOpen] = useState(false);

    const { getToken } = useAuth()

    useEffect(() =>{
        getToken().then((token) => console.log(token));
    }, []);

    return(
        <div className="w-full h-16 md:h-20 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
                <span>FableNest</span>
                <Imag src="FableNest_LOGO.png" alt="FableNest Logo" w={32} h={32} className="brightness-0 invert"/>
            </Link>
            <div className="md:hidden px-6">
                <div 
                    className="cursor-pointer text-4xl"
                    onClick={()=>setOpen((prev) => !prev)}
                >
                    {open ? "X" : "≡"}
                </div>
                <div className={`w-full h-screen flex flex-col items-center justify-center z-10 absolute top-16 bg-[var(--primary)] transition-all ease-in-out gap-8
                    font-medium text-lg ${open ? "-right-0" : "-right-[100%]"}`}>
                    <Link to="/">Home</Link>
                    <Link to="/">Trending</Link>
                    <Link to="/">Most Popular</Link>
                    <Link to="/">About</Link>
                    <Link to="/">
                        <button className="py-2 px-4 rounded-2xl bg-[var(--secondary)] text-white border-[1px] border-[var(--ring)] cursor-pointer">
                            Login 👋🏻
                        </button>
                    </Link>
                </div>
            </div>
            <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium ">
                <Link to="/">Home</Link>
                <Link to="/">Trending</Link>
                <Link to="/">Most Popular</Link>
                <Link to="/">About</Link>
                <SignedOut>
                    <Link to="/login">
                        <button className="py-2 px-4 rounded-2xl bg-[var(--secondary)] text-white border-[1px] border-[var(--ring)] cursor-pointer">Login 👋🏻</button>
                    </Link>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    )
}

export default Navbar