function kClosest(points, k){

    points.sort((point1, point2)=>{
        const distanceFromOriginOne = getDistance(point1);
        const distanceFromOriginTwo = getDistance(point2);

        return distanceFromOriginOne - distanceFromOriginTwo;
    });

    return points.slice(0, k);

};

function getDistance(point){
   //console.log(point[0]);

   // const [x, y] = point; //array destructuring
    //return (x*x) + (y*y);

    return (point[0]* point[0])+ (point[1]* point[1]);
}

console.log(kClosest([
    [-5, 4],
    [-6, -5],
    [4, 6]
], 2))