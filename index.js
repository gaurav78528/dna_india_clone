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

let newsArr = [
  {
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523938-2522529-2455342-draupadi-murmu.jpg",
    news: "Droupadi Murmu's inspirational life: Two sons, husband died within four years, but she continued her march",
    link: "LatestNews.html",
  },
  {
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523922-sonia-rahul.jpg",
    news: "National Herald case explained: Why is Sonia Gandhi appearing before ED today?",
    link: "photos.html",
  },
  {
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523947-microsoft-teams-out.png",
    news: "Microsoft Teams outage triggers meme fest on Twitter, corporate workers call it ‘the best day’",
    link: "videos.html",
  },
  {
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523948-sanjay-duttpr-handout-1.jpg",
    news: "Shamshera director Karan Malhotra recalls Sanjay Dutt battling cancer throughout film's shoot",
    link: "explainers.html",
  },
  {
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523911-rishi-sunak-liz-truss.jpg",
    news: "Rishi Sunak scripts history, to face Liz Truss in final leg of British PM contest",
    link: "india.html",
  },
  {
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523936-sourav-ganguly-jay-shah.jpg",
    news: "DNA Explainer: What is the BCCI constitution amendment plea? How it affects Sourav Ganguly, Jay Shah?",
    link: "entertainment.html",
  },
];
//  JS for left section
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

// JS for center section
newsArr.forEach(function (elem) {
  let links = document.createElement("a");
  links.setAttribute("href", elem.link);
  // links.innerText = elem.name;
  let div = document.createElement("div");
  let img = document.createElement("img");
  img.setAttribute("src", elem.image);

  let news = document.createElement("p");
  news.innerText = elem.news;
  links.append(div);
  div.append(img, news);
  document.querySelector("#news").append(links);
});
