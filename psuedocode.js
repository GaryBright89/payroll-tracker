// 1. Initialize an empty array to store employee data.
// 2. Create a function to add an employee:
//     a. When the "Add employee" button is clicked:
//         i. Prompt the user for the employee's first name, last name, and salary.
//         ii. Store the entered data in an object.
//         iii. Add the object to the array of employee data.
//         iv. Prompt the user to continue or cancel.
//         v. If the user chooses to continue, repeat the process to add a new employee.
//         vi. If the user chooses to cancel:
//             - Sort the employee data array alphabetically by last name.
//             - Display the sorted employee data on the page.
//             - Compute and aggregate data (e.g., total salaries).
//             - Display the computed and aggregated



// Global variables
// let employeeList = []
// let totalSalaries = 0

// // Function to prompt for employee details
// function addEmployee() {
//   let firstName = prompt("Enter employee's first name:")
//   let lastName = prompt("Enter employee's last name:")
//   let salary = prompt("Enter employee's salary:")

//   let employee = {
//     firstName: firstName,
//     lastName: lastName,
//     salary: parseFloat(salary)
//   }

//   employeeList.push(employee)
//   totalSalaries += employee.salary

//   let continueAdding = confirm("Do you want to add another employee?")
//   if (continueAdding) {
//     addEmployee()
//   } else {
//     displayEmployees()
//     displaySummary()
//   }
// }

// // Function to display employees sorted by last name
// function displayEmployees() {
//   employeeList.sort((a, b) => a.lastName.localeCompare(b.lastName))

//   let employeeList = document.getElementById("employeeList")
//   employeeList.innerHTML = ""

//   for (let employee of employeeList) {
//     let listItem = document.createElement("li")
//     listItem.textContent = `${employee.firstName} ${employee.lastName}: $${employee.salary.toFixed(2)}`
//     employeeList.appendChild(listItem)
//   }
// }

// // Function to display summary in the console
// function displaySummary() {
//   console.log(`Total number of employees: ${employeeList.length}`)
//   console.log(`Total salaries: $${totalSalaries.toFixed(2)}`)
//   console.log(`Average salary: $${(totalSalaries / employeeList.length).toFixed(2)}`)
// }

// // Event listener for "Add employee" button
// document.getElementById("addEmployeeBtn").addEventListener("click", addEmployee)