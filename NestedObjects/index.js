var a = { 
	propa: 1, 
  propb: 1, 
  propc: { 
  	propba: 1, 
    propbb: { 
    	propc: 1
      } 
    } 
  };

var b = { 
  propa: 1, 
  propb: 1, 
  propc: { 
  	propba: 1, 
    propbb: { 
    	propc: 1
      } 
    } 
  };
  
  // aPops = ['propa', 'propb', 'propc' ]

const isEqual = (a, b) => {
   if (a === b) return true;
   
   var aProps = Object.keys(a);
   var bProps = Object.keys(b);
   
	 if (aProps.length == 0 && bProps.length == 0)
   	    if (a !== b) return false;

   if (aProps.length != bProps.length) return false;
   
   for (let i = 0; i < aProps.length; i++) {
   		const propName = aProps[i];
      
      if (!isEqual(a[propName], b[propName]))
      	return false;
   }
   
   
  return true;
}



console.log(isEqual(a,b));