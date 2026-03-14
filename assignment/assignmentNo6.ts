/*Given a number n, determine whether it is a prime number or not. A prime number is a
number greater than 1 that has no positive divisors other than 1 and itself.*/
function primeNumber1(num: number): void {

    if (num == 1)
        console.log(`${num} is prime number`);
    else {
        let k: number = 2;
        for (; k < num; k++) {
            if (num % k == 0) {
                console.log(`${num} is not prime number`);
                break;
            }
        }
        if (num == k)
            console.log(`${num} is  prime number`);
    }

}

function primeNumber2(num: number): void {
    let count: number = 0;

    for (let i: number = 2; i < num; i++) {
        if (num % i == 0) {
            count = 1;
            break;
        }
    }
    if (count == 0 || num == 1)
        console.log(`${num} is  prime number`);
    else
        console.log(`${num} is not prime number`);
}
console.log("find prime numbers");
primeNumber1(1);
primeNumber1(11);
primeNumber1(9);
primeNumber1(8);
console.log("******************");
primeNumber2(1);
primeNumber2(11);
primeNumber2(9);
primeNumber2(8);