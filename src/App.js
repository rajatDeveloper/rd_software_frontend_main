import Home from "./pages/home/home";
import Particles from "react-particles"; // Import the Particles component
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";

const App = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // You can customize particle options here
    await loadSlim(engine); // Use loadSlim for a smaller bundle size
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      {" "}
      {/* Set position:relative for z-index to work */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ff0000",
            },
            links: {
              value: "#ff0000",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,

          // ... your particles options (adjust background color if desired)
          background: {
            color: {
              value: {
                // Adjust opacity here (0 for transparent)
                opacity: 0.8, // Example: Set some transparency for the background
              },
            },
          },
        }}
      />
      <Home style={{ zIndex: 2 }} /> {/* Set a higher z-index for Home */}
    </div>
  );
};

export default App;
