/*
 * First attempt at solving the problem
 **/
var P004 = (function(){

    var palin = function(){
        var self=this;
    };
    
    //Scan over all n-digit numbers for palindromic combinations.
    palin.prototype.scanAll = function(n) {
        var self=this;
        var j, k;
        var testCase; //This is the variable we are testing, not an artifact of me "trying something"
        var resultList = [];
        var ceiling = Math.pow(10, n);

        for (j=1; j<ceiling; j++) {
            for (k=1; k<ceiling; k++) {
                var testCase = j * k;
                if (self.checkPalindrome(testCase)) {
                    resultList.push(testCase);
                }
            }
        }
        return resultList;
    };

    palin.prototype.findLargest = function(list) {
        var max = 0;
        var i;

        for (i = 0; i<list.length;i++) {
            if (list[i] > max) {
                max = list[i];
            }
        }
        return max;
    }

    palin.prototype.checkPalindrome = function(target) {
        var targetStr = "" + target;
        var len = targetStr.length;
        var mid = Math.floor(len/2);
        var len = len -1;
        var i;

        for (i=0; i<mid; i++) {
            if (targetStr[i] !== targetStr[len-i]) {
               return false;
            }
        }
        return true;
    }

    return palin;
}());

