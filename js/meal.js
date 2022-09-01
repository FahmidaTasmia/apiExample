const loadMeal = (search) => {
    const url = ` https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeal(data.meals))

}


const displayMeal = meals => {
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = '';
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col')

        mealDiv.innerHTML = `
        <div class="col">
    <div class="card">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">T${meal.strInstructions.slice(0,200)}</p>
      </div>
    </div>
  </div>
        `;
        mealContainer.appendChild(mealDiv);
    });
}


const loadSearch = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadMeal(searchText);
    searchField.value = '';
}


const loadDetailMeal = () => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayDetailMeal(data.meals[0]))
}

const displayDetailMeal =()=>{
const detailMealContainer = document.getElementById('detailmeal-container')
detailMealContainer.innerHTML = ``;
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('card');
    mealDiv.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    detailMealContainer.appendChild(mealDiv);
}

loadMeal('')