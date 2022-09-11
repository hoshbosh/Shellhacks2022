import '../App.css'
import {Link} from 'react-router-dom'
import SamplePlayers from '../Leaderboard/SamplePlayers';
function PlayersList(){
    let playerList=[]
    let string=""
    let rank=0
    let playerComponenets=[]
    for(const key1 in SamplePlayers.Players){
        rank=rank+1
        for (const key in SamplePlayers.Players[key1]) {
            if(key=="Name"){
                string=`${rank}. ${SamplePlayers.Players[key1][key]}`
            }else{
                string=string+`---------------${SamplePlayers.Players[key1][key]}`
            }
            console.log(`${key}: ${SamplePlayers.Players[key1][key]}`);
        }
        playerList.push(string)
    }
    console.log(playerList)
    playerList.forEach(
        (element)=>{
            playerComponenets.push(
                <div className='font-LilitaOne text-md p-8 text-white'>
                    {element}
                </div>
            )
        }
    )
    return playerComponenets
}
export function Leaderboard(){
    let areaCode=34476

    return(
        <div className='bg-slate-500 h-screen grid grid-cols-3 grid-rows-6 p-8 space-x-4 space-y-4'>
          <Link to="/" className='btn text-center p-8 text-3xl'>
                Go Back
          </Link>
            <div className='row-span-6 bg-slate-900 rounded-3xl col-span-2 grid grid-rows-12'>
                <h1 className='font-LilitaOne text-center text-3xl underline row-span-2 text-white'>
                    Leaderboard
                </h1>
                <PlayersList/>
            </div>
            <div className='bg-blue-900 rounded-full text-center font-LilitaOne text-md p-4'>
                Your Area Code: {areaCode}
            </div>
        </div>
    )
}