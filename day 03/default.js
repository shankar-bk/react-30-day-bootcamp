function greet(name="guest"){
    console.log("Hello"+name);
}
greet("Raj");
greet();


function annualSalary(salary=12000){
          let totalSalary= 12*salary;
          return totalSalary;

}
console.log(annualSalary(10000));
console.log(annualSalary());
