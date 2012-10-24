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
        return series;
    };

    factor.prototype.generatePrimeSeries = function(limit) {
        var self=this;
        var series = [];

        return series;
    };

    return factor;
}());

