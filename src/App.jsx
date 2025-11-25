import { Link, Outlet } from "react-router-dom"
import { Nav } from "./NavBar"
export function App() {
  //ill put nav here and i can perhaps fetch from the api here aswell
  return (
    <>
      <Nav/>
      <Outlet/>
    </>
  )
}