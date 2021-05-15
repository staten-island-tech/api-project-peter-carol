import { DOMSelectors } from "./DOM";
import { genres } from "./genre";


const query = async function () {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
    const data = await response.json();
    data.meals.forEach((breakfast)=>{
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        ` <div class="movie-card">
        <div class="movie-card-front">
          <img
            src="${breakfast.strMealThumb}"
            alt=""
            class="poster"
          />
        </div>
        <div class="movie-card-back">
          <h3 class="movie-card-header">${breakfast.strMeal}</h3>
          <div class="score-box">
            <p class="user-score"></p>
            <p class="user-score">${breakfast.strCategory}</p>
          </div>

          <div class="release-box">
            <p class="release-date"></p>
            <p class="release-date">${breakfast.strArea}</p>
          </div>
     </div>
      </div>`
      );
    });
  } catch (error) {
    console.log(error);
    alert("Sorry! Seems like something went wrong.");
  }
};
query();