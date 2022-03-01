const API = "https://rickandmortyapi.com/api/character";

$.getJSON(API, (result) =>{
    console.log(result)
    for(i = 0; i < 50;i++){
        

        $("#card-info").append(` 
        <div class="card-img" style="width:20%; background-color: "red"; height: 250px">
        <img class="char-img" src="${result.results[i].image}">
        <p>${result.results[i].name}</p>
        </div>
        `)
      
    };

})