import React from 'react';

const Count = () => {
    const [count, setCount] = useState(()=>{
        return 0
    })
    function decrementCount (){
        setCount(prevCount => prevCount-1)
    }
    function incrementCount (){
        setCount(prevCount => prevCount+1)
    }
    return (
        <div>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
        </div>
    );
}

export default Count;
