var P008 = (function(){

    var productNumber = function(){
        var self=this;
    };
    
    productNumber.prototype.find = function(foo) {
        
    };

    productNumber.prototype.groupsExcludingZero = function(groups) {
        var i=0;
        var cleanList = [];
        do {
            if (groups[i].indexOf("0") < 0) {
                cleanList.push(groups[i])
            }
            i +=1;
        } while (i < groups.length) 

        return cleanList;
    };

    productNumber.prototype.numberIntoGroups = function(foo) {
        
    };

    return productNumber;
}());

