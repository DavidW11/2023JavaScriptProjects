

console.log("Welcome to the Lobster Club Improv Comedy Show!");

document.getElementById("button").addEventListener('click', () => getJoke())

async function getJoke() {

    options = {
        method: 'GET', // specify this is a GET request, not a PUT or POST
        headers: {
            "Accept" : "application/json" // request the response in JSON format
        }
    }
    try {
        const response = await fetch('https://icanhazdadjoke.com/', options)
        const jsonResponse = await response.json()
        console.log(jsonResponse)
        document.getElementById("joke").innerHTML = jsonResponse.joke;
    }
    catch (error) {
        console.log(error)
    }
}
