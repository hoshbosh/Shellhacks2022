import '../App.css'
import {Link} from 'react-router-dom'
export function Leaderboard(){
    return(
        <div className='bg-slate-500 h-screen grid grid-cols-3 grid-rows-6 p-8 space-x-4'>
          <Link to="/" className='btn text-center p-10'>
                Go Back
          </Link>
            <div className='row-span-6 bg-slate-900 rounded-3xl col-span-2 grid grid-rows-5'>
                <h1 className='font-LilitaOne text-center text-3xl underline row-span-2'>
                    Leaderboard
                </h1>
            </div>
        </div>
    )
}