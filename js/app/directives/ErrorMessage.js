(function() {
 angular
  .module('app')
  .directive('errorMessage', errorMessage)

  function errorMessage() {
    return {
      template: "<p> Oh no - something went wrong! </p>"
    }
  } 
}());
