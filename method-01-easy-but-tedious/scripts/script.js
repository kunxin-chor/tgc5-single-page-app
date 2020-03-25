$(function(){
    $(".page").hide();
    $("#page-1").show();

    $("#page-two-btn").click(function(){
        $("#page-1").hide(); // just shortcut for changing to display:none
        $("#page-2").show(); // just shortcut for changing to display:block
    })

    $("#page-two-goto-page-one-btn").click(function(){
        $("#page-2").hide(); // just shortcut for changing to display:none
        $("#page-1").show(); // just shortcut for changing to display:block
    })
})