import Image from "next/image";
import Header from "./Components/Navbar";
import Hero from "./Components/Hero";
import Languages from "./Components/Languages";
import OurIndustry from "./Components/OurIndustry";
import Software from "./Components/Software";
import Development from "./Components/Development";
import Connect from "./Components/Connect";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Languages/>
      <OurIndustry/>
      <Software/>
      <Development/>
      <Connect/>
      <Footer/>
    </div>
  );
}
