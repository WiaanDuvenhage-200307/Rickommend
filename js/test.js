$(document).ready(function(){

    // TODO Fix appending image to question


    //! Hard coding questions and answers
    $.getJSON("../questions.json", function(json) {

        
        
        for(i = 0; i<json.Questions.length; i++){
            $('.opacity').addClass([i]);
            $(".q-block").append(`

            <div class="${json.Questions[i].id}">
            <h1 style="color: black;" class="q">${json.Questions[i].Question}</h1>

            <button id="69" class="button a" value="69"><p>${json.Questions[i].Option1}</p></button>
            <button id="103" class="button a" value="103"><p>${json.Questions[i].Option2}</p></button>
            <button id="45" class="button a" value="45"><p>${json.Questions[i].Option3}</p></button>
            <button id="70" class="button a" value="70"><p>${json.Questions[i].Option4}</p></button>
            <br/>
            <img src = "${json.Questions[i].image}"/>

            `)

           

            

            // !Hiding and showing questions onClick
            $('.first').fadeIn();
            $('.second').hide();
            $('.third').hide();
            $('.fourth').hide();

            $('.first').click(function(){
               
                $(".second").show();
                $('.first').hide();
               
            })
        
            $('.second').click(function(){
                console.log("clicked");
                $('.third').show();
                $('.first').hide();
                $('.second').hide();
            })

            $('.third').click(function(){
                console.log("clicked");
                $('.fourth').show();
                $('.first').hide();
                $('.second').hide();
                $('.third').hide();
            })

            $('.fourth').click(function(){
                $('.fourth').hide();
                $('.first').hide();
                $('.second').hide();
                $('.third').hide();
                $('.q-block').hide();

                $('.output').text("Thank you for completing the test!");


                $.getJSON("../videos.json", function(json){


                    var episodeID = json.videos[Math.floor(Math.random() * json.videos.length)]; //returns random object in json
        
                    var episodeURL = episodeID.url; //get random url from json

                    var episodeName = episodeID.episodeName;

                    $('.recc').append(`
                    <button class="button"x><h2><a href="${episodeURL}"> WATCH: '${episodeName}'</a></h2></button>
                    `)
        
                    
                });
            })
        }

    
    });

    // ! Getting Images for the question
    $.getJSON("../questions.json", function(json) {

       for(i = 0; i < json.images.length; i++){
           $(".image").append(`
                <div class="q-img">
                    <img src="${json.images[i].url}"
                </div>
           `)
       } 

    })


    // ! Responsive navbar functionality
    $('.navbar-burger').bind('click', function(){
        $('.burger-links').toggle('active');
    })

    $('.navbar-burger').click(function(){
        $(this).toggleClass('is-active');
    })

  
})
 
