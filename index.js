import { headNewsUrl } from "./apiParams.js";

window.addEventListener("load", () => {
  console.log("Load");
  fetchNews();
});

async function fetchNews() {
  const res = await fetch(headNewsUrl);
  const json = await res.json();

  const main = document.querySelector("main");
  json.articles.forEach(article => {
    console.log(article);
    const element = document.createElement("news");
    element.article = article;
    main.appendChild(element);
  });
}
