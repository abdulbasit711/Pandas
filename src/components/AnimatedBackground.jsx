import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random';
import { useTheme } from '../theme/ThemeContext';

function CyberParticles() {
  const ref = useRef();
  const particlesRef = useRef();
  const { theme } = useTheme();
  
  const [sphere] = React.useState(() => 
    random.inSphere(new Float32Array(10000), { radius: 1.5 })
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.2;
      ref.current.rotation.y += delta * 0.1;
    }
    
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.04;
    }
  });

  return (
    <>
      {/* Primary particles */}
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={theme.colors.primary}
          size={0.01}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
      
      {/* Secondary particles */}
      <Points ref={particlesRef} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={theme.colors.secondary}
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </>
  );
}

function CyberGrid() {
  const meshRef = useRef();
  const { theme } = useTheme();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(time * 0.1) * 0.3;
      meshRef.current.rotation.y = time * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -3]}>
      <boxGeometry args={[6, 6, 6]} />
      <meshBasicMaterial
        color={theme.colors.secondary}
        wireframe
        transparent
        opacity={0.05}
      />
    </mesh>
  );
}

const AnimatedBackground = () => {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <color attach="background" args={[theme.colors.darkBg]} />
        <CyberParticles />
        <CyberGrid />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} color={theme.colors.primary} />
        <pointLight position={[-10, -10, 5]} intensity={0.5} color={theme.colors.secondary} />
      </Canvas>
      
      {/* Dynamic gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 -left-40 w-72 h-72 rounded-full mix-blend-screen filter blur-[128px] opacity-10 animate-pulse"
          style={{
            background: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary})`
          }}
        />
        <div 
          className="absolute bottom-1/4 -right-40 w-72 h-72 rounded-full mix-blend-screen filter blur-[128px] opacity-10 animate-pulse delay-1000"
          style={{
            background: `linear-gradient(to right, ${theme.colors.secondary}, ${theme.colors.accent})`
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full mix-blend-screen filter blur-[180px] opacity-10 animate-pulse delay-500"
          style={{
            background: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.accent}, ${theme.colors.teal})`
          }}
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
    </div>
  );
};

export default AnimatedBackground;