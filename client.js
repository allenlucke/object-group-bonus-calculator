const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];
// let allEmployees = [];

function processEmployee(employee){
  // employee is the object we care about!
  const newObject = {};
  newObject.name = employee.name;
  //newObject.bonusPercentage = employee.employeeNu;
  //newObject.totalCompensation = employee.totalCompensation;
  //newObject.totalBonus = employee.totalBonus;
  return newObject;

}
console.log(processEmployee('Jem'))
for(let i = 0; i < employees.length; i++) {
  processEmployee(employees[i]);
}

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

// let  employeeNames (employees) = {
//   name: 'name',
//   employeeNumber: 'employeeNumber',
//   annualSalary: 'annualSalary',
//   reviewRating: 'reviewRating',
// }


