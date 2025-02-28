import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

// Create a separate component for the animated stars
const AnimatedStars = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.001;
    }
  });

  return <Stars ref={meshRef} radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />;
};

// Main BackgroundAnimation component
const BackgroundAnimation = () => {
  return (
    <Canvas style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <AnimatedStars /> {/* Use the animated stars component here */}
    </Canvas>
  );
};

export default BackgroundAnimation;