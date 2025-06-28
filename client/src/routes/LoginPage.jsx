import { SignIn } from "@clerk/clerk-react";
import { BackgroundBeams } from "../components/ui/background-beams";
import { FlipWords } from "../components/ui/flip-words";

const LoginPage = () => {
  const words = ["stories", "ideas", "knowledge", "feeds", "thoughts"];
  return (
    <div className='text-white flex items-center md:justify-between justify-center h-[calc(100vh-80px)] m-6 '>
      <div className="h-[40rem] flex justify-center items-center px-4">
        <div className="text-4xl mx-auto font-normal text-neutral-500 ">
          where
          <FlipWords words={words} /> <br />
          take flight — FableNest
        </div>
      </div>
      <div>
        <SignIn signUpUrl="register" />
      </div>
      <BackgroundBeams className="-z-1"/>
    </div>
    
  )
}

export default LoginPage
