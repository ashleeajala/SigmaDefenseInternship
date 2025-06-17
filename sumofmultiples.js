function sum(num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        if (i % 3 === 0 || i % 5 === 0)
            sum += i;
    }
    return sum;
}

console.log(sum(10))


const grades = [80, 80, 50];

function calculateGrade(grades) {
let sum = 0;
for (let grade of grades) {
    sum+= grade
}
let gradeAverage = sum / grades.length;
if (gradeAverage >= 90)
    return 'A'
else if (gradeAverage >= 80)
    return 'B'
else if (gradeAverage >= 70)
    return 'C'
else if (gradeAverage >= 60)
    return 'D'
else
    return 'D'
}
console.log(calculateGrade(grades))