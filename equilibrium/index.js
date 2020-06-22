function equilibrium(arr, n){
    let sum = 0;
    let leftsum = 0;
   for (let i = 0; i < n; i++) {
       sum +=arr[i];  
   }
   for (let j = 0; j < n; j++) {
       sum -= arr[j];   
       if(sum === leftsum){
        return j;
    }
       leftsum += arr[j];
    
   }
   return -1;
}

console.log(equilibrium([-7, 1, 5, 2, -4, 3, 0], 7));

const equi = function(arr, len) {
let sum = 0;
let leftsum = 0;

for (let i = 0; i <len; i++) {
    sum +=arr[i];
}

for (let j = 0; j < len; j++) {
     sum -= arr[j];
     if(leftsum === sum){
         return j;
     }

     leftsum +=arr[j];
}
  return -1;

}

console.log(equi([-7, 1, 5, 2, -4, 3, 0], 7));
