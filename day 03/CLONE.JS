let employee=
          {name:"ravi",age:45,role:"developer"}


let cloneEmployee= {...employee};
console.log(cloneEmployee);


let copyEmployee= employee;
copyEmployee.name="rahul";
console.log(employee.name);

cloneEmployee.age= 33;
console.log(employee.age);


let employees=[
          {name:"krish",age:34,role:"designer"},
          {name:"priya",age:23,role:"tester"}
]
let newemployees= employees;
console.log(newemployees);
