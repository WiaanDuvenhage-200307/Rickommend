const API = "https://rickandmortyapi.com/api/character";

$.getJSON(API, (result) =>{
    console.log(result)
    for(i = 0; i < result.results.length;i++){
        

        // TODO Fix cards to appear next to each other!
        $("#card-info").append(` 
        
        <div class="tile is-ancestor">
        <div class="tile is-parent">
        <article class="tile is-child notification is-info">
          <p class="title">Middle tile</p>
          <p class="subtitle">With an image</p>
          <figure class="image">
            <img src="${result.results[i].image}">
          </figure>
        </article>

      </div>
        `)
      
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
