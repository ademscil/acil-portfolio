import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function AnimatedSphere({ position, color, speed = 1, distort = 0.3, size = 1 }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15 * speed;
    }
  });

  return (
    <Float speed={speed * 1.5} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[size, 4]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.7}
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

function FloatingParticles({ count = 200 }) {
  const points = useRef();
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 25;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x = state.clock.elapsedTime * 0.02;
      points.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.035} color="#6366f1" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

function TorusKnot() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={[3.5, -1, -2]}>
        <torusKnotGeometry args={[0.8, 0.25, 128, 16, 2, 3]} />
        <meshStandardMaterial
          color="#22d3ee"
          transparent
          opacity={0.4}
          wireframe
          emissive="#22d3ee"
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  );
}

function OctahedronWire() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.08;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.12;
    }
  });

  return (
    <Float speed={0.8} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={[-4, 1.5, -3]}>
        <octahedronGeometry args={[1.2, 0]} />
        <meshStandardMaterial
          color="#f472b6"
          transparent
          opacity={0.5}
          wireframe
          emissive="#f472b6"
          emissiveIntensity={0.15}
        />
      </mesh>
    </Float>
  );
}

export default function Scene3D({ className = "" }) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} color="#6366f1" />
        <pointLight position={[-5, -5, 5]} intensity={0.3} color="#22d3ee" />
        <pointLight position={[5, -3, -5]} intensity={0.2} color="#f472b6" />

        <AnimatedSphere position={[-3, -2, -1]} color="#6366f1" speed={0.8} distort={0.4} size={1.2} />
        <AnimatedSphere position={[4, 2, -3]} color="#22d3ee" speed={0.6} distort={0.25} size={0.8} />
        <AnimatedSphere position={[-1, 3, -4]} color="#f472b6" speed={1} distort={0.3} size={0.6} />

        <TorusKnot />
        <OctahedronWire />
        <FloatingParticles count={300} />

        <Stars radius={50} depth={50} count={1500} factor={3} saturation={0} fade speed={1} />
      </Canvas>
    </div>
  );
}