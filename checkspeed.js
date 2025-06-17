// function checkSpeed(speed) {
//     let points = 0;
//     if (Math.floor(speed) >= 0 && Math.floor(speed) <= 74) return 'Ok'
//     for (let i = speed; i > 70; i -= 5){
//         points++;
//     }
//     if (points >= 12) return 'License suspended';
//     return points;
// }

function checkSpeed(speed) {
    const speedLimit = 70
    if (speed < speedLimit + 5) return 'Ok'
    let points = Math.floor((speed - speedLimit) / 5)
    if (points >= 12) return 'License suspended';
    return points;
}

console.log(checkSpeed(100))