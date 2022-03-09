$(document).ready(function(){
   
    $.getJSON("../questions.json", function(json) {
        for(i = 0; i<json.Questions.length; i++){
            $('.opacity').addClass([i]);
            console.log(json.Questions[i].Question);
            $(".q-block").append(`

            <div class="opacity ${json.Questions[i].id}">
            <h1 style="color: black;" class="q">${json.Questions[i].Question}</h1>

            <button id="69" class="button a" value="69"><p>${json.Questions[i].Option1}</p></button>
            <button id="103" class="button a" value="103"><p>${json.Questions[i].Option2}</p></button>
            <button id="45" class="button a" value="45"><p>${json.Questions[i].Option3}</p></button>
            <button id="70" class="button a" value="70"><p>${json.Questions[i].Option4}</p></button>

            </div>
            <div class="output"></div>

            `)

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

                $('.output').text("You are a lot like Rick!");
                $('.recc').append(`
                    <button class="button"x><h1><a href="https://www.youtube.com/watch?v=szzVlQ653as">You should watch 'Roy: A Life Well Lived'</a></h1></button>
                `)
            })
        }

    
    });

    $('.navbar-burger').bind('click', function(){
        $('.burger-links').toggle('active');
    })

    $('.navbar-burger').click(function(){
        $(this).toggleClass('is-active');
    })

  
})
 
