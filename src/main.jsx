import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import Scene from './App'
import './index.css'

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      <a href="https://pmnd.rs/" style={{ position: 'absolute', top: 40, left: 90, fontSize: '13px' }}>
        Title
        <br />
       For web Page
      </a>
      <div style={{ position: 'absolute', top: 40, right: 40, fontSize: '13px' }}>What's the date again?</div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
	<StrictMode>
	  <Overlayy />
	  <Scene />
	</StrictMode>
)
