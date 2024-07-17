import { newsList } from "./news.js";

function renderNewsList() {
  const newsListElement = document.getElementById('news-list');
  newsList.forEach((item, index) => {
      const li = document.createElement('li');
      li.className = 'news-item';
      li.innerHTML = `
          <a href="#" class="news-title">${item.title}</a>
          <span class="news-domain">(${item.url})</span><br>
          <span class="news-meta">${item.points} points by ${item.author} ${item.time} | ${item.comments} comments</span>
      `;
      newsListElement.appendChild(li);
  });
}

document.addEventListener('DOMContentLoaded', renderNewsList);
