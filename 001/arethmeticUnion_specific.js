function sumMultiplesOfTwoOrThree(n){
    var sum= 0;
    var arithmeticSum = function(a, n){
        return (1/2)*n*(a+a*n);
    };
    var arithmeticSumFromSeriesMultiple = function(series, multiple){
        series -=1; //Euler problem #1 wants numbers less than 1000.
        var a = multiple;
        var n = Math.floor(series/multiple);
        return arithmeticSum(a, n);
    }
    sum += arithmeticSumFromSeriesMultiple(1000, 3);
    sum += arithmeticSumFromSeriesMultiple(1000, 5)
    sum -= arithmeticSumFromSeriesMultiple(1000, 15); 
    return sum;
}
console.log(sumMultiplesOfTwoAndThree(1000))