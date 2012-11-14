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

    productNumber.prototype.numberIntoGroups = function(numberValue, groupsOf) {
        var i;
        var groupList = [];
        for (i=0; i < numberValue.length - groupsOf; i +=1) {
            groupList[i] = "";
            for (j=0; j < groupsOf; j +=1) {
                groupList[i] += numberValue[i + j];
            }
        }
        return groupList;
    };

    return productNumber;
}());

