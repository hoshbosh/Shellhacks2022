import pfp from './SamplePFP.jpeg'
import { useState } from 'react'
function ProgressSegments(props){
    let shouldShow=false
    let progress=[]
    for(let x=0;x<10;x++){
        if(x<props.exp){
            shouldShow=true
        }else{
            shouldShow=false
        }
        progress.push(
            <div className={`h-10 first:rounded-l-full last:rounded-r-full last:active:rounded-r-full ${shouldShow?"active":"inactive"}`}>
            </div>
        )
    }
    if(props.exp>10){
        props.function()
        for(let x=0;x<10;x++){
            shouldShow=false
            progress.push(
                <div className={`h-10 first:rounded-l-full last:rounded-r-full last:active:rounded-r-full ${shouldShow?"active":"inactive"}`}>
                </div>
            )
        }
    }
    return progress
}
export default function Player(props){
    const [level, setLevel]=useState(1) 
    function levelCallback(){
        setLevel(level+1)
        props.function(0)
    }
    return(
        <div className="col-span-2 row-span-3 grid grid-rows-2 bg-slate-500 p-5">
            <img className='pic justify-self-center' src={pfp}  alt="Cleanup Conquest Logo"/>
            <div>
            <h1 className='font-LilitaOne text-xl'>
                LVL. {level}
            </h1>
            <div className='grid grid-cols-10'>
                <ProgressSegments exp={props.progress} function={levelCallback}/>
            </div>
            </div>
        </div>
    )
}