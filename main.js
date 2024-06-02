//assgment1
// program that manages a simple friend list.
// // 1. Define an object named people containing an empty array called friends
var people = {
    friends: []
};
var friend1 = {
    firstName: "hiba",
    lastName: "Arshad",
    id: 1
};
var friend2 = {
    firstName: "arooba",
    lastName: "zahoor",
};
var friend3 = {
    firstName: "afeera",
    lastName: "raees",
    id: 3
};
// 3.add these friend objects to the friends array within the people object.
people.friends.push(friend1, friend2, friend3);
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
var scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
// • Modify the Array:
// • Use methods like split(), join(), push(), pop(), shift(), and unshift() to:
// o Convert non-strings (booleans, numbers) to strings if needed
// o Split elements into character arrays (optional).
// o Rearrange characters or elements in the desired order (modify original array or
// create temporary arrays
scrambledArray.splice(2, 2);
scrambledArray.pop();
scrambledArray.unshift("I");
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
var inventory = [];
var product1 = {
    name: "car",
    model: 1995,
    cost: 24000,
    quantity: 500,
};
var product2 = {
    name: "laptop",
    model: 2005,
    cost: 95000,
    quantity: 25,
};
var product3 = {
    name: "bike",
    model: 1996,
    cost: 45000,
    quantity: 30,
};
// 3. Add these product objects to the inventory array using an appropriate array method.
inventory.push(product1);
inventory.push(product2);
inventory.push(product3);
// 4. Access and log the quantity property of a specific product (e.g., third product) in the
// inventory array.
var thirdPropertyQuantity = inventory[2].quantity;
console.log("Quantity of the third product(bike):".concat(thirdPropertyQuantity));
// 5. Explore adding and accessing more elements within the inventory array to understand
// how to manage product data.
//adding 
var product4 = {
    name: "Tablet",
    model: 2023,
    cost: 54000,
    quantity: 23,
};
inventory.push(product4);
//acessing more element
console.log("model of the first product(car): ".concat(inventory[0].model));
console.log("cost of the fourth product(Tablet) :".concat(inventory[3].cost));
console.log("name of the second product : ".concat(inventory[1].name));
;
// o Imagine this as a template for organizing student details.
// 2. Student List:
// o An array named students stores information about several students using the
// Student template. Think of this array as your class list!
var students = [
    {
        name: "arooba",
        seniorStatus: true,
        completedAssigment: false,
    },
    {
        name: "Hooriya",
        seniorStatus: true,
        completedAssigment: true
    },
    {
        name: "hiba",
        seniorStatus: false,
        completedAssigment: true,
    },
];
// 3. Find Senior Students with Assignments (Optional):
// o The code (not shown here) has a function that might find students who are seniors
// and have completed their assignments.
function findSeniorStudentWithAssigments(students) {
    return students.filter(function (student) { return student.seniorStatus && student.completedAssigment; });
}
;
var seniorStudentWithAssigments = findSeniorStudentWithAssigments(students);
console.log("Senior students with completed assigment:", seniorStudentWithAssigments);
// o Can you guess why this information might be helpful?
// 4. Class List Update:
// o Imagine you need to update your class list! The code (not shown here) might have
// a function that removes students who haven't completed their assignments
// (assuming only seniors are responsible).
function removeInCompleteSeniorStudents(students) {
    return students.filter(function (student) { return !(student.seniorStatus && !student.completedAssigment); });
}
var updatedClassList = removeInCompleteSeniorStudents(students);
console.log("Updated class list :", updatedClassList);
// o Can you think of any reasons why this might be useful (consider limitations)?
