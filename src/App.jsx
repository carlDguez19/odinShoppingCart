import { Link, Outlet } from "react-router-dom"
import { Nav } from "./NavBar"
import { useState } from "react";

export function App() {

  const [totItems, setTotItems] = useState(0);

  return (
    <>
      <Nav totItems={totItems}/>
      <Outlet context={{setTotItems}}/>
    </>
  )
}