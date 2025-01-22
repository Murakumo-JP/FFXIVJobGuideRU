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
            html += '<div><span>' + date + ' -</span><a target="_blank" href="' + news[i].html_url + '">' + body + '</a></div>';
         }
         //console.debug(json);
         document.getElementById('main_news').innerHTML = html;
      });
   })
   .catch(function (reason) {
      console.debug(reason);
      document.getElementById('main_news').innerHTML = '';
   });
});