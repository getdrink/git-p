const movies = [
  {
    rank: 1,
    title: "肖申克的救赎",
    originalTitle: "The Shawshank Redemption",
    year: "1994",
    country: "美国",
    genres: ["犯罪", "剧情"],
    rating: "9.7",
    actors: ["蒂姆·罗宾斯", "摩根·弗里曼", "鲍勃·冈顿", "威廉姆·赛德勒"],
    description:
      "银行家安迪被错判入狱，在漫长而压抑的牢墙内保持清醒、尊严与耐心。他与瑞德的友谊让希望不再是空话，也让自由成为一种真正穿过黑暗的力量。",
    cover: "assets/covers/01-shawshank.png",
  },
  {
    rank: 2,
    title: "霸王别姬",
    originalTitle: "Farewell My Concubine",
    year: "1993",
    country: "中国大陆 / 中国香港",
    genres: ["剧情", "爱情", "历史"],
    rating: "9.6",
    actors: ["张国荣", "张丰毅", "巩俐", "葛优"],
    description:
      "程蝶衣与段小楼从戏班少年一路走入大时代，舞台上的虞姬与霸王也映照着他们无法割舍的人生命运。影片把个人执念、艺术荣光与历史风暴揉成一声悠长叹息。",
    cover: "assets/covers/02-farewell-my-concubine.png",
  },
  {
    rank: 3,
    title: "泰坦尼克号",
    originalTitle: "Titanic",
    year: "1997",
    country: "美国",
    genres: ["剧情", "爱情", "灾难"],
    rating: "9.5",
    actors: ["莱昂纳多·迪卡普里奥", "凯特·温斯莱特", "比利·赞恩", "凯西·贝茨"],
    description:
      "一艘被称为永不沉没的巨轮驶向大西洋深处，杰克与露丝在阶层与命运的缝隙中相遇。宏大的灾难叙事下，爱情成为最柔软也最难忘的回声。",
    cover: "assets/covers/03-titanic.png",
  },
  {
    rank: 4,
    title: "阿甘正传",
    originalTitle: "Forrest Gump",
    year: "1994",
    country: "美国",
    genres: ["剧情", "爱情"],
    rating: "9.5",
    actors: ["汤姆·汉克斯", "罗宾·怀特", "加里·辛尼斯", "莎莉·菲尔德"],
    description:
      "阿甘以质朴和坚持穿过美国数十年的历史浪潮，他并不总能理解世界，却总能诚实地奔跑、爱人与告别。这是一部关于善意、命运和时间的温柔寓言。",
    cover: "assets/covers/04-forrest-gump.png",
  },
  {
    rank: 5,
    title: "千与千寻",
    originalTitle: "千と千尋の神隠し",
    year: "2001",
    country: "日本",
    genres: ["剧情", "动画", "奇幻"],
    rating: "9.4",
    actors: ["柊瑠美", "入野自由", "夏木真理", "神木隆之介"],
    description:
      "误入神灵世界的千寻被迫学会工作、记忆与勇敢。奇异的汤屋、无脸男与白龙构成成长旅程的入口，也让她在陌生世界中找回自己的名字。",
    cover: "assets/covers/05-spirited-away.png",
  },
  {
    rank: 6,
    title: "美丽人生",
    originalTitle: "La vita è bella",
    year: "1997",
    country: "意大利",
    genres: ["剧情", "喜剧", "爱情", "战争"],
    rating: "9.5",
    actors: ["罗伯托·贝尼尼", "尼可莱塔·布拉斯基", "乔治·坎塔里尼"],
    description:
      "盖多用幽默和想象守护儿子，在残酷现实中编织出一场名为游戏的善意谎言。影片笑中带泪，把父爱拍成黑暗里最明亮的童话。",
    cover: "assets/covers/06-life-is-beautiful.png",
  },
  {
    rank: 7,
    title: "星际穿越",
    originalTitle: "Interstellar",
    year: "2014",
    country: "美国 / 英国 / 加拿大",
    genres: ["剧情", "科幻", "冒险"],
    rating: "9.4",
    actors: ["马修·麦康纳", "安妮·海瑟薇", "杰西卡·查斯坦", "迈克尔·凯恩"],
    description:
      "地球走向枯竭，一队宇航员穿过虫洞寻找人类新的可能。宇宙尺度的壮阔旅程，最终仍落回亲情、时间与爱的牵引。",
    cover: "assets/covers/07-interstellar.png",
  },
  {
    rank: 8,
    title: "这个杀手不太冷",
    originalTitle: "Léon",
    year: "1994",
    country: "法国 / 美国",
    genres: ["剧情", "动作", "犯罪"],
    rating: "9.4",
    actors: ["让·雷诺", "娜塔莉·波特曼", "加里·奥德曼", "丹尼·爱罗"],
    description:
      "孤独杀手里昂与失去家人的玛蒂达意外相依，冷硬的城市边缘生出笨拙而危险的温情。动作外壳之下，是两个孤独灵魂短暂互相照亮的故事。",
    cover: "assets/covers/08-leon.png",
  },
  {
    rank: 9,
    title: "盗梦空间",
    originalTitle: "Inception",
    year: "2010",
    country: "美国 / 英国",
    genres: ["剧情", "科幻", "悬疑", "冒险"],
    rating: "9.4",
    actors: ["莱昂纳多·迪卡普里奥", "约瑟夫·高登-莱维特", "玛丽昂·歌迪亚", "汤姆·哈迪"],
    description:
      "造梦团队潜入意识深处，试图在层层梦境中植入一个念头。影片把心理迷宫、动作奇观与情感执念折叠在一起，让真实本身变得摇晃。",
    cover: "assets/covers/09-inception.png",
  },
  {
    rank: 10,
    title: "楚门的世界",
    originalTitle: "The Truman Show",
    year: "1998",
    country: "美国",
    genres: ["剧情", "科幻"],
    rating: "9.4",
    actors: ["金·凯瑞", "劳拉·琳妮", "艾德·哈里斯", "诺亚·艾默里奇"],
    description:
      "楚门生活在一座被精心搭建的世界里，他的日常被镜头直播给全球观众。当裂缝不断出现，他开始追问自由、真实与自我选择的边界。",
    cover: "assets/covers/10-truman-show.png",
  },
];

