
{
$(function(){

    var menu = $('.menu-navigation-dark');

    menu.slicknav();

    // Mark the clicked item as selected

    menu.on('click', 'a', function(){
        var a = $(this);

        a.siblings().removeClass('selected');
        a.addClass('selected');
    });
})};
