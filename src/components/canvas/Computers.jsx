import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

import CanvasLoader from "../Loader";

const Computers = () => {
  let computer;
  try {
    computer = useLoader(GLTFLoader, "https://raw.githubusercontent.com/orgmaxwar/glb/main/anatomy_of_the_eye.glb");
  } catch (error) {
    console.error("Error loading GLB model:", error);
    return null; // Return null to prevent rendering if model fails to load
  }

  useEffect(() => {
    if (computer) {
      console.log("GLB model loaded successfully:", computer);
    }
  }, [computer]);

  if (!computer) {
    return null; // Prevent rendering if model didn't load
  }

  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor="black" /> {/* Increased intensity for better visibility */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1.5} // Adjusted for eye model
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={2} // Adjusted scale for eye model (tweak as needed)
        position={[0, 0, 0]} // Centered position for better visibility
        rotation={[0, 0, 0]} // Reset rotation for eye model
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    !isMobile && (
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [10, 5, 10], fov: 50 }} // Adjusted camera for eye model
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={true} // Enabled zoom for better interaction
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers />
        </Suspense>
        <Preload all />
      </Canvas>
    )
  );
};

export default ComputersCanvas;
