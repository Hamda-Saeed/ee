import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Model as Girl } from './Girl.jsx'

import * as THREE from 'three'

export default function HeroExperience() {
  return (
     <Canvas>
      <ambientLight />
      <directionalLight position={[-2, 0, 3]} intensity={3} color={"#FF28D5"} />
      <directionalLight position={[2, 0, 3]} intensity={3} color={"#1C34FF"} />

      <group>
        <Girl scale={9} position={[0, -14.3, 0]} />
      </group>
    </Canvas>
  )
}
