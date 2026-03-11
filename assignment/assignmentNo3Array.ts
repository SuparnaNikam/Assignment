/*1. Create two arrays to store student names ["Suresh","Mahesh","Naresh"] and
marks [75, 80, 82] Add 10 marks to each students using assignment operators and
store it into another array, after adding 10 marks identify the average marks of all
students

Expected Output:
Updated Marks:
Suresh: 85
Mahesh: 90
Naresh: 92
Average Marks: 89.0 */

let studentName : string[] = ["Suresh","Mahesh","Naresh"];
let studentMarks : number[] = [75, 80, 82];
let studentUpdatedMarks : number[] =[];
let averageMarks: number = 0;
let i: number = 0;
console.log("Student name\t Marks \t Upadted Marks");
for (i = 0; i < studentName.length; i++)
{
studentUpdatedMarks[i] = studentMarks[i] + 10;
console.log(`${i+1}.${studentName[i]}\t${studentMarks[i]}\t${studentUpdatedMarks[i]}`);
averageMarks = averageMarks + studentUpdatedMarks[i];
}
console.log("Average Marks: "+ averageMarks/(studentUpdatedMarks.length));
