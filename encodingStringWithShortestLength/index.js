function encode(str){
    let strArray = str.split("");
    let newStr = '';
    let newObj=strArray.reduce((acc, curr)=>({
       ...acc,
       [curr]: acc[curr] ? acc[curr]+1 : 1
    }),{});
   
    for(let i in newObj){
        newStr += (newObj[i]===1)?`${i}` : `${newObj[i]}[${i}]`;
    }

    return newStr;

}


console.log(encode("abbcccdd"));

