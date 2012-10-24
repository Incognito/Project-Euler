/*Generate a list of all Combinations*/
function getCombinations(list){
    var combinations = []; //All combinations
    var combination = [];  //Single combination
    var quantity = (1 << list.length);
    for (var i = 0; i < quantity ; i++){
        combination = [];
        for (var j=0;j<list.length;j++) {
            if ((i & (1 << j))){ 
                combination.push(list[j]);
            }
        }
        if (combination.length !== 0) {
            combinations.push(combination);
        }
    }
    return combinations;
}

/*Generate a product from a list of numbers*/
function listProduct(list){
    var product=1;
    for (var i=0;i<list.length;i++){
        product *=list[i];
    }
    return product;
}

/*Return the arithmetic sum*/
function arithmeticSum (a, n){
    return (1/2)*n*(a+a*n);
}

/*Generate the arithmetic sum of a series based on a multiple*/
function arithmeticSumFromSeriesMultiple (series, multiple){
    var a = multiple;
    var n = Math.floor(series/multiple);
    return arithmeticSum(a, n);
}

    
function sumMultiples(range, multiples){
    var sum= 0;
    var subsetSums = [];
    
    var multiplesCombination=getCombinations(multiples);
    for (var i=0;i<multiplesCombination.length;i++){
        
        //Generate product from combinations of multiples
        //and
        //Find individual sums of all combinations.
        subsetSums.push(
            arithmeticSumFromSeriesMultiple(
                range, 
                listProduct(multiplesCombination[i])
            )
        );
    }

    for (var i=1; i< subsetSums.length + 1;i++){
        //Check if i is an even base 2.
        if ((i & (i - 1)) == 0){
            sum += subsetSums[i-1];
        } else {
            sum -= subsetSums[i-1];
        }
    }
    return sum;
}

console.log(sumMultiples(999, [3,5]));
