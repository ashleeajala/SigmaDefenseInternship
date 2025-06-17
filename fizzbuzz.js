function fizzBuzz(num){
    if (typeof num !== 'number') return NaN;
    if (num % 3 === 0) {
        if (num % 5 === 0)
            return 'FizzBuzz';
        return 'Fizz';
    }
    else if (num % 5 === 0) return 'Buzz';
    return num;
}

console.log(fizzBuzz(false));