const newsSection = document.querySelector(".Results2");

const news = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f8052b08b0msh617c19c65558cdap1e8739jsn659066386b7a",
    "X-RapidAPI-Host": "football98.p.rapidapi.com",
  },
};
document.querySelectorAll("h6").forEach((leg) =>
  leg.addEventListener("click", function () {
    newsSection.innerHTML = "";
    fetch(
      `https://football98.p.rapidapi.com/${leg.innerHTML
        .replaceAll(" ", "")
        .toLowerCase()}/news`,
      news
    )
      .then(function (response) {
        // 2
        return response.json();
      })
      .then(response => console.log(response))
      .then((data) => {
        data.forEach((news) => {
          const newsmockup = `
            <div class="align-news">
            <a href="${news.NewsLink}"style="text-decoration: none;"><img src="${news.Image}"></a>
            <span>${news.Title}<p>${news.PublisherDate}</p></span>
            
            </div>
            
            `;
          newsSection.insertAdjacentHTML("beforeend", newsmockup);
        });
      })
      .catch((err) => console.error(err));
  })
);
