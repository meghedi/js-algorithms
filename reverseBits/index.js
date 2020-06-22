var reverseBits = function(n) {
    return (parseInt(Math.abs(n).toString().split('').reverse().join(""))* Math.sign(n)).toString(2);
};

console.log(reverseBits(0001001));