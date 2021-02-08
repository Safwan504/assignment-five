const searchMeal = () =>{
    const searchText = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}