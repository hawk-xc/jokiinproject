import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesComponent = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    // console.log(container);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="z-10"
      options={{
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          size: {
            value: 3,
          },
          move: {
            direction: "top",
            enable: true,
            speed: 1,
          },
          opacity: {
            value: 0.5,
            random: true,
          },
          shape: {
            type: "circle", // Atau gunakan "circle" untuk bentuk lingkaran
          },
          links: {
            enable: false,
          },
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
      }}
    />
  );
};

export default ParticlesComponent;
