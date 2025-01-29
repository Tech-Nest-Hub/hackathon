import { Navbar } from "@/components/Navbar";
import Menu from "../hero/menu";
import { MagicCursor } from "./(components)/MagicCursor";


export default function Home() {
  return (
    <main>
      <Navbar />
      <MagicCursor />
      <Menu />
    </main>
  )
}

