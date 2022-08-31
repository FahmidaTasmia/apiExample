const loadMeals = (search)=>{
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res=>res.json())
    .then(data=> displaYMeals(data.meals))
}

const displaYMeals = meals =>{
    const foodContainer = document.getElementById('food-container');
    foodContainer.innerHTML=``;
    meals.forEach(meal => {
    const foodDiv = document.createElement('div');
    foodDiv.classList.add('col');
    foodDiv.innerHTML=`

    <div class="col">
          <div onclick="loadMealDetail(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
            </div>
          </div>
        </div>
    `
    foodContainer.appendChild(foodDiv);
    });
}

const searchFood=()=>{
const searchField = document.getElementById('search-field');
const SearchText = searchField.value;
loadMeals(SearchText)
searchField.value='';

}


const loadMealDetail =(idMeal)=>{
const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
fetch(url)
.then(res=>res.json())
.then(data=>displaYMealsDetail(data.meals[0]))
}

const  displaYMealsDetail = meal =>{
const detailContainer = document.getElementById('detail-container');
detailContainer.innerHTML=``;
const foodDiv= document.createElement('div');
foodDiv.classList.add('card');
foodDiv.innerHTML=`
<img src="${meal.strMealThumb}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${meal.strMeal}</h5>
  <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
`;
detailContainer.appendChild(foodDiv)
}
loadMeals('');