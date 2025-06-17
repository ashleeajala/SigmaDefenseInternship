// function showStars(num) {
//     let char = '*';
//     let repeatedstring = '';
//     for (let i = 1; i <= num; i++) {
//         console.log(char.repeat(i));
//     }
// }

function showStars2(num) {
    for (let i = 1; i <= num; i++) {
        let pattern = '';
        for (let j = 0; j < i; j++)
            pattern += '*';
        console.log(pattern);
    }
}
showStars2(2);