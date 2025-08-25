$(document).ready(function() {
    $('form').on('submit', function(e){
        e.preventDefault();
    });

    $('ul').on('click', 'li', function() {
        $(this).toggleClass('done');
    });

    $('button').click(function(){
        const taskName = $('input').val();
        const newTask = $(`<li>${taskName}</li>`);
        $(newTask).appendTo('ul');
        $('input').val('');
    });
});