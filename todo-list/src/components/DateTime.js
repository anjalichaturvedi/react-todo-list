import  React, { useState , useEffect } from 'react'

export const DateTime = () => {

    var [date,setDate] = useState(new Date());

    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }

    });

    return(
        <div class="container">
         <div class="box">
            <p> {date.toLocaleTimeString()}</p>
          </div>
        </div>
    )
}

export default DateTime
