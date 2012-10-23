/*
 * First attempt at solving the problem
 **/
var P002 = (function(){

    var fib = function(n){
        var self=this;
    };
    
    fib.prototype.fib = function(n){
        var self=this;
        var series = self.generateSeries(n);
        var sum = self.sum(series);
        return sum;
    };

    fib.prototype.generateSeries = function(limit) {
        var self=this;
        var series = [1, 2];
        do {
            series.push(series[series.length-1] + series[series.length-2]);
        } while (series[series.length-1]<limit);
        series.pop();
        
        return series;
    };

    fib.prototype.sum = function(list){
      var self=this;
      var sum=0;
      for(var i=0;i<list.length;i++){
        sum+=list[i];
      }
      return sum;
    };

    return fib;
}());

