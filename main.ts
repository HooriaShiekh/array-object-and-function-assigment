//assgment1

// program that manages a simple friend list.
// // 1. Define an object named people containing an empty array called friends

const people ={
     friends :[] as friends[]
};
// 2. Create three separate objects, each representing a friend, with properties like firstName,
// lastName, and optionally id
type friends ={
    firstName : string,
    lastName : string,
    id? : number
};


 let friend1 : friends={
    firstName : "hiba",
    lastName : "Arshad",
    id :  1
 };


 let friend2 : friends={
    firstName : "arooba",
    lastName : "zahoor",

 };

 let friend3: friends ={
    firstName : "afeera",
    lastName : "raees",
    id : 3
 };


// 3.add these friend objects to the friends array within the people object.

people.friends.push(friend1,friend2,friend3);

// 4. Output the entire people object to the console, displaying your information and your
// friend list.
console.log(people); 

//output{
    //  friends: [
//     { firstName: 'hiba', lastName: 'Arshad', id: 1 },
//     { firstName: 'arooba', lastName: 'zahoor' },
//     { firstName: 'afeera', lastName: 'raees', id: 3 }
//   ]
// }

// Assignment 2:Manipulating an Array: Rearranging Words
// Objective:
// Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
// Steps:
// 1. Scrambled Array:
// o Start with an array of elements in a scrambled order, like:

// const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];

const scrambledArray =["student","of",true,123 , "am", "a", "GIAIC", "I"];
// • Modify the Array:
// • Use methods like split(), join(), push(), pop(), shift(), and unshift() to:
// o Convert non-strings (booleans, numbers) to strings if needed


// o Split elements into character arrays (optional).
// o Rearrange characters or elements in the desired order (modify original array or
// create temporary arrays
scrambledArray.splice(2,2);
scrambledArray.pop()
scrambledArray.unshift("I")
scrambledArray[1] = "am",
scrambledArray[2] = "a",
scrambledArray[3] = "student",
scrambledArray[4] = "of",
scrambledArray[5] = "GIAIC",


// • Output the Result:
// • Use join() to combine elements back into a single string: "I am a student of GIAIC".

console.log(scrambledArray.join("  "));

// Assignment 3: Company Product Catalog
// Learning Objective: Implement data structures in TypeScript to represent and manage product
// information.
// Task: Create a program to represent a product catalog using an array and perform basic queries.
// 1. Define an array named inventory to store product information.
const inventory =[] as Product[]
// 2. Create three separate objects, each representing a product, with properties like name,
// model, cost, and quantity
type Product ={
   name : string,
   model : number,
   cost : number,
   quantity : number,
};
let product1  : Product ={
   name: "car",
   model : 1995,
   cost : 24000,
   quantity : 500,
};

let product2 : Product  ={
   name : "laptop",
   model : 2005,
   cost : 95000,
   quantity : 25,

};

let product3 : Product ={
   name : "bike",
   model : 1996,
   cost : 45000,
   quantity : 30,
};


// 3. Add these product objects to the inventory array using an appropriate array method.
inventory.push(product1);
inventory.push(product2);
inventory.push(product3);


// 4. Access and log the quantity property of a specific product (e.g., third product) in the
// inventory array.
let thirdPropertyQuantity = inventory[2].quantity;
console.log(`Quantity of the third product(bike):${thirdPropertyQuantity}`);

// 5. Explore adding and accessing more elements within the inventory array to understand
// how to manage product data.

//adding 
let product4 : Product ={
name : "Tablet",
model : 2023,
cost : 54000,
quantity : 23,
};
inventory.push(product4);

//acessing more element
console.log(`model of the first product(car): ${inventory[0].model}`);
console.log(`cost of the fourth product(Tablet) :${inventory[3].cost}`);
console.log(`name of the second product : ${inventory[1].name}`);

// Assignment 4: Student List Organizer
// Learning Objective: Get comfortable with data structures (objects and arrays) and basic
// functions in TypeScript.
// Tasks:
// 1. Student Data: The provided code defines an interface named Student that describes
// student information like name, senior status (true/false), and whether they've completed
// their assignments (true/false).
interface Student  {
   name :string;
   seniorStatus : boolean;
   completedAssigment : boolean;
};
// o Imagine this as a template for organizing student details.
// 2. Student List:
// o An array named students stores information about several students using the
// Student template. Think of this array as your class list!
const students : Student[] =[
{
   name : "arooba",
   seniorStatus : true,
   completedAssigment : false,

},
{
   name : "Hooriya",
   seniorStatus : true,
   completedAssigment : true
},
{
   name : "hiba",
   seniorStatus : false,
   completedAssigment : true,
},
];

// 3. Find Senior Students with Assignments (Optional):
// o The code (not shown here) has a function that might find students who are seniors
// and have completed their assignments.
function  findSeniorStudentWithAssigments(students :Student[]) : Student[]{
   return students.filter (student =>student.seniorStatus && student.completedAssigment );
};
let seniorStudentWithAssigments = findSeniorStudentWithAssigments(students);
console.log("Senior students with completed assigment:" ,seniorStudentWithAssigments);


// o Can you guess why this information might be helpful?
// 4. Class List Update:
// o Imagine you need to update your class list! The code (not shown here) might have
// a function that removes students who haven't completed their assignments
// (assuming only seniors are responsible).
function removeInCompleteSeniorStudents(students : Student[]) : Student[]{
return students.filter(student =>!(student.seniorStatus&& !student.completedAssigment));

}

let updatedClassList = removeInCompleteSeniorStudents(students);
console.log("Updated class list :", updatedClassList);

// o Can you think of any reasons why this might be useful (consider limitations)?