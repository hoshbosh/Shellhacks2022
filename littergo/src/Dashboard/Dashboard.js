import '../App.css';
import TitleCard from './components/TitleCard';
import Player from './components/Profile';
import { Link } from 'react-router-dom';
function AddLitterButton(){
  return(
      <button className='btn'>
        Add Litter
      </button>
  )
}
export function Dashboard() {
  return (
    <div className='p-8 grid grid-cols-2 grid-rows-5 border-slate-0 h-screen bg-slate-500'>
      <TitleCard />
      <Player/> 
      <AddLitterButton/>
          <Link to="/Leaderboard" className='btn text-center p-12'>
                Leaderboard
          </Link>
    </div>
  );
}

