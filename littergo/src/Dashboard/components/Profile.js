import pfp from './SamplePFP.jpeg'
export default function Player(){
    
    return(
        <div className="col-span-2 row-span-3 grid grid-rows-2 bg-slate-500 p-5">
            <img className='pic justify-self-center' src={pfp}  alt="Cleanup Conquest Logo"/>
            <div>
            <h1 className='font-LilitaOne text-xl'>
                LVL. 1
            </h1>
            <div className='h-10 bg-green-200 rounded-full'>
            </div>
            </div>
        </div>
    )
}