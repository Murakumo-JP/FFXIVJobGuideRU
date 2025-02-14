$(document).ready(function () {
    fetch('https://api.github.com/repos/Murakumo-JP/FFXIVJobGuideRU/issues/3/comments')
    .then(function (response) {
       response.text().then(function (json) {
          let news = JSON.parse(json);
          let html = '';
          let news_max_count = 4;
          let news_count = news.length >= news_max_count ? news_max_count : news.length;
          for (let i = news.length - 1; i >= news.length - news_count; i--) {
             let body = '';
             let n = /## (.*)\r\n(.*)/g.exec(news[i].body);
             if (n !== null) {
                body = n[1];
             } else {
                let nn = /## (.*)\n\n(.*)/g.exec(news[i].body);
                if (nn !== null) {
                   body = nn[1];
                } else {
                   body = news[i].body.replaceAll('\r\n', '');
                }
             }
             let date = new Date(news[i].created_at).toLocaleDateString();
             html += `<div><span>${date} - </span><a href="#" class="news-link" data-title="${body}" data-url="${news[i].html_url}" data-index="${i}">${body}</a></div>`;
          }
          document.getElementById('main_news').innerHTML = html;
          $('.news-link').click(function(event) {
              event.preventDefault();
              let index = $(this).data('index');
              let title = $(this).data('title');
              let url = $(this).data('url');
              let content = news[index].body;
              content = content.replace(/!\[.*?\]\(\s*https?:\/\/github\.com\/user-attachments\/assets\/[0-9a-f-]+\s*\)\r?\n?/g, '');
              content = content.replace(/\(\s*(?:https?:\/\/github\.com\/[\w-]+\/[\w-]+\/commit\/)?[0-9a-f]{40}\s*\)/g, '');
              content = content.replace(/## Обновление до патча \d+\.\d+\r?\n?\s/g, '');
              $('#newsTitle').text(title);
              $('#newsContent').html(content);
              $('#newsContent').append(`<a href="${url}" target="_blank" class="btnNewsGitHub"><img src="Assets/img/svg/github.svg"/><span>Открыть новость на GitHub</span></a>`);
              $('#newsPopup, #overlay').fadeIn();
          });
       });
    })
    .catch(function (reason) {
       console.debug(reason);
       document.getElementById('main_news').innerHTML = '';
    });
 });
 
 $('#overlay').click(function() {
    $('#newsPopup, #overlay').fadeOut();
 });
 