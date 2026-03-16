/*
Write a program to perform the following tasks:
1. Count the total number of words in the sentence.
2. Print the sentence words in reverse order.
3. Convert the first character of each word to uppercase and print original sentence

String sentence = "Java programming is fun and challenging";*/

{
    let inputString: string = "Java programming is fun and challenging";
    console.log("Orignal sentence = " + inputString);

    let stringToArrya: string[] = inputString.split(" ");
    console.log("Total number of words in the sentence = " + stringToArrya.length);



    stringToArrya = stringToArrya.reverse()
    //let tempString: string = stringToArrya.join(" ");
    //console.log("Sentence words in reverse order = " +tempString );
    console.log("Sentence words in reverse order = " + String(stringToArrya.join(" ")));


    stringToArrya = inputString.split(" ");
    let stringToArrya1: string[] = inputString.split(" ");
    let tempString: string = " ";
    for (let i = 0; i <= stringToArrya.length; i++) {
        let twmpWord: string = String(stringToArrya[i]);

        let tempStringArray: string[] = twmpWord.split('');

        let tempChar: string = String(tempStringArray[0]);
        tempStringArray[0] = tempChar.toUpperCase();
        stringToArrya1[i] = tempStringArray.join('');

    }

    let arrayToString: string = stringToArrya1.join(' ');

    console.log("Convert the first character of each word to uppercase and print original sentence :" + arrayToString);
}
