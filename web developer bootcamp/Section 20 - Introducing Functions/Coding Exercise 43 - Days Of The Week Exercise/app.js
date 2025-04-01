// DEFINE YOUR FUNCTION BELOW:

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function returnDay(bonk) {
    if (bonk < 1 || bonk > 7)
        return null;
    else
        return daysOfWeek[bonk - 1]
}