const isPrimeNumber = (A) => {
    let counter = 0;
    let isPrime = false;

    for (let i = 1; i * i <= A; i++) {
        if (A % i == 0) {
            if (A / i == i) {
                counter = counter + 1;
            } else {
                counter = counter + 2;
            }
        }
    }
    if (counter == 2) {
        isPrime = true;
    }
    return isPrime;
}
//sample run check
console.log(isPrimeNumber(0));
console.log(isPrimeNumber(1));
console.log(isPrimeNumber(2));
console.log(isPrimeNumber(3));
console.log(isPrimeNumber(4));
console.log(isPrimeNumber(5));