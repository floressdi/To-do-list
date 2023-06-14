import Image from "next/image";
import { Inter } from "next/font/google";
import ListaDeTareas from "./components/ListaDeTareas";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <section className="  my-11 ">
          <ListaDeTareas/>
      </section>
    </main>
  );
}
