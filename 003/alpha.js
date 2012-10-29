/*
 * First attempt at solving the problem
 **/
var P003 = (function(){

    var factor = function(){
        var self=this;
    };
    
    factor.prototype.generatePrimeSeries = function(limit) {
        var self=this;
        var i;
        var series = [2, 3];
        
        function checkSeriesForDivisibility(number, series){
            var i;
            var divided;
            for (i=0; i<series.length; i+=1) {
                var divided = number/series[i];
                if (divided === Math.floor(divided)) {
                    return i;
                }
            }
            return false;
        }

        for (i=5; i<limit; i+=2) {
            if (false === checkSeriesForDivisibility(i, series)) {
                series.push(i)
            }
        }
        
        return series;
    };

    factor.prototype.largestFactor = function(target){
        var self=this;
        var i;
        var halfLimit = Math.ceil(target/2);
        var series = self.generatePrimeSeries(halfLimit);
        print('\tSeries done:' + series.length)

        for (i = series.length -1; i> 0; i--) {
            if (Math.floor(target/series[i]) === target/series[i]) {
                print('\prime found' + i, series[i])
                return series[i];
            }
        }
        return "Error";
    };


    return factor;
}());

