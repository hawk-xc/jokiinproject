import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect, useRef } from "react";

import DynamicPactiles from "./Particles/ParticlesComponents";
import Navbar from "././Components/Navbar";
import HeroSection from "./Components/HeroSection";
import LandingPage from "./Components/LandingPage";
import ScrollButton from "./Particles/ScrollButton";
import ProductDetail from "./Components/ProductDetail";
import ProductDetailContent from "./Components/ProductDetailContent";

export default function App() {
  const homeRef = useRef(null);
  const productRef = useRef(null);
  const [currentRefIndex, setCurrentRefIndex] = useState(0);

  const scrollToNextRef = () => {
    const nextRefIndex = (currentRefIndex + 1) % refLists.length;
    setCurrentRefIndex(nextRefIndex);

    refLists[nextRefIndex].ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const scroller = (ref) => {
    ref?.current &&
      window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
  };

  const refLists = [
    {
      name: "home",
      ref: homeRef,
    },
    {
      name: "services",
      ref: productRef,
    },
  ];

  useEffect(() => {
    AOS.init();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const refKey = Object.keys(refLists).find(
              (key) => refLists[key].current === entry.target
            );
            const index = Object.keys(refLists).indexOf(refKey);
            setCurrentRefIndex(index); // Update state dengan indeks referensi yang terlihat saat ini
          }
        });
      },
      { threshold: 0.5 } // Mengatur threshold 50% untuk dianggap terlihat
    );

    // Observasi semua elemen yang menggunakan refs
    Object.values(refLists).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="relative flex flex-col items-center justify-center overflow-hidden align-middle primary-background lexend"
      data-theme="light"
    >
      <DynamicPactiles />
      <Navbar scroller={scroller} refLists={refLists} />
      <HeroSection homeRef={homeRef}>
        <LandingPage />
      </HeroSection>
      <ProductDetail ref={productRef}>
        <ProductDetailContent />
      </ProductDetail>
      <ScrollButton
        scrollToNextRef={scrollToNextRef}
        currentRefIndex={currentRefIndex}
      />
    </div>
  );
}
