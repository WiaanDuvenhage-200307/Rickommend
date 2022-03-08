$(document).ready(function(){

    $('button').click(function(){
        var clickedBtn  = $(this).val();
        console.log(clickedBtn); // to check what button is being clicked and display it to the console.

        if(clickedBtn == 70){
            $(this).css('background-color: green');
            $('.output').append("Correct");
        } else {
            $(this).css('background-color: red');
            $('.output').append('Wrong!');
        }
    })
})
 
