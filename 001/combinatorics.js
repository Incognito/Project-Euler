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

function listProduct(list){
    var product=1;
    for (var i=0;i<list.length;i++){
        product *=list[i];
    }
    return product;
}

var data=getCombinations([3,5,15,100]);
var output=[];
for (var i=0;i<data.length;i++){
    output.push(listProduct(data[i]));
}
console.log(data);
console.log(output);
