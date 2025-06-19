import { SignIn } from "@clerk/clerk-react"

const LoginPage = () => {
  return (
    <div className='text-white flex items-center md:justify-end justify-center h-[calc(100vh-80px)]'>
        <SignIn signUpUrl="register"/>
    </div>
  )
}

export default LoginPage
