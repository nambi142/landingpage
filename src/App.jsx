import Header from "./components/Header";
import Hero from "./components/Hero";
import WhatLearn from "./components/WhatLearn";
import Benefits from "./components/Benefits";
import WorkshopDetails from "./components/WorkshopDetails";
import FAQ from "./components/FAQ";
import Registration from "./components/Registration";
import Footer from "./components/Footer";

import "./App.css";


function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Benefits />
        <WhatLearn />
        <WorkshopDetails />
        <Registration />
        <FAQ />
      </main>

      <Footer />
    </>
  );
}

export default App;