function toggleCanvas(){
    $(".off_canvas_menu").slideToggle();
}

$(window).resize(function(){
    var win = $(window).width();
    var p = 768;
    if(win > p){
        $(".off_canvas_menu").show();
    } else {
        $(".off_canvas_menu").hide();
    }
});