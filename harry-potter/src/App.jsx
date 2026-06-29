import { useState } from "react";
import "./App.css";
import { useHouseTheme } from "./theme/useHouseTheme";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";

import Scene1 from "./scenes/Scene1";
import Scene2 from "./scenes/Scene2";

function App() {
  useHouseTheme();

  // 0 = Main website
  // 1 = Scene 1
  // 2 = Scene 2
  const [scene, setScene] = useState(0);

  console.log("Current scene:", scene);

  // Scene 1
  if (scene === 1) {
    return <Scene1 nextScene={() => setScene(2)} />;
  }

  // Scene 2
  if (scene === 2) {
    return <Scene2 nextScene={() => setScene(3)} />;
  }

  // Main Website
  return (
    <>
      <Navbar />

      <Hero startTour={() => setScene(1)} />

      <Section1 />

      <Section2 />

      <Section3 />

      <Section4 />
    </>
  );
}

export default App;
