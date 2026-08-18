async function getUsers() {
    try {
        let response = await axios("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error("failed to fetch users");
        }
        let users = await response.json();
        console.log(users);
        users.forEach((user) => {
            console.log(user.name);
            console.log(user.phone-no);
        });
    }catch (error){
        console.log("Error:",error.message);
    }
}
getUsers();