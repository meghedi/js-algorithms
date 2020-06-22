//https://www.growingwiththeweb.com/2013/06/algorithm-all-combinations-of-set.html
function getAllCombinationsOfASet(text) {
    var results = [];
    for (var i = 0; i < text.length; i++) {
      // Record size as the list will change
      var resultsLength = results.length;
      for (var j = 0; j < resultsLength; j++) {
        results.push(text[i] + results[j]);
      }
      results.push(text[i]);
    }
    return results;
  }

    console.log(getAllCombinationsOfASet("abcd"))