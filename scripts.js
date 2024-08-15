// API key
const apiKey = process.env.NEWS_API_KEY;

// NEWS API URL
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

async function fetchNews() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        displayNews(data.articles);
    }
    catch(error){
        console.error(`There was an error!`, error);
    }
}
fetchNews();

function displayNews(articles){
    const newsDiv = document.querySelector('#news');

    for(let article of articles){
        const articleDiv = document.createElement('div');

        const title = document.createElement('h4');
        title.textContent = article.title;
        articleDiv.appendChild(title);

        newsDiv.appendChild(articleDiv);

        const authorDiv = document.createElement('div');

        const author = document.createElement('h4');
        author.textContent = article.author;

        authorDiv.appendChild(author);

        newsDiv.appendChild(authorDiv);

    }
}