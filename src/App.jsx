import * as THREE from 'three'
import { CameraControls, Environment, View, Html } from '@react-three/drei'
import { useMemo, useRef, useState } from 'react'
import { Canvas, useFrame, useThree, addEffect } from '@react-three/fiber'
import { useSprings, a } from '@react-spring/three'
import { Perf } from 'r3f-perf'
import {v4 as uuidv4} from 'uuid'
import {range} from './utils'
import Lenis from '@studio-freight/lenis'
import './scene.css'

import { colors } from "./data";
import { useStore } from "./store";

// Use lenis smooth scroll
const lenis = new Lenis({ syncTouch: true })
// Integrate into fibers own raf loop instead of opening another
addEffect((t) => lenis.raf(t))

function Objects() {
	
	const [index, setIndex] = useState(0);

	// const play = useStore((s) => s.play);

	 const default = useRef();

  	//const { viewport: { width, height }, } = useThree();
	
}

function Box({ text, color, ...props }) {
  const [hovered, set] = useState(false)
  return (
    <mesh {...props} onPointerOver={(e) => set(true)} onPointerOut={(e) => set(false)}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : color} />
      <Html position={[0, 0, 1]} className="label" center>
        {text}
      </Html>
    </mesh>
  )
}

function ScrollContainer({ scroll, children }) {
  const { viewport } = useThree()
  const group = useRef()
  useFrame((state, delta) => {
    group.current.position.y = THREE.MathUtils.damp(group.current.position.y, viewport.height * scroll.current, 4, delta)
  })
  return <group ref={group}>{children}</group>
}

export default function Scene() {
// const Scene = () => {
  const ref = useRef()
  const scrollRef = useRef()
  const scroll = useRef(0)
	
  const viewport = useThree((state) => state.viewport)
	
  return (<>
      <div ref={ref} className="container">
      <div className="text">
        "But afterwards there occurred violent earthquakes and floods; and in a single day and night of rain all your warlike men in a body sank into the earth,
        and the island of Atlantis in like manner disappeared, and was sunk beneath the sea."
      </div>
      <div>
{/* 	  <h1>New Entry</h1> */}
		<div id="canvas-container">
		<Canvas  
		   shadows
        	   frameloop="demand"
		   camera={{ position: [0, 0, 4], fov: 45}}
		   style={{ pointerEvents: 'none' }}
		   eventSource={ref}
        	   eventPrefix="offset">
		<CameraControls makeDefault />
		<Perf position={top-left} />
			
		<color args={['hsl(10, 60%, 60%)']} attach="background" />
		<Environment preset="sunset" />
			
		<ambientLight intensity={0.1} />
		<directionalLight color="red" position={[0, 0, 5]} />
			<ScrollContainer scroll={scroll}>
		 		<Box text={<h1>H1 caption</h1>} color="lightblue" position={[0, -viewport.height, 0]} />
				<mesh>
				<boxGeometry />
				<meshStandardMaterial />
				</mesh>
		 	</ScrollContainer>
		</Canvas>
			<div
        		ref={scrollRef}
        		onScroll={(e) => (scroll.current = e.target.scrollTop / (e.target.scrollHeight - e.target.clientHeight))}
        		className="scroll">
        		<div style={{ height: `200vh`, pointerEvents: 'none' }}>
			</div>
      		</div>
		</div>
      </div>
      </>
  );
};

//export default Scene
