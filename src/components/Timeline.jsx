import React from "react";

const Timeline = ({ params }) => {

    let calcError = false;    

    const calcPixAmount = (timeStart, timeEnd, timeEvent, width) => {

        try {
            if (timeStart < timeEvent && timeEvent <= timeEnd) {
                return Math.round((timeEvent - timeStart) / (timeEnd - timeStart) * width);
            }
            throw new Error("Calculation failed");
        } catch (error) {
            calcError = true;            
            console.log(error.message);
        }
    };

    return (
        <>
            <div
                style={{
                    width: params.width + 'px',
                    margin: '20px',
                    border: '1px dashed blue',
                }}
            >
                <div style={{
                    width: calcPixAmount(params.startTime, params.endTime, params.eventTime, params.width) + 'px',
                    background: 'orange',
                    height: '15px'
                }}>
                </div>
            </div >
            {calcError ? <p>Calculation failed</p> : null}
        </>
    );
}

export default Timeline;
