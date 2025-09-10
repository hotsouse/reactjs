import {useState,useEffect} from "react";

export default function CountdownTimer() {
    const [seconds,setSeconds]=useState("");
    const [timeLeft,setTimeLeft]=useState(null);
    const [isRunning,setIsRunning]=useState(false);

    const handleStart = () => {
        if (seconds>0) {
            setTimeLeft(Number(seconds));
            setIsRunning(true);
        }
    };
    useEffect(()=>{
        let timer = null;

        if (isRunning && timeLeft >0 ) {
            timer=setInterval(()=> {
                setTimeLeft((prev)=> prev- 1);
            },1000);
            } else if (timeLeft===0){
                setIsRunning(false);
                alert("Time is up!");
            }
            return () => clearInterval(timer);},[isRunning,timeLeft]);
            return (
                <div 
                  style={{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    height:"100vh",
                }}>
                    <div style={{textAlign:"center"}}>

                    <h2>Countdown Timer</h2>

                    
                    <input
                    type="number"
                    value={seconds}
                    onChange={(e)=>setSeconds(e.target.value)}
                    placeholder="Enter seconds"
                    style={{padding:"8px",margin:"10px 0",width:"200px"}}
                    />
                 <div>
                   <button
    onClick={handleStart}
    disabled={isRunning}
    style={{ padding: "8px 20px", marginTop: "10px" }}>
        Start 
        </button>
        </div>
        {timeLeft !== null&&(
            <h3 style={{marginTop:"20px"}}>
                Time left:{timeLeft} second{timeLeft !==1 ? "s": ""}
                </h3>
        )}
        </div>
        </div>
            );
        }