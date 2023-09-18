import { CameraControls, Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

function App() {
	return (
		<div className="h-full w-full flex flex-col justify-center items-center gap-8">
			<h1>Welcome to the starter template</h1>
			<div id="canvas-container" className="h-1/2 w-3/4">
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

export default App
