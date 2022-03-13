$(document).ready(function(){

  // !FIX = If statement not working on displaying the right status color
  const randomNumber = Math.floor(Math.random()*42) +1;

  console.log(randomNumber);

  const API = "https://rickandmortyapi.com/api/character?page=" + randomNumber;

  $.getJSON(API, (result) =>{
      console.log(result)
      for(i = 0; i < result.results.length;i++){
  
        var charName = result.results[i].name;
        var status = result.results[i].status;
        console.log(status);
        var nextPage = result.info.next;
        image = result.results[0].image;
        
        console.log(image);

        

        // var stat = $(".status").val();
        //   for(j = 0; j< stat.length; j++ ){
        //     var currStat = stat[i].val();
        //   } if(currStat === "Dead"){
        //     $('.status').css({"backgroundColor":"red"});
        //   }
  
          // TODO Fix cards to appear next to each other!
          // TODO Fix Conditional IF Statement with status messages!

        
          if(result.results[i].status === "Dead"){
            $("#card-info").append(` 
  
           <div class="char-img front active" >
            <img src="${result.results[i].image}">
            <h3 class = "name">${result.results[i].name}</h3>
            <h3><b>SPECIES: </b>${result.results[i].species}</h3>
            <h3> <b>LOCATION: </b>${result.results[i].location.name}</h3>
            <h3><b>GENDER: </b>${result.results[i].gender}</h3>
            <h3 class = "dead"><b>STATUS: </b> ${result.results[i].status}</h3>
           </div>
  
          `)
          }else if(result.results[i].status === "Alive"){
            $("#card-info").append(` 
  
           <div class="char-img front active" >
            <img src="${result.results[i].image}">
            <h3 class = "name">${result.results[i].name}</h3>
            <h3><b>SPECIES: </b>${result.results[i].species}</h3>
            <h3> <b>LOCATION: </b>${result.results[i].location.name}</h3>
            <h3><b>GENDER: </b>${result.results[i].gender}</h3>
            <h3 class = "alive"><b>STATUS: </b> ${result.results[i].status}</h3>
           </div>
  
          `)
          } else {
            $("#card-info").append(` 
  
            <div class="char-img front active" >
             <img src="${result.results[i].image}">
             <h3 class = "name">${result.results[i].name}</h3>
             <h3><b>SPECIES: </b>${result.results[i].species}</h3>
             <h3> <b>LOCATION: </b>${result.results[i].location.name}</h3>
             <h3><b>GENDER: </b>${result.results[i].gender}</h3>
             <h3 class = "unknown"><b>STATUS: </b> ${result.results[i].status}</h3>
            </div>
   
           `)
          }
        
        

        



        

      
      }

      // for(i = 0; i < result.results.length;i++){
      //   if(result.results[i].status === "Dead"){
      //     $(this).addClass("dead");
      //     }else if(result.results[i].status === "Alive"){
      //       $(this).addClass("alive");
      //     } else {
      //       $(this).addClass("unknown");
      //     }
      // }
     

    // if( stat === "Dead"){
    //   $(".status").css("background-color", "red");
    // } else if(stat === "Alive"){
    //   $(".status").css("background-color", "green");
    // }

      // if( status == "unknown"){
      //   $('.status').css("backgroundColor","blue");
      // } else{
      //   $('.status').css("backgroundColor","green")
      // }

      // if ($(".status").text === 'Dead'){
      //   $('.status').css({"backgroundColor":"red"});
      // } else{
      //   $('.status').css({"backgroundColor":"green"})
      // }
  })
  
  
  
  $('.navbar-burger').bind('click', function(){
      console.log('clicked!');
      $('.burger-links').toggle('active');
  })
  
  $('.navbar-burger').click(function(){
      console.log('clicked!');
      $(this).toggleClass('is-active');
  })

  $('.next').click(function(){
     window.location.reload();
  })
  

})

