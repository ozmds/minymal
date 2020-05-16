export const getTimeDifference = (startDate, endDate, dayCount) => {
    let hourDifference = endDate.getHours() - startDate.getHours();
    if (hourDifference < 0) {
        hourDifference += 24;
    }
    let minuteDifference = endDate.getMinutes() - startDate.getMinutes();
    if (minuteDifference < 0) {
        if (hourDifference === 0) {
            hourDifference += 24;
        }
        minuteDifference += 60;
        hourDifference -= 1;
    }
    hourDifference *= dayCount;
    minuteDifference *= dayCount;
    if (minuteDifference >= 60) {
        hourDifference += Math.floor(minuteDifference / 60);
        minuteDifference %= 60;
    }
    return {
        hours: hourDifference,
        minutes: minuteDifference
    };
};

export const getTotalTimeSpent = (selectedTime) => {
    let totalHours = 0;
    let totalMinutes = 0;
    for (let i = 0; i < selectedTime.length; i += 1) {
        const timeSpent = selectedTime[i];
        for (let j = 0; j < timeSpent.times.length; j += 1) {
            totalHours += timeSpent.times[j].difference.hours;
            totalMinutes += timeSpent.times[j].difference.minutes;
        }
    }
    return totalHours + Math.ceil(totalMinutes / 60);
};
