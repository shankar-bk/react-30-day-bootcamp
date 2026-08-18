let employees =[
    {name:"ravi",age:25,salary:10000},
    {name:"Ansh",age:43,salary:35000},
    {name:"saji",age:28,salary:20000}
];


let newEmployees = employees.map(employees =>{
          return {
          name:employees.name,
          age:employees.age,
          annualSalary: 12*employees.salary
          }
})

console.log(newEmployees);