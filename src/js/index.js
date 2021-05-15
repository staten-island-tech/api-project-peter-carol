 import { DOMSelectors } from "./DOM";
// import { genres } from "./genre";

// const key = "YOURKEYHERE";

const query = async function () {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
    const data = await response.json();
    data.meals.forEach((meal)=>{
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        `<section id="recipes">
      <div class="recipe-card">
        <div class="recipe-card-box">
          <div class="recipe-box-text">
            <div class="recipe-card-text recipe-name">${meal.strMeal}</div>
            <div class="recipe-card-text recipe-cuisine">Cuisine: ${meal.strArea} </div>
            <div class="recipe-card-text recipe-info">Ingredients <br> This meal's main ingredients are ${meal.strIngredient1}, ${meal.strIngredient2}, ${meal.strIngredient3}, ${meal.strIngredient4}. </div>
            <a class="flex-align-jcontent recipe-btn" href="#recipes">Read More</a>
             </div> <!-- recipte-box-text end -->
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
