import React from "react"
import Navbar from "./Components/navbar"
import Head from "next/head"
import Hero from "./Components/hero"
import Footer from "./Components/footer"
import FeaturedPosts from "./Components/featuredPosts"
import Summer from "./Components/summer"
import SummerPoint from "./Components/summerPoint"
export default function page(){
  return(
    <div className="max-sm-400px">
     <Navbar/>
     <Hero/>
     <Summer/>
     <SummerPoint/>
     <FeaturedPosts/>
     <Footer/>
  </div>
  )
}