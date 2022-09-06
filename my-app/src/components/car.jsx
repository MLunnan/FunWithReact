import React from 'react';

const Car = (props) => {
    return (
        <div>
            this is a
            <span style={{color: props.carColor}}> {props.carColor} </span>
            car
            <Seat 
            seatColor="green" 
            showColor={true}/>
        </div>
    );
}
const Seat = (props) => {
    return (
        <div>
            this is a {props.showColor ? props.seatColor : ""} seat
        </div>
    )
}

export default Car;
