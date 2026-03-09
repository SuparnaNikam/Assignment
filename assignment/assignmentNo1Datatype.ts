
//1. Temperature of a city in degrees Celsius: 25.5
let cityTemprature: number = 25.5;
console.log("Temperature of a city in degrees Celsius: " + cityTemprature);

//2. Whether a customer has placed an order: true or false
let orderStatus: boolean = true; 
console.log("Status of customer roder is = "+ orderStatus);


//3. Person's phone number: "123-456-7890"
let phoneNo: string = "123-456-7890";
console.log("Person's phone number is "+ phoneNo);

//4. Amount of money in a customer's bank account: 1000.50
let accountBalance: string | number = 1000.50;
console.log(`Amount of money in a customer's bank account is ${accountBalance}`);



//5. Person's email address: "john.doe@example.com"

let emailId: string = "john.doe@example.com";
console.log("Person's email address = " + emailId);

//6. Coordinates of a location (latitude, longitude): 37.7749, -122.4194
//let coordinates: Location = {
 //   latitude: number,
 //   longitude: number
//};

let coordinates: { latitude: number; longitude: number } = {
latitude: 37.7749,
longitude: -122.4194
};

console.log(`Coordinates of a location latitude = ${coordinates.latitude} and  longitude = ${coordinates.longitude}`);




//7. Person's marital status: true or false
let maitalStatus: any = true; 
console.log("Status of customer roder is = "+ maitalStatus);



//8. Person's occupation: "Software Engineer"

let occupation: string = "Software Engineer";
console.log(`Person's occupation is  ${occupation}`);

//9. Person's favourite colour: "Blue"
let fevouriteColor: String = "Blue";
console.log("Person's favourite colour: " + fevouriteColor);



//10.Current year: 2023

let currentYear: number = 2023;
console.log('Current year = '+currentYear);

//11.Number of followers on a social media platform: 1,000,000
let followers: any = "1,000,000";
console.log("Number of followers on a social media platform: " + followers);

followers = "1M";
console.log("Number of followers on a social media platform: " + followers);

followers = 100000;
console.log("Number of followers on a social media platform: " + followers);


//12.Rating of a movie: 7.5
let movieRating: string | number = 75.;
console.log("Rating of a movie: " + movieRating);


movieRating = "7+";
console.log("Rating of a movie: " + movieRating);

//13.Person's blood type: 'A'
let bloodGroup: String = "A";

console.log("Person's blood type: " + bloodGroup);
 bloodGroup = "A+";
console.log("Person's blood type: " + bloodGroup);

//14.Title of a book: "To Kill a Mockingbird"
let bookTile: string = "To Kill a Mockingbird";
console.log("Title of a book: " + bookTile);





//15.Number of employees in a company: 500
let totalEmp: number = 500;
console.log("umber of employees in a company are " + totalEmp);

//16.Time of an event: 2:30 PM
let time: string | number | null = "2:30 PM";
console.log("Time of an event = " + time);

time  = null;
console.log("Time of an event = " + time);

time = 18.00
console.log("Time of an event = " + time);

//17.Name of a country: "United States"
let countrytName: string= "United States";
console.log("Name of a countryt = " + countrytName);



//18.Person's eye color: "Brown"
let eyeClour: string= "United States";
console.log("Person's eye color = " + eyeClour);


////19.Person's birthplace: "New York City"
let birthplace: string= "New York City";
console.log(`Person's birthplace:  ${birthplace}`);


//20. Distance between two cities: 200.5

let distance: any= 200.5
console.log(`Distance between two cities:  ${distance}`);

distance = "20 mile";
console.log(`Distance between two cities:  ${distance}`);

//distance = Symbol()
//console.log(`Distance between two cities:  ${distance}`);


//6. Coordinates of a location (latitude, longitude): 37.7749, -122.4194
//let coordinates: Location = {
 //   latitude: number,
 //   longitude: number



interface coordinates {
latitude: number ,
longitude: string
}
let location1:coordinates = {
latitude: 37.7749,
longitude: "-122.4194"
};
console.log("Coordinates of a location:  latitude", +location1.latitude);
console.log("Coordinates of a longitude:  longitude", +location1.longitude);