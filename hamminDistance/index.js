//hammingDistance

/*
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
*/

const hammingDistance = (x, y) => {
    let val = x ^ y;  // 0010 ^ 0100 // 0100
    let distance = 0;
  
    while (val > 0) {
      val = val &  val - 1; //  6 (0 1 1 0) &
                            //  5 (0 1 0 1)
                           //   4 (0 1 0 0)
                           //   3 (0 0 1 1)
      distance++;
    }
  
    return distance;
  };

  console.log(hammingDistance(2, 4));