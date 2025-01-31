import Image from "next/image";
import Header from "./Components/Navbar";
import Hero from "./Components/Hero";
import Languages from "./Components/Languages";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Languages/>
    </div>
  );
}
