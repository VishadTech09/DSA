const fizzBuzzArray = (n) => {
    let fbArray = new Array(); // space complexity = O(n)

    for (let index = 1; index <= n; index++) {
        if (index % 3 == 0) {
            if (index % 5 == 0) {// divisible by 3 & 5
                fbArray.push(`FizzBuzz`)
            } else { // only divisible by 3
                fbArray.push(`Fizz`)
            }
        } else if (index % 5 == 0) { // only divisible by 5
            fbArray.push(`Buzz`)
        } else {
            fbArray.push(index.toString())
        }

    }

    return fbArray;

}

console.log(fizzBuzzArray(15));