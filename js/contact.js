$(document).ready(function(){
    $('.navbar-burger').bind('click', function(){
        console.log('clicked!');
        $('.burger-links').toggle('active');
    })
    
    $('.navbar-burger').click(function(){
        console.log('clicked!');
        $(this).toggleClass('is-active');
    })
})

