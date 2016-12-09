//THis is JQuery

$(document).ready(function(){
     $('#menu').fadeIn(1500);
     $('#menu').click(function(){
         $('#menu').fadeOut(1000);
         $('#empty').fadeIn(1500);
         
         
     });
     $('#empty').click(function() {
        $('#empty').fadeOut(1000);
        $('#menu').fadeIn(1500);
         
     });


});