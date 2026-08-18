function findDuplicates(arr){
    let count=[];
    for (let i = 0;i < arr.length;i++){
        let value =arr[i];
        if (count[value] === undefined){
            count[value] = 1;
        }
        else{
            count[value]++;
        }
    }
    for (let value in count){
        if (count[value] > 1){
            console.log("duplicate:",value);
        }
    }
}
findDuplicates([1,2,3,2,4,3,5]);