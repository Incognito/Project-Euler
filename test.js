/*
 * Really small testing tool
 **/
var Test = (function(){

   var test = function(){
       var self=this;
       self.data = {}; //TODO: will hold a hash of things to check
   }

   test.prototype.begin = function(testName){
      //TODO: change mode of attaching.

   };

   test.prototype.criteria = function(testCall, expectedResult, name ){
       //TODO: attach params to a prop list
   };

   test.prototype.run = function(){
      //TODO: run through list, run checks, output results
   }

   return test;

}());

