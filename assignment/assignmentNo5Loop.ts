/*
Employee Table
S.No Name Base Salary Experience (Years) Year-End Rating (Out of5)
1
Alice
Johnson 75000.0 5.1 4.2
2 Bob Smith 68000.0 3.2 3.8
3 Carol Davis 82000.0 7.1 4.5
4 David Brown 90000.0 10.2 2.5
5 Eva Green 60000.0 2.4 3.5

Hike
Rating % of base Salary as variable pay Bonus
> =4.0 15.0 1500
>=3 && < 4 10.0 1200
< 3.0 3.0 300

Extra Perks
Employees with Experience >= 5 Years get extra Reward of 5000;

There are 5 Employee records. Now Calculate the Hike percentage of each Employee and store the
Values in Map with EmployeeName and HikePercentagevalue and Print them.

Hike = ( Base Salary * variable pay % ) + Bonus + Reward ;
Hike % = Hike / Base Salary .*/

interface empYearEndData {
    srNo: number,
    name: string,
    baseSalary: number,
    experience: number,
    yearEndRating: number
}


let employees: empYearEndData[] = [];

employees.push(getEmpData(1, "Alice Johnson", 75000, 5.1, 4.2));
employees.push(getEmpData(2, "Bob Smith", 68000, 3.2, 3.8));
employees.push(getEmpData(3, "Carol Davis", 82000, 7.1, 4.5));
employees.push(getEmpData(4, "David Brown", 90000, 10.2, 2.5));
employees.push(getEmpData(5, "Eva Green", 60000, 2.4, 3.5));

let empRevisedSalary: Map<string, number> = new Map();
for (let tempemp of employees) {
    console.log(tempemp);
    calculateHike(tempemp);
}
console.log("Employee with their Hike")
for (let tempHike of empRevisedSalary) {
    console.log(tempHike);
}



function calculateHike(tempemp: empYearEndData): void {
    let hike: number = 0;
    if (tempemp.yearEndRating >= 4) {
        hike = tempemp.baseSalary + (tempemp.baseSalary / 15 * 100) + 1500;

    }
    else if (tempemp.yearEndRating >= 3 && tempemp.yearEndRating < 4) {
        hike = tempemp.baseSalary + (tempemp.baseSalary / 10 * 100) + 1200;


    }
    else {
        hike = tempemp.baseSalary + (tempemp.baseSalary / 3 * 100) + 300;

    }


    if (tempemp.experience > 5) 
        hike = hike + 5000;
        empRevisedSalary.set(tempemp.name, hike / tempemp.baseSalary);
    



}
function getEmpData(srNo: number, name: string, baseSalary: number, experience: number, yearEndRating: number): empYearEndData {
    let tempEmp: empYearEndData = {
        srNo: srNo,
        name: name,
        baseSalary: baseSalary,
        experience: experience,
        yearEndRating: yearEndRating
    }

    return tempEmp;
}