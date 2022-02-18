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
        fetch("https://v2.jokeapi.dev/joke/Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single")
        .then(response => response.json())
        .then(punJokes => renderJokes(punJokes))
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

    //Creating submission form
    const sendForm = document.querySelector('#send-joke-form')
    sendForm.addEventListener("submit", (e) => saveInfo(e))

    function saveInfo(e) {
        e.preventDefault()
        let friendEmail = e.target["friend-email"].value
        let friendName = e.target["friend-name"].value
        let senderName = e.target["your-name"].value

        let newUser = {
            "id": "",
            "friend-email": friendEmail,
            "friend-name": friendName,
            "sender-name": senderName
        }

        //fetch(POST) request
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(resp => resp.json())
        .then(() => {
            sendForm.reset();
            alert("LOL GOTCHA I WILL STEAL YOUR IDENTITY")
        })
    }
})