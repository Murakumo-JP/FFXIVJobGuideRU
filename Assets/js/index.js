document.addEventListener("DOMContentLoaded", () => {
	const mainContent = document.querySelector(".main_content");
	if (!mainContent) return;

	fetch("/DB/changelog.json")
		.then((response) => response.json())
		.then((news) => {
			const newsMaxCount = 4;
			const newsCount = Math.min(news.length, newsMaxCount);

			const newsHTML = `
                <div class="news">
                    <span>ЖУРНАЛ ИЗМЕНЕНИЙ</span>
                    <div id="main_news"></div>
                    <div class="warn_info"></div>
                </div>
                <div class="news_popup">
                    <div id="newsPopup" style="display: none;">
                        <h2 id="newsTitle"></h2>
                        <pre id="newsContent"></pre>
                    </div>
                </div>
            `;

			mainContent.insertAdjacentHTML("afterbegin", newsHTML);

			if (!document.getElementById("overlay")) {
				mainContent.insertAdjacentHTML("beforeend", '<div id="overlay" style="display: none;"></div>');
			}

			let linksHTML = "";
			for (let i = news.length - 1; i >= news.length - newsCount; i--) {
				const patch = news[i];
				const date = patch.patch_date;
				const title = `${patch.patch_name || "Обновление до патча"} ${patch.patch_version}`;

				linksHTML += `<div><span>${date} - </span><a class="news-link" data-index="${i}">${title}</a></div>`;
			}

			const mainNewsContainer = document.getElementById("main_news");
			if (mainNewsContainer) {
				mainNewsContainer.innerHTML = linksHTML;
			}

			const newsLinks = document.querySelectorAll(".news-link");
			const newsPopup = document.getElementById("newsPopup");
			const overlay = document.getElementById("overlay");
			const newsTitle = document.getElementById("newsTitle");
			const newsContent = document.getElementById("newsContent");

			newsLinks.forEach((link) => {
				link.addEventListener("click", (event) => {
					event.preventDefault();

					const index = link.getAttribute("data-index");
					const currentPatch = news[index];

					newsTitle.textContent = `Обновление до патча ${currentPatch.patch_version}`;
					newsContent.textContent = currentPatch.patch_changelog.join("\n");

					if (newsPopup) newsPopup.style.display = "block";
					if (overlay) overlay.style.display = "block";
				});
			});
		})
		.catch((error) => {
			console.debug("Не удалось загрузить changelog.json:", error);
			const mainNewsContainer = document.getElementById("main_news");
			if (mainNewsContainer) {
				mainNewsContainer.innerHTML = "";
			}
		});

	document.addEventListener("click", (event) => {
		if (event.target.id === "overlay") {
			const newsPopup = document.getElementById("newsPopup");
			const overlay = document.getElementById("overlay");

			if (newsPopup) newsPopup.style.display = "none";
			if (overlay) overlay.style.display = "none";
		}
	});
});
