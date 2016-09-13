(function() {
 angular
  .module('app')
  .directive('successMessage', successMessage)

 function successMessage() {
  return {
    template: '<p> Success - it worked! </p>'
  }

 } 
}());
