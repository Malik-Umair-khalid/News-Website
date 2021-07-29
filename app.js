var mainDiv = document.getElementById("mainDiv")
var select = document.getElementById("input")
select.onchange = function (){
    myfuns(select.value)
}
window.onload = function (){
  document.getElementById("hadding").innerHTML = `<h1 class = "text-center mt-5">Please Select</h1>`

}
function myfuns(userSlect){
    async function getNews(userSlect){
        const response = await fetch(`https://newsapi.org/v2/everything?q=${userSlect}&from=2021-06-24&sortBy=publishedAt&apiKey=0f9b4062c0834d46ab541613cc85ff84`) 
        const json = await response.json()
        return json;
    }
    getNews(userSlect).then((json) =>{
        console.log(json)
        mainDiv.innerHTML = ""
        for(let i = 0; i < json.articles.length; i++){
            let card = `<div class="card" style="width: 18rem;">
            <img src="${json.articles[i].urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${json.articles[i].title}</h5>
              <p class="card-text">${json.articles[i].description}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>    
            `
            mainDiv.innerHTML += card
        }
    }) 

}
