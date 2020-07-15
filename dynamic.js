const clickableDiv = document.querySelector("#clicker");
const counterDiv = document.querySelector(".dynamic-divs");

document.addEventListener("click", count);

function count(event){

  if (event.target == clickableDiv){

    let oldCount;
    let newCount;

    oldCount = parseInt(counterDiv.innerHTML);

    newCount = oldCount + 1;

    counterDiv.innerHTML = newCount.toString();

  }
}
