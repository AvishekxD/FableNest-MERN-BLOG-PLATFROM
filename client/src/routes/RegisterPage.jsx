import { SignUp } from "@clerk/clerk-react"

const RegisterPage = () => {
  return (
    <div className='text-white flex items-center md:justify-end justify-center h-[calc(100vh-80px)]'>
        <SignUp signInUrl="login"/>
    </div>
  )
}

export default RegisterPage