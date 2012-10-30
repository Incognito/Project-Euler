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

        var ceiling = Math.pow(10, n);

        for (j=1; j<ceiling; j++) {
            for (k=1; k<ceiling; k++) {
                if (self.checkPalindrome(j*k)){
                    print(j*k, j, k)
                }
            }
        }

    };

    palin.prototype.checkPalindrome = function(target) {
        var len = target.length - 1;
        var mid = Math.floor(len/2);
        var i;
        var targetStr = "" + target;

        for (i=0; i<mid; i++) {
            if (targetStr[i] !== targetStr[len-i]) {
                return false;
            }
        }
          return true;
    }

    return palin;
}());

