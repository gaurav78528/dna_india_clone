// seatch icon
let searchBtn = document.getElementById("search");
searchBtn.addEventListener("click", function () {
  console.log("clicked on search btn");
});
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
    link: "#",
  },
  {
    image:
      "https://english.cdn.zeenews.com/static/public/icons/icons-videos.svg",
    name: "Videos",
    link: "#",
  },
  {
    image:
      "https://english.cdn.zeenews.com/static/public/icons/icons-explainer.svg",
    name: "Explainers",
    link: "#",
  },
  {
    image:
      "https://english.cdn.zeenews.com/static/public/icons/icons-india.svg",
    name: "India",
    link: "#",
  },
  {
    image:
      "https://english.cdn.zeenews.com/static/public/icons/icons-entertainment.svg",
    name: "Entertainment",
    link: "#",
  },
  {
    image:
      "https://english.cdn.zeenews.com/static/public/icons/icons-sports.svg",
    name: "Sports",
    link: "#",
  },
  {
    image:
      "https://english.cdn.zeenews.com/static/public/icons/icons-viralNews.svg",
    name: "Viral News",
    link: "#",
  },
  {
    image:
      "https://english.cdn.zeenews.com/static/public/icons/icons-lifestyle.svg",
    name: "Lifestyle",
    link: "#",
  },
  {
    image:
      "https://english.cdn.zeenews.com/static/public/icons/icons-business.svg",
    name: "Business",
    link: "#",
  },
  {
    image:
      "https://english.cdn.zeenews.com/static/public/icons/icons-world.svg",
    name: "World",
    link: "#",
  },
  {
    image:
      "https://english.cdn.zeenews.com/static/public/icons/ezmall-icon1.png",
    name: "Ezmall",
    link: "#",
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

// JS FOR NEWS IN CENTER-SECTION
let newsArr = [
  {
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523938-2522529-2455342-draupadi-murmu.jpg",
    news: "Droupadi Murmu's inspirational life: Two sons, husband died within four years, but she continued her march",
    link: "#",
  },
  {
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523922-sonia-rahul.jpg",
    news: "National Herald case explained: Why is Sonia Gandhi appearing before ED today?",
    link: "#",
  },
  {
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523947-microsoft-teams-out.png",
    news: "Microsoft Teams outage triggers meme fest on Twitter, corporate workers call it ‘the best day’",
    link: "#",
  },
  {
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523948-sanjay-duttpr-handout-1.jpg",
    news: "Shamshera director Karan Malhotra recalls Sanjay Dutt battling cancer throughout film's shoot",
    link: "#",
  },
  {
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523911-rishi-sunak-liz-truss.jpg",
    news: "Rishi Sunak scripts history, to face Liz Truss in final leg of British PM contest",
    link: "#",
  },
  {
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523936-sourav-ganguly-jay-shah.jpg",
    news: "DNA Explainer: What is the BCCI constitution amendment plea? How it affects Sourav Ganguly, Jay Shah?",
    link: "#",
  },
];
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

let popularStories = [
  {
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/20/2523771-untitled-design-2022-07-13t193451.521.jpg",
    news: "CISCE ISC Class 12 Result 2022: Marking scheme, how to download here",
    link: "#",
  },
  {
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2524088-untitled-design-51.jpg",
    news: "CUSAT Result 2022 released at admissions.cusat.ac.in: Check important details here",
    link: "#",
  },
  {
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2524104-untitled-design-2022-07-17t145605.612.jpg",
    news: "Karnataka CET Result 2022 to be out soon: Website, how to check here",
    link: "#",
  },
  {
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/20/2523688-ayan-mukerji-kesariya-songfile-photos-1.jpg",
    news: "Brahmastra: Ayan Mukerji defends use of 'love storiya' in Kesariya song, says 'didn't find it like elaichi in biryani'",
    link: "#",
  },
  {
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523941-medicines.jpg",
    news: "Centre planning to cut prices of critical medicines for diabetes, cardiovascular and kidney diseases: Report",
    link: "#",
  },
];

popularStories.forEach(function (elem) {
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
  document.querySelector("#popular-stories").append(links);
});

// JS FOR MOST VIEWED SECTION

let mostViewed = [
  {
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/07/08/2520707-shreya-fi-1.jpg",
    news: "The Family Man actress Shreya ...",
    link: "#",
  },
  {
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/05/23/1942850-team-india.jpg",
    news: "Sanju Samson to Rahul Tripathi...",
    link: "#",
  },
  {
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/05/27/2007952-fotojet-2022-05-27t122144.022.jpg",
    news: "6 times Janhvi Kapoor handled ...",
    link: "#",
  },
  {
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/06/17/2359221-sara-ali-khan.jpg",
    news: "Sara Ali Khan looks sizzling h...",
    link: "#",
  },
  {
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/05/23/1942596-gyanvapi-mosque9.jpg",
    news: "Rare photo of Gyanvapi complex...",
    link: "#",
  },
];

mostViewed.forEach(function (elem) {
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
  document.querySelector("#grid-most-viewed").append(links);
});

// JS FOR SPEED READ SECTION

let speedReads = [
  {
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/22/2524248-untitled-design-2022-07-03t124955.376.jpg",
    news: "CBSE Class 10 Term 2 Result 2022 to be out today at cbse.nic.in by 2 pm: See how to check 10th board result",
    link: "#",
  },
  {
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/22/2524247-cbse-results-2022.jpg",
    news: "CBSE 12th Result 2022 DECLARED: 1.34 lakh students score above 90 percent, 92.7 percent clear the exam",
    link: "#",
  },
  {
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/22/2524245-resultss-1.jpg",
    news: "CBSE Result 2022 Class 12th DECLARED: Get your CBSE 12th term 2 result here - Direct link",
    link: "#",
  },
  {
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/22/2524240-cbse-1.jpg",
    news: "CBSE Class 12 Term 2 Results 2022 declared: Steps to check CBSE Class 12 results via SMS",
    link: "#",
  },
];

speedReads.forEach(function (elem) {
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
  document.querySelector("#speed-reads").append(links);
});

// JS FOR DNA ORIGINALS
let dnaOriginals = [
  {
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/16/2522881-racism.jpg",
    news: "DNA Exclusive: Brad Hogg talks about racism in cricket, says 'anyone who's racist is not that intelligent",
    link: "#",
  },
  {
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/05/2519945-soren-shah.jpg",
    news: "DNA Exclusive: Another Maharashtra in offing? Soren-Shah meeting catches eyeballs in Jharkhand",
    link: "#",
  },
  {
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/13/2232844-launch-of-the-trailer-of-bandon-mein-tha-dum.jpg",
    news: "Bandon Mein Tha Dum: The IND vs AUS Test series was fought with blood, brains and brawn, says producer Sudip Tewari",
    link: "#",
  },
  {
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/04/13/1451620-jasprit-bumrah.jpg",
    news: "'We keep on fighting,' says Jasprit Bumrah on MI's chances of winning IPL 2022 | Exclusive",
    link: "#",
  },
  {
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/01/02/1012756-2.png",
    news: "DNA Exclusive: Harbhajan Singh claims MS Dhoni, BCCI forced him out of Team India",
    link: "#",
  },
];

dnaOriginals.forEach(function (elem) {
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
  document.querySelector("#dna-originals").append(links);
});


