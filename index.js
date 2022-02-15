document.addEventListener("DOMContentLoaded", function(){

    // Programming Jokes Button
    const programmingButton = document.getElementById("programming-button");
    programmingButton.addEventListener("click", function(){
        fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single")
        .then(response => response.json())
        .then(programmingJokes => renderJokes(programmingJokes))
    })

    // Puns Button
    const punButton = document.getElementById("pun-button");
    punButton.addEventListener("click", function(){
        fetch("")
        .then
        .then
    })

    // Misc Jokes Button
    const miscButton = document.getElementById("misc-button");
    miscButton.addEventListener("click", function(){
        fetch("https://v2.jokeapi.dev/joke/Miscellaneous?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single")
        .then(response => response.json())
        .then(miscJokes => renderJokes(miscJokes))
    })

    function renderJokes(jokes){
        const jokeDisplay = document.getElementById("joke-content")
        jokeDisplay.innerHTML = jokes.joke;
    }
})