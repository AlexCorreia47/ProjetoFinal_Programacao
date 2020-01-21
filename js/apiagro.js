$.getJSON( "test.json", function( json ) {
    //console.log(json.Patrocinadores[1].name);
    document.getElementById("sponsor").innerHTML = json.Patrocinadores[2].name;

});
