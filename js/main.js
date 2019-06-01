// check off specific todos by clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

// delete li using x
$("ul").on("click" , "span" ,function (event) {
    $(this).parent().fadeOut(500,function () {
        $(this).remove();
    });
    event.stopPropagation();
});

// add element to list
$("input[type='text']").keypress(function (event) {
    if (event.which === 13){
        //grabbing new todo text from input
        var TodoADD = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><span><i class=\"fa fa-trash\"></i> </span>" +TodoADD+ "</li>");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text'").fadeToggle()
});