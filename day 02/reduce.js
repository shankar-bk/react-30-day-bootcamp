employees=[
          { name:"Ravi",salary:30000},
          { name:"Kiran",salary:50000},
          { name:"Ajay",salary:70000},
          { name:"priya",salary:45000},
          { name:"arya",salary:90000}         
          
]
let totalSalary = employees.reduce((total,emp) => {
    return total+emp.salary;
},0);

console.log(totalSalary);