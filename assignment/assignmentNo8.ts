/*
Assignment: Write a program to search for all occurrences of a “Java” word in the paragraph and print their
indexes.
1. Find total number of occurrences
2. Print count and Indexes of the word

String paragraph = "Java is a popular programming language. Java is used for web
development, mobile applications, and more."; */

{
    let inputString: string = "Java is a popular programming language. Java is used for web development, mobile applications, and more.";
    let stringToArray: string[] = inputString.split(' ');
    let StringIndex: number[] = [];
    let stringCount: number = 0;
    let j: number = 0;
    for (let i = 0; i <= stringToArray.length; i++) {
        let tempString: string = String(stringToArray[i]).toLowerCase();
        if ("java" == tempString) {
            stringCount++;
            StringIndex[j] = i + 1;
            j++;
        }
    }
    console.log("Orignal String = " + inputString);
    console.log(`1. Find total number of occurrences of "Java" word in input string  = {stringCount}`);
    console.log(`Java word found location = ${String(StringIndex)}`);


}