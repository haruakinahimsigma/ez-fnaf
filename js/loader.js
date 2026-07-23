const params = new URLSearchParams(location.search);
const game = params.get("game");

const links = {
  fnaf1: "https://fnaf1-taupe.vercel.app",
  fnaf2: "https://sussygamedeveloper.github.io/FNAF2/",
  fnaf3: "https://sussygamedeveloper.github.io/fnaf3/",
  fnaf4: "https://fnaf-4-5oim.vercel.app",
  fnaf5: "https://fnafsl-umber.vercel.app"
};

document.write(`<iframe src="${links[game]}" class="frame"></iframe>`);
