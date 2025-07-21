import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
 
import Random from './pages/Random';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <nav style={{ marginBottom: '20px' }}>
 
          <Link to="/random">Random Generator</Link>
        </nav>

        <Routes>
          
          <Route path="/random" element={<Random />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
