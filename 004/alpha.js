/*
 * First attempt at solving the problem
 **/
var P004 = (function(){

    var palin = function(){
        var self=this;
    };
    
    //Scan over all n-digit numbers for palindromic combinations.
    palin.prototype.scanAll = function(n){
        var self=this;
        var j, k;

        var ceiling = Math.pow(10, n -1);

        for (j=1; j<ceiling; j++) {
            for (k=1; k<ceiling; k++) {
                if (self.checkPalindrome(j*k)){
                }
            }
        }

    };

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
        write(targetStr);
        write("\t")
        return true;
    }

    return palin;
}());

