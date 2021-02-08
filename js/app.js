const searchMeal = () =>{
    const searchText = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchText}`
//    load data
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

const displayMeals = foods => {
    const foodContainer = document.getElementById('food-container');

    foods.forEach(food => {
        const foodDiv = document.createElement('div');
        foodDiv.innerText = food.strMeal;
        foodContainer.appendChild(foodDiv);
    });
}