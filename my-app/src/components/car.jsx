import React, {useState} from 'react';

const Car = () => {
    const [carColor, setCarColor] = useState("red")
    const [showSeat, setShowSeat, ] = useState(true)
    const onClickChangeColor = () => {
        const newColor = carColor === "red" ? "blue" : "red"
        setCarColor(newColor)
    }
    return (
        <div>
            this is a
            <span style={{color: carColor}}> {carColor} </span>
            car
            <button onClick={onClickChangeColor}>Change the color</button>
            <button onClick={()=>setShowSeat(!showSeat)}>Toggle seat</button>
            {showSeat? <Seat 
            seatColor="green" 
            showColor={true}/>:true}
        </div>
    );
}
const Seat = () => {
    return (
        <div>
            this is a seat
        </div>
    )
}

export default Car;
