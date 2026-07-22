const params = new URLSearchParams(location.search);
const game = params.get("game");

const links = {
  fnaf1: "https://YOUR-FNAF1-LINK/",
  fnaf2: "https://YOUR-FNAF2-LINK/",
  fnaf3: "https://YOUR-FNAF3-LINK/",
  fnaf4: "https://YOUR-FNAF4-LINK/",
  fnaf5: "https://YOUR-FNAF5-LINK/"
};

document.write(`<iframe src="${links[game]}" class="frame"></iframe>`);
