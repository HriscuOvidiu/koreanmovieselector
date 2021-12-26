const btn = document.querySelector("button");
let results = [];

btn.addEventListener('click', async () => {
    const result = document.querySelector('.result');
    result.innerHTML = "";

    const wait = document.createElement('p');
    wait.innerText = "Wait while we find a title for you...";

    result.appendChild(wait);

    const title = await getRandomTitle();

    const titleImage = document.createElement('img');
    titleImage.src = title.image;
    
    const name = document.createElement('p');
    name.innerText = title.title;

    const titleLink = document.createElement('a');
    titleLink.href = `https://www.google.com/search?q=${title.title + ' Watch Online'}`;
    titleLink.innerText = "Link to Google Search";

    result.innerHTML = "";
    result.appendChild(name);
    result.appendChild(titleImage);
    result.appendChild(titleLink);
});

async function getRandomTitle() {
    if (results.length == 0) {
        const fetchRes = await fetch("https://imdb-api.com/API/AdvancedSearch/k_7k9vt2d6?release_date=2018-01-01,&genres=drama&countries=kr&count=1000000");
        const res = await fetchRes.json();
        results = res.results;
    }
    
    const index = Math.floor(Math.random() * results.length);

    return results[index];
}
