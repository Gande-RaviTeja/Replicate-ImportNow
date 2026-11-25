import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'

function Ship() {
  const ref = useRef()
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.position.x = Math.sin(clock.getElapsedTime() * 0.3) * 1.5
      ref.current.position.y = Math.sin(clock.getElapsedTime() * 0.6) * 0.1
      ref.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.6) * 0.04
    }
  })

  return (
    <group ref={ref}>
      {/* Hull */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.8, 0.5, 1]} />
        <meshPhongMaterial color="#1a3a5c" />
      </mesh>
      {/* Hull curve front */}
      <mesh position={[1.5, 0, 0]} rotation={[0, 0, 0]}>
        <coneGeometry args={[0.5, 0.6, 4]} rotation={[0, Math.PI / 4, Math.PI / 2]} />
        <meshPhongMaterial color="#1a3a5c" />
      </mesh>
      {/* Superstructure */}
      <mesh position={[-0.5, 0.5, 0]}>
        <boxGeometry args={[1, 0.6, 0.7]} />
        <meshPhongMaterial color="#2a5080" />
      </mesh>
      {/* Containers */}
      {[-0.3, 0.3, 0.9].map((x, i) => (
        <mesh key={i} position={[x, 0.55, 0]}>
          <boxGeometry args={[0.5, 0.4, 0.8]} />
          <meshPhongMaterial color={['#e3241b', '#1a7a3c', '#c8a000'][i]} />
        </mesh>
      ))}
      {/* Chimney */}
      <mesh position={[-0.8, 0.95, 0]}>
        <cylinderGeometry args={[0.08, 0.1, 0.5, 8]} />
        <meshPhongMaterial color="#0a0a0a" />
      </mesh>
    </group>
  )
}

export default function CargoShip() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 2, 7], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-5, 5, 5]} intensity={0.5} color="#4080ff" />
        {/* Ocean plane */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
          <planeGeometry args={[20, 20]} />
          <meshPhongMaterial color="#0a2140" transparent opacity={0.9} />
        </mesh>
        <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.5}>
          <Ship />
        </Float>
      </Canvas>
    </div>
  )
}
