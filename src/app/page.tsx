import Image from "next/image";
import { Hero } from "./hero/HeroSection";
import { Navbar } from "./hero/Navbar";



export default function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>


    </div>
  );
}
 