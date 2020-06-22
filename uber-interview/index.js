/*Given a list of integers, 
write a function that returns the 
largest sum of non-adjacent numbers. 
Numbers can be 0 or negative. 
For example,
 [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 
[5, 1, 1, 5] should return 10, since we pick 5 and 5. */

const i1 = [2, 4, 6, 2, 5];  
const i2 = [5, 1, 1, 5];

const noAdjSum = (input) =>{
    let incl = 0;
    let excl = 0;
    let new_excl;
   input.forEach(element => {
       new_excl = excl > incl ? excl : incl;
       incl = excl + element;
       excl = new_excl;

       console.log("new_excl =" + new_excl + "\n" + "incl =" + incl + "\n" + "excl =" + excl + "\n\n");
   });

   return excl > incl ? excl : incl;

}
//noAdjSum(i1);
console.log(noAdjSum(i1));
//console.log(noAdjSum(i2));