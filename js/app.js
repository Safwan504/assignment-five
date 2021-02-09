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
        foodDiv.addEventListener("click", function(){
            const foodMoreInfo = document.getElementById('more-info');
            foodMoreInfo.innerHTML = `
            <h3>Meal Name: ${food.strMeal}</h3>
            <p>Meal ID: ${food.idMeal}</p>
            <img src="${food.strMealThumb}">
            `
        })
        foodDiv.className = 'food-div';
        const mealInfo = `
        <h5>${food.strMeal}</h5>
        <img src="${food.strMealThumb}">
        `
        foodDiv.innerHTML = mealInfo;
        foodContainer.appendChild(foodDiv);
    });
}