var P007 = (function(){

    var factor = function(){
        var self=this;
    };
    
    factor.prototype.find = function(limit) {
        var self=this;
        var i;
        var series = [2, 3];
        var found = 2;
        
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

        for (i=5; series.length < limit; i+=2) {
            if (false === checkSeriesForDivisibility(i, series)) {
                series.push(i)
            }
        }
        
        return series;
    };

    return factor;
}());

