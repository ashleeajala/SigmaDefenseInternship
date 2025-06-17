function showPrimes(num) {
    for (let i = 2; i <= num; i++) {
        if (isPrime(i))
            console.log(i);
    }
}
function isPrime(num) {
    // let prime = true;
    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
   return true;
}

showPrimes(20);