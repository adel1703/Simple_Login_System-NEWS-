var logOutBtn = document.getElementById("logOutBtn");
var welcomeUser = document.getElementById("userName");
var userName = localStorage.getItem("userName");

welcomeUser.innerHTML = "Welcome " + userName ;

logOutBtn.addEventListener("click" , function(){
    window.location.href="index.html"
})




// https://newsapi.org/v2/everything?q=tesla&from=2023-11-30&sortBy=publishedAt&apiKey=836b3fcd323346e4b13fb7d8570bbf38

var allNews = [] ;

var topHeadlines = new XMLHttpRequest();
    topHeadlines.open( "GET" ,`https://jsonplaceholder.typicode.com/posts`)
    topHeadlines.send();
    topHeadlines.addEventListener(  "readystatechange"  , function() {
        if( topHeadlines.readyState == 4 && topHeadlines.status == 200 ){
            allNews = JSON.parse(topHeadlines.response) ;
            console.log(allNews)
            displayAllNews()
        }
    } )

function displayAllNews(){
    var collectionOfNews = "" ;

    for( var i = 0 ; i < allNews.length ; i++ ){
        collectionOfNews += `<div class="col-lg-3 col-md-6 col-sm-12">
        <div class="article ">
        <a href="${ allNews[i].data}">
            <img src="./images/api-testing-methodologies-social.png" alt="${ allNews[i].id }" class=" w-100 " >
        </a>    
            <h3 class="text-white mt-3 fw-bolder text-center text-bg-danger ">${ allNews[i].title }</h3>
            <p class="text-white text-center ">${ allNews[i].body }</p>
        </div>
    </div>`
    }

    document.querySelector(".new").innerHTML = collectionOfNews ;
}