import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
    return (
        <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <div className="antialiased bg-black text-white selection:bg-neon-green selection:text-black font-space-grotesk">
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
