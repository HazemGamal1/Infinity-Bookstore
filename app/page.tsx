"use client"
import { FaSearch, FaInstagramSquare , FaFacebookSquare, FaTwitterSquare   } from "react-icons/fa";
import Navbar from './components/Navbar';
import Offer from './components/Offer';
import logotext from '@/public/hero.png'
import Image from "next/image";
import BestSellers from "./components/BestSellers";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
export default function Home() {
  const arr = [{}]
  return (
    <div>
      {/* <Offer /> */}
      <div className="sticky top-0 z-10 bg-white">
        <Navbar/>
      </div>
      <div className="flex flex-col min-h-screen justify-between">
        <Hero />
        <div className="mt-8">
          <BestSellers />
        </div>
          <Footer />
      </div>
    </div>
  )
}
