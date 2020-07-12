//Make a call to the URL, loop through the results and display the type, setup and punchline properties for only 5 of the results. Don't display all 10.

const getJokesNow = "https://official-joke-api.appspot.com/random_ten";

async function retrieveJokes(){
    const res = await fetch(getJokesNow);
    const rezults = await res.json();
    confirmedJokes(rezults);
    //console.log(rezults);
}

retrieveJokes();

function confirmedJokes(read){
    const showJokes = document.querySelector(".col-lg-3")
        let html = "";

        
        for(let i = 0; i < 5; i++) {


            html += `
            <div class="card">
            <div class="joke-detail">
            <h4 class="type">${read[i].type}</h4>
            <div class="setup">${read[i].setup}</div>
            <div class="punchline">${read[i].punchline}</div>
            </div>
            </div>
            `;

            
           }
      showJokes.innerHTML = html;

}

/*


//Change the title metatag value on the page to be the value of the setup property from the 3rd result.

const getJokesNow = "https://official-joke-api.appspot.com/random_ten";

async function retrieveJokes(){
    const res = await fetch(getJokesNow);
    const rezults = await res.json();
    confirmedJokes(rezults);
} catch (error){
      confirmError.innerHTML("An error has occured")
      console.log(error);
}

retrieveJokes();

function confirmedJokes(read){
    const showJokes = document.querySelector(".col-lg-3")
        let html = "";

        
        for(let i = 0; i < 5; i++) {

            const showJokes = document.querySelector("title")
            let html = "";
    
            html += `<title>${read[2].setup}</title>`;
        showJokes.innerHTML = html;
        }
      showJokes.innerHTML = html;

}

//Catch any errors and display a message in the h1 element on the page if an error occurs.


