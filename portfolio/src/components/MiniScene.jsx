import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from "@react-three/drei";

function RotatingCube({ color = "#6366f1", size = 1 }) {
  const ref = useRef();
  useFrame((state) => {
    ref.current.rotation.x = state.clock.elapsedTime * 0.3;
    ref.current.rotation.y = state.clock.elapsedTime * 0.4;
  });
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={ref}>
        <boxGeometry args={[size, size, size]} />
        <meshStandardMaterial color={color} transparent opacity={0.7} wireframe />
      </mesh>
    </Float>
  );
}

function WobblySphere({ color = "#22d3ee", size = 1.2 }) {
  const ref = useRef();
  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.2;
  });
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={ref}>
        <sphereGeometry args={[size, 32, 32]} />
        <MeshWobbleMaterial color={color} transparent opacity={0.5} factor={0.6} speed={2} />
      </mesh>
    </Float>
  );
}

function DistortedTorus({ color = "#f472b6", size = 1 }) {
  const ref = useRef();
  useFrame((state) => {
    ref.current.rotation.x = state.clock.elapsedTime * 0.15;
    ref.current.rotation.z = state.clock.elapsedTime * 0.2;
  });
  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={ref}>
        <torusGeometry args={[size, size * 0.35, 16, 32]} />
        <MeshDistortMaterial color={color} transparent opacity={0.6} distort={0.3} speed={3} />
      </mesh>
    </Float>
  );
}

function HelixRing({ color = "#818cf8" }) {
  const ref = useRef();
  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.3;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.5}>
      <mesh ref={ref}>
        <torusKnotGeometry args={[0.8, 0.2, 100, 16, 2, 5]} />
        <meshStandardMaterial color={color} transparent opacity={0.5} wireframe emissive={color} emissiveIntensity={0.2} />
      </mesh>
    </Float>
  );
}

function DNA() {
  const ref = useRef();
  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.4;
  });
  return (
    <group ref={ref}>
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 4;
        const y = (i / 12) * 3 - 1.5;
        return (
          <group key={i}>
            <mesh position={[Math.cos(angle) * 0.6, y, Math.sin(angle) * 0.6]}>
              <sphereGeometry args={[0.08, 8, 8]} />
              <meshStandardMaterial color="#6366f1" emissive="#6366f1" emissiveIntensity={0.5} />
            </mesh>
            <mesh position={[-Math.cos(angle) * 0.6, y, -Math.sin(angle) * 0.6]}>
              <sphereGeometry args={[0.08, 8, 8]} />
              <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={0.5} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

const scenes = {
  cube: RotatingCube,
  sphere: WobblySphere,
  torus: DistortedTorus,
  helix: HelixRing,
  dna: DNA,
};

export default function MiniScene({ type = "cube", className = "", height = "300px" }) {
  const SceneComponent = scenes[type] || RotatingCube;

  return (
    <div className={`pointer-events-none ${className}`} style={{ height }}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[3, 3, 3]} intensity={0.6} color="#6366f1" />
        <pointLight position={[-3, -3, 3]} intensity={0.4} color="#22d3ee" />
        <SceneComponent />
      </Canvas>
    </div>
  );
}