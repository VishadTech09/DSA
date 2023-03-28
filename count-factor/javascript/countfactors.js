const countFactor = (A) => {
    let counter = 0;
    for (let i = 1; i * i <= A; i++) {
        if(A%i == 0){
            if(A/i == i){
                counter = counter+1;
            }else{
                counter = counter+2;
            }
        }
    }

    return counter;
}

console.log(countFactor(10));