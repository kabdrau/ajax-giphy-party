console.log("Let's get this party started!");
async function getGifByName(gifName) {
    try {
        const url = `https://api.giphy.com/v1/gifs/search?q=${gifName}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`;
        const res = await axios.get(url);
        let index = Math.floor(Math.random()*50);
        const gif = res.data.data[index].images.original.url;
        $("#gifs").append(`<img src="${gif}"</img>`)
    } catch (err) {
        alert("Sorry, giph not found, try again");
    }
}

// search gif
const form = document.querySelector("#searchform");
form.addEventListener("submit", function(evt) {
    evt.preventDefault();
    const input = document.querySelector("#gifname");
    getGifByName(input.value);
    input.value = "";
})

//remove gif
$("#output").on("click", "#remove", function() {
    $('#gifs').empty()
})