source = 'bbc-news';
let apiKey ='3683b0b8ee9f4a629c6543f304233181';

let newsAccordion = document.getElementById('newsAccordion');

//creating a get request
const xhr = new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

//when response is ready
xhr.onload = function(){
  if(this.status===200){
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);
    let newsHtml = "";
    articles.forEach(function(element){
      let news = `
<div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
            aria-expanded="true" aria-controls="collapseOne">
            ${element.title}
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
          data-bs-parent="#accordionExample">
          <div class="accordion-body"> ${element.content} <a href = "${element.url}" target="_blank">Read More Here</a> </div>
        </div>
      </div> ` 
      newsHtml += news;
    });
    newsAccordion.innerHTML = newsHtml;
  }
  else{
    console.log("some error occured");
  }
}
xhr.send()

