import AboutUs from "@/components/AboutUs";
import { FooterDemo } from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Rooms from "@/components/Rooms";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Rooms />
      <Testimonials />
      <FooterDemo />
    </>
  );
}