const grid = document.querySelector("#movieGrid");
const dialog = document.querySelector("#movieDialog");
const closeDialogButton = document.querySelector("#closeDialog");

const dialogFields = {
  cover: document.querySelector("#dialogCover"),
  rank: document.querySelector("#dialogRank"),
  title: document.querySelector("#dialogTitle"),
  original: document.querySelector("#dialogOriginal"),
  year: document.querySelector("#dialogYear"),
  country: document.querySelector("#dialogCountry"),
  genres: document.querySelector("#dialogGenres"),
  rating: document.querySelector("#dialogRating"),
  actors: document.querySelector("#dialogActors"),
  description: document.querySelector("#dialogDescription"),
};

function renderMovies() {
  grid.innerHTML = movies
    .map(
      (movie) => `
        <button class="movie-card" type="button" data-rank="${movie.rank}" aria-label="查看《${movie.title}》详情">
          <div class="poster">
            <img src="${movie.cover}" alt="${movie.title}原创宣传封面" loading="lazy">
          </div>
          <div class="card-copy">
            <span class="rank">No.${movie.rank}</span>
            <h2 class="card-title">${movie.title}</h2>
            <p class="card-meta">${movie.year} · ${movie.genres.join(" / ")} · ${movie.rating}</p>
          </div>
        </button>
      `
    )
    .join("");
}

function openMovie(movie) {
  dialogFields.cover.src = movie.cover;
  dialogFields.cover.alt = `${movie.title}原创宣传封面`;
  dialogFields.rank.textContent = `豆瓣 Top250 No.${movie.rank}`;
  dialogFields.title.textContent = movie.title;
  dialogFields.original.textContent = movie.originalTitle;
  dialogFields.year.textContent = movie.year;
  dialogFields.country.textContent = movie.country;
  dialogFields.genres.textContent = movie.genres.join(" / ");
  dialogFields.rating.textContent = movie.rating;
  dialogFields.actors.innerHTML = movie.actors.map((actor) => `<li>${actor}</li>`).join("");
  dialogFields.description.textContent = movie.description;
  dialog.showModal();
}

grid.addEventListener("click", (event) => {
  const card = event.target.closest(".movie-card");

  if (!card) {
    return;
  }

  const movie = movies.find((item) => item.rank === Number(card.dataset.rank));
  openMovie(movie);
});

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});

closeDialogButton.addEventListener("click", () => dialog.close());

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && dialog.open) {
    dialog.close();
  }
});

renderMovies();
