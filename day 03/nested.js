let employees={name:"ravi",age:56,
          job:{
          role:"dancer",
          salary:45000
          }};

let{name,age,job:{role,salary}} = employees;
console.log(name);



let employees2=[{name: "ravi",age: 56,job:{
          role:"dancer",
          salary:45000}},
          {name:"ansh",age:23,job: {role:"trainer",salary: 5000}}
];

let[
          {name:name1,age:age1,job:{ role:role1, salary:salary1 }},
          {name:name2,age:age2,job:{ role:role2, salary:salary2 }}
] =employees2;

console.log(role1,salary1);
console.log(name2,age2);