const arr = [201, 39, 54, 461, 93, 377, 413, 176, 164, 317, 109, 113, 36, 235, 17, 60, 53, 474, 257, 48]

function sortFunc(arr){
  let sorted =false

  while(!sorted){
    sorted = true;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > arr[i+1]){
            sorted = false;
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }

  }

  return arr;

}

console.log(sortFunc(arr));