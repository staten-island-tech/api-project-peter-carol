import { DOMSelectors } from "./DOM";
// import { genres } from "./genre";

// const key = "YOURKEYHERE";

const query = async function () {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=`
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
          <img src="${meal.strMealThumb}" alt="" class="meal-image">
              <div class="recipe-card-box">
  
                <h1 class="recipe-nohover-name">Title</h1>
  
                <div class="recipe-box-text">
  
                  <div class="recipe-name">Title</div>
                  <div class="recipe-cuisine"> Cuisine </div>
                  <div class="recipe-info"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex asperiores consequuntur vero! Totam temporibus dolorem repudiandae numquam facilis ut fuga animi odit aliquam autem in dolorum, sint aperiam officiis eos? </div>
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
