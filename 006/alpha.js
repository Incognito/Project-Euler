/*
 * First attempt at solving the problem
 **/
var P006 = (function() {
    
    var squares = function(n) {
        var self=this;
    };
    
    squares.prototype.arithmeticSum = function(a, n) {
        var self=this;
        return (1/2)*n*(a+a*n);
    };
    
    squares.prototype.squareSeriesSum = function(n) {
        var self=this;
        var sum = 0;
        var i;
        
        for (i=1; i<n+1;i++) {
            sum = sum + (i*i);
        }
        
        return sum;
    };
    
    squares.prototype.difference = function(n) {
        var self=this;
        
        var airthmeticSum   = self.arithmeticSum(1, n);
        var squareSeriesSum = self.squareSeriesSum(n);
        
        return squareSeriesSum - airthmeticSum;
    };
    
    return squares;
    
}());
