import { CameraControls, Environment } from '@react-three/drei'
import {useMemo, useRef} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import * as THREE from 'three'
import {v4 as uuidv4} from 'uuid'
import {range} from './utils'
import './scene.css'

const Scene = () => {
  return (
      <div>
	  <h1></h1>
		<div id="canvas-container">
		    <Canvas  camera={{ position: [0, 0, 4], fov: 45>
			<Perf position={top-left} />
			<color args={['hsl(10, 60%, 60%)']} attach="background" />
			<Environment preset="sunset" />
			<CameraControls makeDefault />
			<ambientLight intensity={0.1} />
			<directionalLight color="red" position={[0, 0, 5]} />
				<mesh>
				  <boxGeometry />
				  <meshStandardMaterial />
				</mesh>
		     </Canvas>
		</div>
	</div>
	     )
	};

export default Scene
