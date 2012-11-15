var P008 = (function(){

    var productNumber = function(){
        var self=this;
    };
    
    productNumber.prototype.find = function(numberValue) {
        var self=this;
        
        var numberByGroupsWithoutZeros = self.groupsExcludingZero(
            self.numberIntoGroups(numberValue, 5)
        );

        var products = self.getProductOfList(numberByGroupsWithoutZeros);
        
        return self.findMaxProduct(products);
    };

    productNumber.prototype.findMaxProduct = function(list) {
        var self=this;
        var i;
        var max=0;
        for (i in list) {
            if (list.hasOwnProperty(i)) {
                max = Math.max(max, list[i]);
            }
        }

        return max;
        
    };

    productNumber.prototype.getProductOfList = function(list) {
        var self=this;
        var digitString;
        var i;
        var products ={};
        for (i=0; i < list.length; i += 1) {
            digitString = list[i]
            products[digitString] = self.multiplyDigits(digitString);
        }
        return products;
    };

    productNumber.prototype.multiplyDigits = function(digitString) {
        var self=this;
        var i;
        var product = 1;

        for (i=0; i < digitString.length; i += 1) {
            product *= digitString[i];
        }

        return product;
    };

    productNumber.prototype.groupsExcludingZero = function(groups) {
        var self=this;
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
        var self=this;
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

