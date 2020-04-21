import '@webcomponents/custom-elements/src/native-shim.js';
import { headNewsUrl } from "./apiParams.js";
import  './news-article.component.js';



//addEvenrtListerner dooes not work on stackblitz
 fetchNews();

async function fetchNews() {
  const res = await fetch(headNewsUrl);
  const json = await res.json();

  const main = document.querySelector("main");
  json.articles.forEach(article => {
    const element = document.createElement("news-article");
    element.article = article;
    main.appendChild(element);
  });
}
