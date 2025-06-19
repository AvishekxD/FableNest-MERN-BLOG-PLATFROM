import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const MainLayout = () => {
  return (
    <div className="text-white px-4 md:mx-4 lg:px-16 lx:px-32 2xl:px-64">
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default MainLayout