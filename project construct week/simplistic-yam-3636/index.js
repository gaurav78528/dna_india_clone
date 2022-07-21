let logoArr = [
  {
    image:
      "https://english.cdn.zeenews.com/static/public/icons/icons-latestnews.svg",
    name: "Latest News",
    link: "LatestNews.html",
  },
  {
    image:
      "https://english.cdn.zeenews.com/static/public/icons/icons-photos.svg",
    name: "Photos",
    link: "photos.html",
  },
  {
    image:
      "https://english.cdn.zeenews.com/static/public/icons/icons-videos.svg",
    name: "Videos",
    link: "videos.html",
  },
  {
    image:
      "https://english.cdn.zeenews.com/static/public/icons/icons-explainer.svg",
    name: "Explainers",
    link: "explainers.html",
  },
  {
    image:
      "https://english.cdn.zeenews.com/static/public/icons/icons-india.svg",
    name: "India",
    link: "india.html",
  },
  {
    image:
      "https://english.cdn.zeenews.com/static/public/icons/icons-entertainment.svg",
    name: "Entertainment",
    link: "entertainment.html",
  },
  {
    image:
      "https://english.cdn.zeenews.com/static/public/icons/icons-sports.svg",
    name: "Sports",
    link: "sports.html",
  },
  {
    image:
      "https://english.cdn.zeenews.com/static/public/icons/icons-viralNews.svg",
    name: "Viral News",
    link: "viralNews.html",
  },
  {
    image:
      "https://english.cdn.zeenews.com/static/public/icons/icons-lifestyle.svg",
    name: "Lifestyle",
    link: "Lifestyle.html",
  },
  {
    image:
      "https://english.cdn.zeenews.com/static/public/icons/icons-business.svg",
    name: "Business",
    link: "business.html",
  },
  {
    image:
      "https://english.cdn.zeenews.com/static/public/icons/icons-world.svg",
    name: "World",
    link: "world.html",
  },
  {
    image:
      "https://english.cdn.zeenews.com/static/public/icons/ezmall-icon1.png",
    name: "Ezmall",
    link: "Ezmall.html",
  },
];

logoArr.forEach(function (elem) {
  let links = document.createElement("a");
  links.setAttribute("href", elem.link);
  // links.innerText = elem.name;
  let div = document.createElement("div");
  let img = document.createElement("img");
  img.setAttribute("src", elem.image);

  let name = document.createElement("p");
  name.innerText = elem.name;
  links.append(div);
  div.append(img, name);
  document.querySelector("#left-section").append(links);
});
