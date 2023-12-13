import * as React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Link from "next/link"
import home from "./home.module.css"

export default function App () {
 
  return (
    <>
    <Header />
    <main className="flex min-h-screen flex-col items-center justify-between p-24 homeLink">
    <button className={home.buttonLink }><Link href={"/search"}>Looking for a City</Link></button>
    </main>
    <Footer />
    </>
  )
}