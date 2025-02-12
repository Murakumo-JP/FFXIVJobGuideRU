$(document).ready(function () {
   fetch('https://api.github.com/repos/Murakumo-JP/FFXIVJobGuideRU/issues/3/comments')
   .then(response => response.json())
   .then(news => {
       let html = '';
       let news_max_count = 4;
       let news_count = news.length >= news_max_count ? news_max_count : news.length;
       for (let i = news.length - 1; i >= news.length - news_count; i--) {
           let body = news[i].body;
           let titleMatch = /## (.*)\r?\n(.*)/g.exec(body);
           let title = titleMatch ? titleMatch[1] : body.split('\n')[0];
           let date = new Date(news[i].created_at).toLocaleDateString();
           html += `<div><span>${date} - </span><a href="#" class="news-link" data-title="${title}" data-content="${encodeURIComponent(body)}">${title}</a></div>`;
       }
       document.getElementById('main_news').innerHTML = html;
       $('.news-link').click(function(event) {
           event.preventDefault();
           let title = $(this).data('title');
           let content = decodeURIComponent($(this).data('content'));
           content = content.replace(/!\[.*?\]\((.*?)\)/g, '');
           content = content.replace(/## Обновление до патча \d+\.\d+\r?\n-?\s*(.*?)\s*\([0-9a-f]{40}\)\r?/, '$1');
           $('#newsTitle').text(title);
           $('#newsContent').html(content);
           $('#newsPopup, #overlay').fadeIn();
       });
   })
   .catch(error => console.error(error));
});

$('#overlay').click(function() {
   $('#newsPopup, #overlay').fadeOut();
});