let employees = [
    { name: "Ravi", salary: 30000 },
    { name: "Kiran", salary: 50000 },
    { name: "Anil", salary: 70000 },
    { name: "Priya", salary: 45000 },
    { name: "Sneha", salary: 90000 }
];

let highSalEmp=employees.filter(emp => {
    return emp.salary>50000;
});

console.log("employees earning above 50000:");
highSalEmp.forEach(emp => {
    console.log(emp.name, emp.salary);
});

let emplo = employees.find(emp => emp.salary>60000);
console.log(emplo);
