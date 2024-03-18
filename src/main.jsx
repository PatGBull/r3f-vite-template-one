import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import { Perf } from 'r3f-perf'
import Scene from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<StrictMode>
	  <Perf />
	  <Scene />
	</StrictMode>
)
