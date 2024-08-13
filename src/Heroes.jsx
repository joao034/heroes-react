import { Outlet } from "react-router-dom"
import { Navbar } from "./ui/components/Navbar"

export const Heroes = () => {
  return (
    <>
        <Navbar />
        <Outlet />
    </>
  )
}

