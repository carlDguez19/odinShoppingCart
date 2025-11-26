import { Link, Outlet } from "react-router-dom"
import { Nav } from "./NavBar"
export function App() {
  return (
    <>
      <Nav/>
      <Outlet/>
    </>
  )
}