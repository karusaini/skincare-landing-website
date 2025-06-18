import BodyLotion from "@/components/BodyLotion";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import SkinCare from "@/components/SkinCare";

export default function Home() {
  return (
    <div className="w-[1920px] h-[9490px] relative bg-[#EFF5E1]">
      <Navbar />
      <Hero />
      <div className="absolute top-[1400px] w-[1920px] h-[7303px] bg-[#FEFFF4]">
        <Experience />
        <Products />
        <SkinCare />
        <BodyLotion />
        <Footer />
      </div>
    </div>
  );
}
