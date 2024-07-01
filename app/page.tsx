'use client'
import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";
import NotiModal from "./_modals/NotiModal";

export default function Home() {
  return (
    <div className="bg-this-grey md:px-20">
      <Navbar/>
      <Hero/>
      <NotiModal/>
    </div>
  );
}
