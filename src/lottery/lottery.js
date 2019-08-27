import React , { useState , useEffect } from 'react';
import useInterval from '@use-it/interval';
const Lottery = () => { 
    
    useEffect(() => {
        // handleRandom()   
    } , [])

    const [count, setCount] = useState(0);
    const [delay, setDelay] = useState(1000)
    useInterval(() => { 
        setCount(currentCount => currentCount + 1);
        handleCountDown()
   }, delay);
   
 

    const number = {
        digit1 : '-',
        digit2 : '-',
        digit3 : '-',
        digit4 : '-',
        digit5 : '-',
        digit6 : '-'
    }
    const [num, setNum] = useState(number)

    const configCountDown = {
        hour : 0,
        minute : 0,
        second : 10
    } 

    const [ newTime , setTimeShow ] = useState(configCountDown)
  
    const handleRandom = () => { 
        const cloneNumber = Object.assign({},num)
        Object.keys(num).map( key => 
            cloneNumber[key] = Math.floor(Math.random() * Math.floor(9))
        )
        setNum(cloneNumber)
    } 

 
    const handleCountDown = () => { 
        let cloneTimeShow = [] 
            if(newTime.second>0){ 
            cloneTimeShow = {
                hour : newTime.hour,
                minute : newTime.minute,
                second : newTime.second-1
            }
            setTimeShow(cloneTimeShow)
        }else if(newTime.second==0 && newTime.minute>0 && count==0 ){
            cloneTimeShow = {
                hour : newTime.hour,
                minute : newTime.minute-1,
                second : 59
            }
            setTimeShow(cloneTimeShow)
        }else if(newTime.second==0 && newTime.minute==0 && newTime.hour>0 && count==0 ){
            cloneTimeShow = {
                hour : newTime.hour,
                minute : newTime.minute-1,
                second : 59
            }
            setTimeShow(cloneTimeShow)

            if(newTime.hour == 0 ){
                setDelay(null)
                handleRandom();
            }
        }else{
            setDelay(null)
            handleRandom();
        }
    }
 
    return (
        <div className="wrapper">
        <h1>Lottery
            <p className="">
                <label> {newTime.hour} ชั่วโมง : </label> 
                <label> {newTime.minute} นาที :</label> 
                <label> {newTime.second} วินาที</label>
            </p>
        </h1>
        <div className="wrapper-lottery">
          <div>{num.digit1}</div>
          <div>{num.digit2}</div>
          <div>{num.digit3}</div>
          <div>{num.digit4}</div>
          <div>{num.digit5}</div>
          <div>{num.digit6}</div>
        </div>
        
        {/* <button onClick={() => handleRandom() }>Random Lottery</button> */}
      </div>
    )
}
export default Lottery;