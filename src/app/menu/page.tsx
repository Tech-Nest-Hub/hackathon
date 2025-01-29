
import Menu from "../hero/menu";
import { Navbar } from "../hero/Navbar";
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

