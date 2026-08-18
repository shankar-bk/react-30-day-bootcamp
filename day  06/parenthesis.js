function isValid(str) {
    let stack = [];
    for (let char of str) {
        if (char === "(" || char ==="[" || char ==="{") {
            stack.push(char);
        } else {
            let top = stack.pop();
            if(
                (char === ")" && top !== "(") || 
                (char === "]" && top !== "[") || 
                (char === "}" && top !== "{")
            ){
                return false;
            }
        }
    }
    return stack.length ===0;
}
console.log(isValid("([{}])")); 
console.log(isValid("([)]"));   