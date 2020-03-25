$(function(){

    $(".page-btn").click(function(){
        let page = $(this).data('gotopage');
        $(".page").hide();
        $("#page-"+page).show();
    })

    $(".page").hide();
    $("#page-1").show();
})
