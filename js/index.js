$(document).ready(function(){
    console.log("working!");

    $.getJSON("videos.json", function(json) {
        console.log(json.videos[0].url); 
    
        $('.url').append(`
        
            <a href="${json.videos[0].url}" target="blank"><button class="button second is-large "><p>Watch The First Episode</p></button></a>
        `)
    });

    $('.navbar-burger').bind('click', function(){
        $('.burger-links').toggle('active');
    })

    $('.navbar-burger').click(function(){
        $(this).toggleClass('is-active');
    })
})
