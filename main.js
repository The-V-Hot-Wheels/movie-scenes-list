// The following with help from 
// https://stackoverflow.com/questions/12070631/how-to-use-json-file-in-html-code
function appendData(data) {
    let mainContainer = document.getElementById("movieData");
    for (let i = 0; i < data.length; i++) {
        let div = document.createElement("div");
        let poster = '<img class="poster" src="' + data[i].posterURL + 
            '"/>';
        let title = '<h2 class="movieTitle">' + data[i].movieTitle + '</h2>';
        let director = '<li><b>Director:</b> ' + data[i].director + '</li>';
        let writer = '<li><b>Writer:</b> ' + data[i].writer + '</li>';
        let stars = '<li>' + data[i].stars + '</li>';
        let imdbPageLink = '<li><a href="https://www.imdb.com/title/' + 
            data[i].imdbID + '/">IMDb page</a></li>';
        let sceneDescription = 
            '<p class="sceneDesc"><b>Draw the scene in which:</b> ' + 
            data[i].scene + '</p>'
        div.innerHTML = poster + title + '<ul>' + director + writer + stars + 
            imdbPageLink + '</ul>' + sceneDescription + '<hr />';
        mainContainer.appendChild(div);
    }
}
    