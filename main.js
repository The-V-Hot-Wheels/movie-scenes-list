    function appendData(data) {
        let mainContainer = document.getElementById("movieData");
        for (let i = 0; i < data.length; i++) {
            let div = document.createElement("div");
            div.innerHTML = '<h2 class="movieTitle">' + data[i].movieTitle + '</h2>';
            mainContainer.appendChild(div);
        }
    }
    