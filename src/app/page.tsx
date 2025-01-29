import Image from "next/image";
import { Hero } from "./hero/HeroSection";
import { Navbar } from "./hero/Navbar";
import Menu from "./hero/menu";



export default function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Menu/>


    </div>
  );
}
 