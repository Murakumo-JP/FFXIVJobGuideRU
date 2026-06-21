$(document).ready(function () {
	fetch("/DB/changelog.json")
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

			$(".main_content").prepend(newsContainer);

			if ($("#overlay").length === 0) {
				$(".main_content").append('<div id="overlay"></div>');
			}

			let html = "";
			for (let i = news.length - 1; i >= news.length - newsCount; i--) {
				const patch = news[i];
				const date = patch.patch_update;
				const title = `Обновление до патча ${patch.patch_version}`;

				html += `<div><span>${date} - </span><a href="#" class="news-link" data-index="${i}">${title}</a></div>`;
			}
			$("#main_news").html(html);

			$(".news-link").click(function (event) {
				event.preventDefault();

				const index = $(this).data("index");
				const currentPatch = news[index];
				const title = `Обновление до патча ${currentPatch.patch_version}`;
				const content = currentPatch.patch_changelog.join("\n");

				$("#newsTitle").text(title);
				$("#newsContent").text(content);

				$("#newsPopup, #overlay").fadeIn();
			});
		})
		.catch((error) => {
			console.debug("Не удалось загрузить changelog.json:", error);
			$("#main_news").empty();
		});
});

$(document).on("click", "#overlay", function () {
	$("#newsPopup, #overlay").fadeOut();
});
