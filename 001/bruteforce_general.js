function sumMultiples(n, multiples){
    var sum= 0;
    var isMultiple = function(n, multiple){
        return ((n % multiple) === 0);
    };
    
    var commonMultiples = function (n,multiples){
        var isCommon = false;
        for (var i=0;i<multiples.length;i++){
            isCommon = (isCommon || isMultiple(n, multiples[i]));
        }
        return isCommon;
    };
    for (var i=1;i<n;i++) {
        if (commonMultiples (i,multiples)) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumMultiples(1000, [3,5]))