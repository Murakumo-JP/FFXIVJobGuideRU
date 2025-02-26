$(document).ready(function () {
	fetch("https://api.github.com/repos/Murakumo-JP/FFXIVJobGuideRU/issues/3/comments")
		.then((response) => response.json())
		.then((news) => {
			const newsMaxCount = 4;
			const newsCount = Math.min(news.length, newsMaxCount);
			const newsContainer = $(
				`<div class="news">
                    <span>Новости обновления</span>
                    <div id="main_news"></div>
                    <div class="warn_info"></div>
                </div>
                <div class="news_popup">
                    <div id="newsPopup">
                        <h2 id="newsTitle"></h2>
                        <pre id="newsContent"></pre>
                    </div>
                </div>`
			);
			$(".news_popup").append(newsContainer);
			if ($("#overlay").length === 0) {
				$(".main_content").append('<div id="overlay"></div>');
			}
			let html = "";
			for (let i = news.length - 1; i >= news.length - newsCount; i--) {
				const match = news[i].body.match(/## (.*?)(?:\r\n|\n\n)(.*)/);
				const body = match ? match[1] : news[i].body.replace(/\r\n/g, "");
				const date = new Date(news[i].created_at).toLocaleDateString();
				html += `<div><span>${date} - </span><a href="#" class="news-link" data-title="${body}" data-url="${news[i].html_url}" data-index="${i}">${body}</a></div>`;
			}
			$("#main_news").html(html);
			$(".news-link").click(function (event) {
				event.preventDefault();
				const index = $(this).data("index");
				const title = $(this).data("title");
				const url = $(this).data("url");
				let content = news[index].body;
				content = content
					.replace(/!\[.*?\]\(\s*https?:\/\/github\.com\/user-attachments\/assets\/[0-9a-f-]+\s*\)\r?\n?/g, "")
					.replace(/\(\s*(?:https?:\/\/github\.com\/[\w-]+\/[\w-]+\/commit\/)?[0-9a-f]{40}\s*\)/g, "")
					.replace(/## Обновление до патча \d+\.\d+\r?\n?\s?/g, "");
				$("#newsTitle").text(title);
				$("#newsContent")
					.html(content)
					.append(
						`<a href="${url}" target="_blank" class="btnNewsGitHub">
                            <img src="Assets/img/svg/github.svg"/>
                            <span>Открыть новость на GitHub</span>
                        </a>`
					);
				$("#newsPopup, #overlay").fadeIn();
			});
		})
		.catch((error) => {
			console.debug(error);
			$("#main_news").empty();
		});
});
$(document).on("click", "#overlay", function () {
	$("#newsPopup, #overlay").fadeOut();
});
