
const calcPixAmount = (timeStart, timeEnd, timeEvent, width) => {
    try {
        if (timeStart < timeEvent && timeEvent < timeEnd) {
            return ((timeEvent - timeStart) / (timeEnd - timeStart)) * width;
        }
        throw new Error("Calculation failed");
    } catch (error) {
        return error;
    }
};

export default calcPixAmount;