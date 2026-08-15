let employees = [
          {
          name: "Ravi",
          age: 25,
          salary: 40500
          },
          {
          name: "Kiran",
          age: 28,
          salary: 55700
          },
          {
          name: "Anil",
          age: 30,
          salary: 78000
          },
          {
          name: "Priya",
          age: 26,
          salary: 45300
          },
          {
          name: "Sneha",
          age: 32,
          salary: 90000
          }
];
let totalEmployees =employees.length;
let totalSalary =employees.reduce((total, emp) => {
    return total+emp.salary;
}, 0);
let averageSalary =totalSalary/totalEmployees;
let highestPaid =employees.reduce((highest,emp) => {
    if (emp.salary > highest.salary) {
        return emp;
    }

    return highest;
});
let highSalEmp=employees.filter(emp => {
    return emp.salary>50000;
});
console.log("Total Employees:",totalEmployees);
console.log("Total Salary:",totalSalary);
console.log("Average Salary:",averageSalary);
console.log("Highest Paid Employee:");
console.log(highestPaid);
console.log("Employees with salary above 50000:");
console.log(highSalEmp);