Jokes API : https://v2.jokeapi.dev/



Joke Type:
?type=type

This parameter can only be used on the "joke" endpoint.
If it is set, you will only receive jokes with the specified joke type (what is a joke type?).
If it is not set or set to an invalid value, you will receive jokes of both types.
Available types are: single, twopart

?type=single



Endpoints:
An endpoint is an access point to send the HTTP requests to and get your response.
JokeAPI offers these following endpoints:

§ Get Joke:
 https://v2.jokeapi.dev/joke/[Category/-ies]

This endpoint is the one you want to call to get a joke.
A valid joke category or multiple joke categories, delimited with a comma, plus or minus character (, + -) must be provided in the URL.
These are all the available categories: Any, Misc, Programming, Dark, Pun, Spooky, Christmas


example call = https://v2.jokeapi.dev/joke/Programming?type=single


Programming, Pun, Spooky