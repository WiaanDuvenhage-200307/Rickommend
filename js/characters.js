const API = "https://rickandmortyapi.com/api/character";

$.getJSON(API, (result) =>{
    console.log(result)
    for(i = 0; i < 3;i++){

            $("#card").append(`

                <div class="columns">
                    <div class="column is-card">

                        <div class="card-image">
                            <img style="border-radius: 20px;" src="${result.results[i].image}" alt=""/>
                            <h1 class="title" style="text-align: center;">${result.results[i].name}</h1>
                        </div>
                        
                    </div>
                </div>

            `) 
    };

    
    
})