const quickSort = list => {
    if (list.length < 2) 
      return list;
    let pivot = list[0];
    let left  = []; 
    let right = [];
    for (let i = 1, total = list.length; i < total; i++){
      if (list[i] < pivot)
        left.push(list[i]);
      else
        right.push(list[i]);
    }
    return [
      ...quickSort(left), 
      pivot, 
      ...quickSort(right)
    ];
  };

  //console.log(quickSort( ['q','a','z','w','s','x','e','d','c','r']));
  // ["a", "c", "d", "e", "q", "r", "s", "w", "x", "z"]
  //O(n log n)

  const quicksort2 = list =>{

    if(list.length < 2)
    return list;

    let pivot = list[0];
    let left = [];
    let right = [];

    for (let i = 0; i < list.length; i++) {
         if(list[i]< pivot) 
            left.push(list[i]);
         else 
            right.push(list[i]);
    }

    return [...quicksort2(left), pivot, ...quicksort2(right)];
            
  }

  console.log(quicksort2( ['q','a','z','w','s','x','e','d','c','r']));
