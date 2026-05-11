'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function CakeModel() {
  const group = useRef<THREE.Group>(null)
  const sparkleRef = useRef<THREE.Points>(null)

  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = clock.getElapsedTime() * 0.4
      group.current.position.y = Math.sin(clock.getElapsedTime() * 0.8) * 0.05
    }
    if (sparkleRef.current) {
      sparkleRef.current.rotation.y = -clock.getElapsedTime() * 0.2
    }
  })

  const sparklePositions = new Float32Array(60 * 3)
  for (let i = 0; i < 60; i++) {
    const r = 1.2 + Math.random() * 0.5
    const theta = Math.random() * Math.PI * 2
    const phi = Math.random() * Math.PI
    sparklePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
    sparklePositions[i * 3 + 1] = r * Math.cos(phi)
    sparklePositions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta)
  }

  return (
    <group ref={group}>
      {/* Bottom layer */}
      <mesh position={[0, -0.6, 0]}>
        <cylinderGeometry args={[0.9, 0.9, 0.5, 32]} />
        <meshStandardMaterial color="#f9c5d1" roughness={0.3} metalness={0.1} />
      </mesh>
      {/* Middle layer */}
      <mesh position={[0, -0.1, 0]}>
        <cylinderGeometry args={[0.65, 0.65, 0.45, 32]} />
        <meshStandardMaterial color="#ffd6e0" roughness={0.3} metalness={0.1} />
      </mesh>
      {/* Top layer */}
      <mesh position={[0, 0.35, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.4, 32]} />
        <meshStandardMaterial color="#f9c5d1" roughness={0.3} metalness={0.1} />
      </mesh>
      {/* Frosting drips */}
      {[0, 60, 120, 180, 240, 300].map((deg, i) => (
        <mesh key={i} position={[
          0.85 * Math.cos((deg * Math.PI) / 180),
          -0.7,
          0.85 * Math.sin((deg * Math.PI) / 180),
        ]}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshStandardMaterial color="#ffffff" roughness={0.2} />
        </mesh>
      ))}
      {/* Candle */}
      <mesh position={[0, 0.7, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.3, 8]} />
        <meshStandardMaterial color="#fffde7" />
      </mesh>
      {/* Flame */}
      <mesh position={[0, 0.9, 0]}>
        <coneGeometry args={[0.04, 0.12, 8]} />
        <meshStandardMaterial color="#ffeb3b" emissive="#ff9800" emissiveIntensity={2} />
      </mesh>
      {/* Sparkles */}
      <points ref={sparkleRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[sparklePositions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.04} color="#ff6b9d" transparent opacity={0.8} sizeAttenuation />
      </points>
    </group>
  )
}

export default function CakeRotator() {
  return (
    <Canvas camera={{ position: [0, 0.5, 3], fov: 50 }}>
      <ambientLight intensity={0.8} />
      <pointLight position={[3, 3, 3]} color="#ff6b9d" intensity={1.5} />
      <pointLight position={[-3, 1, -2]} color="#c4b5fd" intensity={0.8} />
      <pointLight position={[0, 2, 0]} color="#ffd6e0" intensity={0.5} />
      <CakeModel />
      <OrbitControls enablePan={false} enableZoom={false} autoRotate={false} />
    </Canvas>
  )
}
