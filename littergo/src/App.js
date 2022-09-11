import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Dashboard} from './Dashboard/Dashboard'
import { Leaderboard } from './Leaderboard/Leaderboard';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/Leaderboard" element={<Leaderboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
