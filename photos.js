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
      "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/23/2524482-fotojet-2022-07-23t112635.671-1.jpg",
    news: "Streaming This Week: The Gray Man, JugJugg Jeeyo to Ghar Waapsi, OTT releases to watch",
    link: "#",
  },
  {
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/22/2524400-horror-fi.jpg",
    news: "Scream, Men, Crimes Of The Future, The Black Phone: Best horror movie of 2022 so far",
    link: "#",
  },
  {
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/22/2524269-ind-vs-wi.jpg",
    news: "With KL Rahul testing Covid positive and Rohit Sharma rested, who will open ODI with Shikhar Dhawan?",
    link: "#",
  },
  {
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/22/2524228-monsoon-in-india.png",
    news: "Monsoon in India: Tips to protect your smartphones, earbuds and other gadgets during rainy season",
    link: "#",
  },
  {
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/22/2524224-ranveer-singh-milind-somanfile-photos-1.jpg",
    news: "Ranveer Singh, Milind Soman, Pooja Bedi, Aamir Khan: Indian celebrities who went naked in front of camera",
    link: "#",
  },
  {
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/21/2524078-untitled-design-2022-07-21t175834.763.jpg",
    news: "Draupadi Murmu: 5 firsts achieved by the new Indian President",
    link: "#",
  },
  {
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/21/2523994-hollywood-actors.jpg",
    news: "Mike Tyson, Slyvester Stallone, Will Smith: International stars who featured in Bollywood movies",
    link: "#",
  },
  {
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/21/2523923-the-gray-man-1.jpg",
    news: "The Gray Man: Vicky Kaushal, Jacqueline Fernandez, Aanand L Rai attend Dhanush's movie premiere",
    link: "#",
  },
  {
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/20/2523871-fotojet-2022-07-20t215825.725-1.jpg",
    news: "Viral Photos of the Day: Janhvi Kapoor, Disha Patani, Tara Sutaria give fashion goals",
    link: "#",
  },
  {
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/20/2523879-untitled-design-2022-07-20t215908.620.jpg",
    news: "DNA Explainer: Is 'Work From Home' the future? Know about changing employee mentality",
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

// breaking news section in header section

let breakingNews = [
  "NCR weather update: Rain, thundershowers in Delhi, adjacent cities over the weekend, check complete IMD forecast",
  "DNA Explainer: What is Population Control Bill, two-child policy and its Constitutional roots?",
  "Taliban shoots young man in Andarab district, publicly displays dead body",
  "NEET UG 2022: Smartphones to microchip, NTA finds multiple cases of unfair means used by aspirants",
  "Ranveer Singh nude photoshoot: Mimi Chakraborty questions gender equality, says 'wonder if...'",
];

let leftBtn = document.querySelector("#left-btn");
let rightBtn = document.querySelector("#right-btn");
let crauser = document.querySelector("#crauser");

let newsState = 0;
rightBtn.addEventListener("click", function () {
  newsState++;
  if (newsState === breakingNews.length) {
    newsState = 0;
  }
  crauser.innerText = breakingNews[newsState];
});
leftBtn.addEventListener("click", function () {
  newsState--;
  if (newsState < 0) {
    newsState = breakingNews.length - 1;
  }
  crauser.innerText = breakingNews[newsState];
});
