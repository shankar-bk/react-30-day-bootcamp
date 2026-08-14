function largnum(arr){
          let largest=arr[0];
          for (let i=1;i<arr.length;i++){
                    if (arr[i] > largest) largest=arr[i]

          }
          return largest

}
let num=[10,2,45,6,8,97,387,37];
console.log("largest number:", largnum(num));