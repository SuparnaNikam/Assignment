/*
*
**
***
****
***** 
*/
let pattern: string = '';
for (let i = 5; i >= 1; i--) {
    pattern = '';
    // inner loop to print spaces.
    for (let j = 1; j < i; j++) {
        pattern += ' ';
    }
    // inner loop to print stars.
    for (let j = 0; j <= 5 - i; j++) {
        pattern += '*';
    }
    // printing new line for each row
    console.log(pattern);
}

