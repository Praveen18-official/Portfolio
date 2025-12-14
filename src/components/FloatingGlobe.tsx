import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Float, Trail, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const FloatingOrb = ({ position, color, speed, distort }: { position: [number, number, number]; color: string; speed: number; distort: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.5;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <MeshDistortMaterial
          color={color}
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

const OrbitingSkill = ({ 
  radius, 
  speed, 
  offset, 
  label, 
  color 
}: { 
  radius: number; 
  speed: number; 
  offset: number; 
  label: string; 
  color: string;
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const textRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      const angle = state.clock.elapsedTime * speed + offset;
      groupRef.current.position.x = Math.cos(angle) * radius;
      groupRef.current.position.z = Math.sin(angle) * radius;
      groupRef.current.position.y = Math.sin(angle * 2) * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      <Trail
        width={0.5}
        length={6}
        color={color}
        attenuation={(t) => t * t}
      >
        <mesh>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
        </mesh>
      </Trail>
    </group>
  );
};

const MainGlobe = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.y = -state.clock.elapsedTime * 0.15;
      wireframeRef.current.rotation.z = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group>
      {/* Main sphere */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh ref={meshRef}>
          <sphereGeometry args={[1.8, 64, 64]} />
          <MeshDistortMaterial
            color="#0d9488"
            distort={0.3}
            speed={1.5}
            roughness={0.1}
            metalness={0.9}
            transparent
            opacity={0.85}
          />
        </mesh>
      </Float>

      {/* Wireframe outer sphere */}
      <mesh ref={wireframeRef}>
        <sphereGeometry args={[2.2, 32, 32]} />
        <meshBasicMaterial color="#14b8a6" wireframe transparent opacity={0.15} />
      </mesh>

      {/* Inner glow */}
      <mesh>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial color="#2dd4bf" transparent opacity={0.3} />
      </mesh>
    </group>
  );
};

const FloatingGlobe = () => {
  const skills = useMemo(() => [
    { label: "React", radius: 3, speed: 0.5, offset: 0, color: "#61dafb" },
    { label: "Flutter", radius: 3.2, speed: 0.4, offset: Math.PI * 0.5, color: "#02569b" },
    { label: "Firebase", radius: 2.8, speed: 0.6, offset: Math.PI, color: "#ffca28" },
    { label: "MongoDB", radius: 3, speed: 0.45, offset: Math.PI * 1.5, color: "#4db33d" },
    { label: "SQL", radius: 3.3, speed: 0.35, offset: Math.PI * 0.25, color: "#f29111" },
    { label: "Java", radius: 2.9, speed: 0.55, offset: Math.PI * 1.25, color: "#ed8b00" },
  ], []);

  return (
    <div className="w-full h-[500px] md:h-[600px]">
      <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#14b8a6" />
        <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={0.5} color="#2dd4bf" />

        <MainGlobe />

        {/* Orbiting skills */}
        {skills.map((skill) => (
          <OrbitingSkill key={skill.label} {...skill} />
        ))}

        {/* Floating orbs */}
        <FloatingOrb position={[-3, 2, -2]} color="#14b8a6" speed={1.2} distort={0.4} />
        <FloatingOrb position={[3.5, -1.5, -1]} color="#f59e0b" speed={0.8} distort={0.3} />
        <FloatingOrb position={[-2.5, -2, 1]} color="#0ea5e9" speed={1} distort={0.5} />
        <FloatingOrb position={[2, 2.5, 1]} color="#8b5cf6" speed={1.1} distort={0.35} />
      </Canvas>
    </div>
  );
};

export default FloatingGlobe;
