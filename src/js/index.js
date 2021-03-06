import { DOMSelectors } from "./DOM";
// import { genres } from "./genre";

// const key = "YOURKEYHERE";

const query = async function () {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s`
    );
    const data = await response.json();
    data.meals.forEach((meal) => {
      let instructions = meal.strInstructions.substring(0, 229);
      if (meal.strInstructions.length > 229)
        instructions = instructions + "...";
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        `<section id="recipes">
      <div class="recipe-card">
        <div class="recipe-card-box">
        
        <img src="${meal.strMealThumb}" alt="" class="meal-image">
          <div class="recipe-box-text">
          
            <div class="recipe-card-text recipe-name">${meal.strMeal}</div>
            <div class="recipe-card-text recipe-cuisine">Cuisine: ${meal.strArea} </div>
            <div class="recipe-card-text ">
            <span class="recipe-title">Instructions</span>
            <p class="recipe-info" >${instructions}</p> 
            </div>
            <a class="flex-align-jcontent recipe-btn" href="${meal.strYoutube}">Watch Video</a>
             </div> <!-- recipe-box-text end -->
        </div> <!-- recipe-card-box end -->
      </div> <!-- recipe-card end -->
    </section> <!-- recipes end -->`
      );
    });
  } catch (error) {
    console.log(error);
    alert("Sorry! Seems like something went wrong.");
  }
};
query();
