const API = "https://rickandmortyapi.com/api/character";

$.getJSON(API, (result) =>{
    console.log(result)
    for(i = 0; i < result.results.length;i++){
        

        $("#card-info").append(` 

            <div class="card-img" style="width:20%; background-color: "red"; height: 200px">
                <img class="char-img" src="${result.results[i].image}">
                <p class="char-name">${result.results[i].name}</p>
            </div>

        `)

        $('#card-info').click(function(){
            
        })
      
    };

    

})