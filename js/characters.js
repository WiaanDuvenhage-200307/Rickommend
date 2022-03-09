const API = "https://rickandmortyapi.com/api/character";

$.getJSON(API, (result) =>{
    console.log(result)
    for(i = 0; i < result.results.length;i++){
        

        $("#card-info").append(` 

            <div class="card-img">
                <div class='info'><p class="char-name">${result.results[i].name}</p></div>
                <img class="char-img" src="${result.results[i].image}">
                <hr/>
            </div>

        `)

        $('#card-info').click(function(){
            
        })
      
    };

    

})

$('.navbar-burger').bind('click', function(){
    console.log('clicked!');
    $('.burger-links').toggle('active');
})

$('.navbar-burger').click(function(){
    console.log('clicked!');
    $(this).toggleClass('is-active');
})
