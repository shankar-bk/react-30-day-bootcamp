function greet(name) {
    console.log("Hello "+name);
}
function execute(callback){
    callback("dad");               //callback
}
execute(greet);

function calculate(a,b,callback){
    let result = a+b;
    callback(result);
}
calculate(10,20,function(result){
    console.log(result);
});

// let promise=new Promise(function(resolve,reject){
//     let success=true;
//     if (success){                                //promise
//         resolve("task completed");
//     } else {
//         reject("task failed");
//     }
// });
// promise.then(function(result){
//     console.log(result);
// });

// let promise = new Promise(function(resolve,reject){
//     setTimeout(function() {
//         resolve("Data received");
//     }, 2000);
// });
// promise.then(function(data){
//     console.log(data);
// });


let promise = new Promise((sucess,fail) =>{
    let age = 20;
    if (age >= 18) {
        sucess("you are eligible");
    } else {
        fail("you are not under-age");
    }
});
promise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });



try {
    let name = undefined;
    console.log(name.toUpperCase());
} catch(error){
    console.log("Error occurred");
}



