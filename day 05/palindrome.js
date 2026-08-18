function palindrome(str){
          let reversed = "";
          for (let i =str.length-1; i >= 0; i--){
                    reversed +=str[i];
          }
          if (str===reversed) return "palindrome";
          else return "not palindrome";
          
}
console.log(palindrome("racecar"));
console.log(palindrome("help"));


let str ="hello";
let reversed = "";
for (let i=str.length-1;i >= 0;i--) {
    reversed =reversed+str[i];
}
console.log(reversed);