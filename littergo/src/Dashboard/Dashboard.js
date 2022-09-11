import '../App.css';
import TitleCard from './components/TitleCard';
import Player from './components/Profile';
import { Link } from 'react-router-dom';
import { useState } from 'react';
function AddLitterButton(props){
  return(
      <button className='btn' onClick={props.function}>
        Add Litter
      </button>
  )
}
export function Dashboard() {
  const [exp, setExp]=useState(0)
  function resetCallback(){
    setExp(0)
  }
  function addCallback(){
    setExp(exp+1)
  }
  return (
    <div className='p-8 grid grid-cols-2 grid-rows-5 border-slate-0 h-screen bg-slate-500 space-x-3'>
      <TitleCard />
      <Player progress={exp} function={resetCallback}/> 
      <AddLitterButton function={addCallback}/>
          <Link to="/Leaderboard" className='btn text-center p-10 h-full w-full'>
                Leaderboard
          </Link>
    </div>
  );
}

