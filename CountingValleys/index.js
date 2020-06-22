function countingValleys(n, s) {
    let elevation = 0;
    let numValleys = 0;
  
    for(let i=0; i<n ; i++){
        if(s[i] === "D"){
           --elevation ; 
        }else if(s[i]==="U") {
            elevation++;
            if(elevation === 0) numValleys++;
        }
    }
  
    return numValleys;
  
  }

  console.log(countingValleys(10,"UDDDUDUUDU")); 

  function countingValleys2(n, s) {
   let sarray = s.split("");
   let elevation = 0;
   let tripCount = 0;

   for (let i = 0; i < n; i++) {
         if(sarray[i] === "D"){
             elevation--;
         }else if(sarray[i] === "U"){
             elevation++;
             if(elevation === 0){
                tripCount ++;
             }
         }       
   }
   return tripCount;

  }


  console.log(countingValleys2(8,"UDDDUDUU")); 