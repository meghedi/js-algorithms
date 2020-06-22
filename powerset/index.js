function powerSet(arr) {
  
    // the final power set
    var powers = [];
    
    // the total number of sets that the power set will contain
    var total = Math.pow(2, arr.length);
    
    // loop through each value from 0 to 2^n
    for (var i = 0; i < total; i++) {
      
      // our set that we add to the power set
      var tempSet = [];
      
      // convert the integer to binary
      var num = i.toString(2);
      //console.log(num);
      
      // pad the binary number so 1 becomes 001 for example
      while (num.length < arr.length) { num = '0' + num; }

     // console.log( num + "\n");
      
      // build the set that matches the 1's in the binary number
      for (var b = 0; b < num.length; b++) {
        if (num[b] === '1') { tempSet.push(arr[b]); }    
      }
      
      // add this set to the final power set
      powers.push(tempSet);
      
    }
    
    return powers;
    
  }


function powerSet2(arr){
   let powers = [];

   let totals = Math.pow(2, arr.length);

   for (let i = 0; i < totals; i++) {
    let tempSet = [];

     let num = i.toString(2);
     
     while(num.length < arr.length) {
         num = "0" + num
     }

     for (let b = 0; b < num.length; b++) {
         if(num[b] ==='1'){tempSet.push(arr[b])}
         
     }

     let eachSum = 0;
     for (let t = 0; t < tempSet.length; t++) {
         eachSum += tempSet[t];      
     }

     if(eachSum === 5){
     powers.push (tempSet);
    }
     

   }

  return powers;
}



  
  console.log(powerSet([1, 2, 3])); 
  /* output:
  [
  [],       [ 3 ],
  [ 2 ],    [ 2, 3 ],
  [ 1 ],    [ 1, 3 ],
  [ 1, 2 ], [ 1, 2, 3 ]
]*/