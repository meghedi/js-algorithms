/*function Point(x, y) {
   this.x = x;
    this.x = y;
 
}


Input: [[1,1],[2,2],[3,3]]
Output: 3
Explanation:
^
|
|        o
|     o
|  o  
+------------->
0  1  2  3  4
Example 2:

Input: [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
Output: 4
Explanation:
^
|
|  o
|     o        o
|        o
|  o        o
+------------------->
*/
var maxPoints = function(points) {
if(points.length <= 1){
             return points.length;
         }
         var res = -1, countSamePoint, max, i, j, slopeMap, curr, slope, tmp;
         for(i = 0; i < points.length; i++){
             curr = points[i];
             max = 0;
             countSamePoint = 1;
             slopeMap = {};
             slopeMap[0] = 0; slopeMap[Infinity] = 0; 
             for(j = 0; j < points.length; j++){
                 if(i === j){
                     continue;
               }
                 if(points[j].x === curr.x && points[j].y === curr.y){
                     countSamePoint++;
                 }else{
                     slope = (points[j].y - curr.y) / (points[j].x - curr.x);
                     if(slopeMap[slope] === undefined){
                       slopeMap[slope] = 1;
                     }else{
                         slopeMap[slope]++;
                  }
                    tmp = slopeMap[slope];
                  if(tmp > max){
                         max = tmp;
                     }
                }
                 if(max + countSamePoint > res){
                     res = max + countSamePoint;
                 }
           }
        }
         return res;

    } 
    console.log(maxPoints( [[1,1],[2,2],[3,3]]));