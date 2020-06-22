function longest_common_starting_substring(arr1){
    var arr= arr1,
    a1= arr[0], a2= arr[arr.length-1], L= a1.length, i= 0;
    while(i< L && a1.charAt(i)=== a2.charAt(i)) i++;
    return a1.substring(0, i) || null;
    }
    
    console.log(longest_common_starting_substring(['go', 'google'])); 
    
    console.log(longest_common_starting_substring(['SQLInjection', 'SQLTutorial'])); 
    
    console.log(longest_common_starting_substring(['abcd', '1234'])); 

    console.log(longest_common_starting_substring(['ABAZDC', 'BACBAD'])); 



    function lcs(a, b) {
        var aSub = a.substr(0, a.length - 1);
        var bSub = b.substr(0, b.length - 1);
       
        if (a.length === 0 || b.length === 0) {
          return '';
        } else if (a.charAt(a.length - 1) === b.charAt(b.length - 1)) {
          return lcs(aSub, bSub) + a.charAt(a.length - 1);
        } else {
          var x = lcs(a, bSub);
          var y = lcs(aSub, b);
          return (x.length > y.length) ? x : y;
        }
      }
      //ES6
      const longest = (xs, ys) => (xs.length > ys.length) ? xs : ys;
 
      const lcs1 = (xx, yy) => {
        if (!xx.length || !yy.length) { return ''; }
       
        const [x, ...xs] = xx;
        const [y, ...ys] = yy;
       
        return (x === y) ? (x + lcs1(xs, ys)) : longest(lcs1(xx, ys), lcs1(xs, yy));
      };


      console.log(lcs("ABAZDC", "BACBAD"));

//ABAZDC, BACBAD ====> ABAD
//aaaa, aa ===> aa