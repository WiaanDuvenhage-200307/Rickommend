console.log("working!");

// TODO | Add onclick function that will attach click button to json file url
$.getJSON("videos.json", function(json) {
    console.log(json.videos[0].url); 

    $('.url').append(`
    
        <a href="${json.videos[0].url}" target="blank"><button class="button second is-large "><p>Watch The First Episode</p></button></a>
    `)
});