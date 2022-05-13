import React from "react";
import Hero from './../components/accueil/Hero';
import Service from './../components/accueil/Service';
import Equipe from './../components/accueil/Equipe';
import About from './../components/accueil/About';

function Accueil() {
  return (
    <>
     <Hero />
     <div className="md:mx-12">
     <About />
     <Service />
     </div>
     <Equipe />
    </>
  );
}

export default Accueil;
