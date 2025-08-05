import React from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <div className="px-10-5">
        <Navbar />
      </div>

      <Hero />
      <Cocktails />
    </main>
  );
};

export default App;
