import React from 'react'
import { useState, useEffect } from 'react'


const SmartCounter = () => {
    const [count, setCount] = useState(0);
    const [history, setHistory] = useState([]);
    const [prevHistory, setPrevHistory] = useState({history:[], count:0});

    const increment = () =>{
        setCount(count+1);
        const newString = `Incremented to ${count+1} on ${new Date().toLocaleString()}`;
        setPrevHistory(
            {
                history:[...history],
                count:count
            }
        );
        localStorage.setItem('history', JSON.stringify(history));

        setHistory([...history, newString])
    }

    const decrement=()=>{
        setCount(count-1);
        const newString = `Decremented to ${count-1} on ${new Date().toLocaleString()}`;
        setPrevHistory(
            {
                history:[...history],
                count:count
            }
        );
        localStorage.setItem('history', JSON.stringify(history));
        setHistory([...history, newString])
    }

    const reset = ()=>{
        setCount(0);
        const newString = `Reset to 0 on ${new Date().toLocaleString()}`;
        localStorage.setItem('history', JSON.stringify(history));
        setHistory([...history, newString])
    }

    const undo = ()=>{
        setHistory(prevHistory.history);
        setCount(prevHistory.count);

    }

    useEffect(()=>{
        if(localStorage.getItem('history')){
            setHistory(JSON.parse(localStorage.getItem('history')));
        }
    }, [])

    useEffect(()=>{
        if(history.length > 5){
            setHistory(history.slice(-5));
        }
    }, [count, history])

  return (
    <div>
        <h1>Smart Counter</h1>

        <h2>Count: {count}</h2>

        <div className="buttons">
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={undo}>Undo</button>
            <button>Clear History</button>
        </div>

        <div className="history">
            <ul>
            {
history.length > 0 ? (
                history.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
            ) : (
                <li>No history available</li>
                )
                
            }
            </ul>
        </div>
    </div>
  )
}

export default SmartCounter