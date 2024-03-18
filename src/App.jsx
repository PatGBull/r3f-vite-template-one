import { CameraControls, Environment } from '@react-three/drei'
import {useMemo, useRef} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import {v4 as uuidv4} from 'uuid'
import {range} from './utils'
import './scene.css'

const Scene = () => {
  return (
      <div>
	  <h1>Welcome to the starter template</h1>
		<div id="canvas-container">
		    <Canvas>
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
	}

export default Scene
