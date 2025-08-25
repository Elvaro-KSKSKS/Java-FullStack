$(document).ready(function() {
    $('form').on('submit', function(e){
        e.preventDefault();
        const taskName = $('input').val();
        const newTask = $(`<li>${taskName}</li>`);
        $(newTask).appendTo('ul');
        $('input').val('');
    });

    $('ul').on('click', 'li', function() {
        $(this).toggleClass('done');
    });
});