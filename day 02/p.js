//array

let persons=["akhil","nikhil","vivek"];
console.log(persons[3]);

console.log(persons.length);

persons.push("anand"); // all dones at the last
console.log(persons); 
persons.pop();
console.log(persons);

let num=[5,7,8,44,78];
console.log(num.length);
num.unshift(5);  // shift for removing (all dones at the first)
console.log(num);

let employee=[
          {
          name:"ravi",
          salary:45000,
          age:45
          },
          {
          name:"riya",
          salary:60000,
          age:34
          }
];

console.log(employee[1].age);
 
let getSalary= emp => emp.salary;
console.log(getSalary(employee[0]));


employee.forEach(emp =>{
          console.log(emp.name);  //for each
});

let numb=[2,4,6,8,7,5];
let doubled= numb.map(function(nu){  //map
          return nu*=2;
});
console.log(doubled);


let numbers=[1,2,3,4,5];
// let evenNumbers= numbers.filter(num => num%2===0);
// console.log(evenNumbers);

let evenNumbers= numbers.filter(function(num){
          return num%2===0;
});
console.log(evenNumbers);