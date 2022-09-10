import './App.css';
import TitleCard from './components/TitleCard';
import Player from './components/Profile';
function App() {
  return (
    <div className='grid grid-cols-2 grid-rows-5 border-slate-0 h-screen bg-slate-500'>
      <TitleCard />
      <Player/> 
      <button className='btn'>
        wow
      </button>
      <button className='btn'>
        wow
      </button>
    </div>
  );
}

export default App;