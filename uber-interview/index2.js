/*These rules of the Collatz conjecture.

    If a number is odd, the next transform is 3*n+1
    If a number is even, the next transform is n/2
    The number is finally transformed into 1.
    The step is how many transforms needed for a number turned into 1. 
    Given an integer n, output the max steps of transform number in [1, n] into 
    */

    const findSteps = function (num) { // num  = 5 ,  // num = 17
        if (num <= 1) return 1
        if (num % 2 == 0)
            return 1 + findSteps(num / 2)
        return 1 + findSteps(3 * num + 1)
    }

    const findLongestSteps = function (num) {

        if (num < 1) return 0
    
        var res = 0
        for (let i = 1; i <= num; i++) {
            t = findSteps(i)
            res = Math.max(res, t)
        }
    
        return res
    }

    console.log(findLongestSteps(37)); //112

    console.log(findLongestSteps(101)); //119