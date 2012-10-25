/*
 * First attempt at solving the problem
 **/
var P003 = (function(){

    var factor = function(){
        var self=this;
    };
    
    factor.prototype.factor = function(n){
        var self=this;
        var series = self.generateSeries(n);

        var halfLimit = Math.ceil(limit/2);

        return series;
    };

    factor.prototype.generatePrimeSeries = function(limit) {
        var self=this;
        var i;
        var series = [2, 3];
        
        function checkSeriesForDivisibility(number, series){
            var i;
            var divided;
            for (i=0; i<series.length; i+=1) {
                write(series[i] + "\t");
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

    return factor;
}());

