document.addEventListener("DOMContentLoaded", function(){

    // Programming Jokes Button
    const programmingButton = document.getElementById("programming-button");
    programmingButton.addEventListener("click", function(){
        fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
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

    // Spooky Jokes Button
    const spookyButton = document.getElementById("spooky-button");
    spookyButton.addEventListener("click", function(){
        fetch("")
        .then
        .then
    })

    function renderJokes(jokes){
        const jokeDisplay = document.getElementById("joke-content")
        jokeDisplay.innerHTML = jokes.joke;
    }
})