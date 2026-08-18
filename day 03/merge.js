const samp1=["ravi","shiva","shyam"];
const samp2=["shiva",...samp1,"anjali"];
console.log(samp2);

const samp3=[4,6,8];
const merge=[...samp3,...samp1,...samp3,...samp2];
console.log(merge);
