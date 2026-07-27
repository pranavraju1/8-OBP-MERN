import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [time, setTime] = useState(0);
  
    useEffect(()=>{
        let timerId = setInterval(()=>{
            setTime(prev => prev + 1)
        }, 1000)

        return () => {
            clearInterval(timerId)
        }        
    },[])

  return (
    <div>
        <h1>Timer: {time}</h1>
    </div>
  )
}

export default Timer
