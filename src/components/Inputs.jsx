import React from 'react';
import classes from './Inputs.module.css';

const Inputs = ({ params, setParams }) => {

    const startInputHandler = (event) => {
        setParams({
            ...params,
            startTime: +event.target.value
        });
    };

    const endInputHandler = (event) => {
        setParams({
            ...params,
            endTime: +event.target.value
        });
    };

    const eventInputHandler = (event) => {
        setParams({
            ...params,
            eventTime: +event.target.value
        });
    };

    const widthInputHandler = (event) => {
        setParams({
            ...params,
            width: +event.target.value
        });        
    };

    return (
        <div className={classes.inputs}>
            <label>Enter Start time:</label>
            <input type="number"
                onChange={startInputHandler}
                defaultValue="100"
            />

            <label>Enter End time:</label>
            <input type="number"
                onChange={endInputHandler}
                defaultValue="500"
            />

            <label>Enter Event time:</label>
            <input type="number"
                onChange={eventInputHandler}
                defaultValue="255"
            />

            <label>Enter timeline width (px):</label>
            <input
                min="100"
                max="1000"
                type="number"
                onChange={widthInputHandler}
                defaultValue="800"
           />
        </div>
    );
}

export default Inputs;
