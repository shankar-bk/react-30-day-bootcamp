function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("data received");
        },3000);
    });
}
async function test() {
    try {
        console.log("waiting");
        let result = await getData();
        console.log(result);
    } catch (error){
        console.log(error);
    }
}
test();