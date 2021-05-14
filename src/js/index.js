import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

const key = "fe50100f2b6a46759d3568d66cfde90a";

const query = async function () {
  try {
    const response = await fetch(`
https://api.spoonacular.com/recipes/search?query=breakfast&sortDirection=desc&apiKey=${key}`);
    const data = await response.json();
    data.results.forEach((breakfast)=>{
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        ` <div class="movie-card">
        <div class="movie-card-front">
          <img
            src="${breakfast.image}"
            alt=""
            class="poster"
          />
        </div>
        <div class="movie-card-back">
          <h3 class="movie-card-header">${breakfast.title}</h3>
          <div class="score-box">
            <p class="user-score">Preparation Time</p>
            <p class="user-score">${breakfast.readyInMinutes}</p>
          </div>

          <div class="release-box">
            <p class="release-date">Servings</p>
            <p class="release-date">${breakfast.servings}</p>
          </div>
     </div>
      </div>`
      );
    });
  } catch (error) {
    console.log(error);
    alert("hey something went wrong");
  }
};
query();