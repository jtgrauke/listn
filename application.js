$(document).ready(function() {

    $('.button').text("Dashboard").show(function(){
        $(this).click(function() {
            $('.box').fadeToggle(200);
        });
    });



}); // END OF DOCUMENT