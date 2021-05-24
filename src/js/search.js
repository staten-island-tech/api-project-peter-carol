import { DOMSelectors } from "./DOM";
//import { meals } from "meals";
  const listen = function () {
    console.log("listen");
    DOMSelectors.searchForm.addEventListener("submit", function (e) {
      e.preventDefault(); //prevents the form from resetting the page
      DOMSelectors.grid.innerHTML= "";
      //console.log("done");
      const searchParams = DOMSelectors.searchArea.value;

      const searchQuery = async function () {
        //console.log("async"); 
        try {
          const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchParams}`
          );
          const data = await response.json();
          data.meals.forEach((meal) => {
             let searchID = meal.idMeal;
              const searchbyID = async function () {
                const responseID = await fetch(
                  `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${searchID}`
                ); 
                const dataIDb = await responseID.json();
                
                dataIDb.meals.forEach((meal) => {
               let instructions = meal.strInstructions.substring(0,229);
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
                  <span class="recipe-title" >Instructions</span>
                  <p class="recipe-info" >${instructions}</p> 
                  </div>
                  <a class="flex-align-jcontent recipe-btn" href="${meal.strYoutube}">Watch Video</a>
                   </div> <!-- recipe-box-text end -->
              </div> <!-- recipe-card-box end -->
            </div> <!-- recipe-card end -->
          </section> <!-- recipes end -->`
                  );
                });
              };
              searchbyID();
            });
        } catch (error) {
          console.log(error);
          alert("Seems like something went wrong. You either need to be more specific or we do not have you ingredient. Sorry!");
        }
      };
      searchQuery();
    });
  };
listen();