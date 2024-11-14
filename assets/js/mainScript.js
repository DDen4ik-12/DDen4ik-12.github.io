const navigation = document.querySelector("div.navigation");
const navigationLogo = document.querySelector("a.navigation_logo");

setInterval(() => {
  if (window.pageYOffset < 225) {
    if (!navigation.classList.contains("start")) {
      navigation.classList.add("start");
    }
  } else {
    if (navigation.classList.contains("start")) {
      navigation.classList.remove("start");
    }
  }
}, 10);

const downloadUrl = (url, file) => {
  const link = document.createElement("a");
  link.href = url;
  link.download = file;
  document.body.appendChild(link);
  link.click();
  link.remove();
};
switch (new URLSearchParams(location.search).get("giftcode")) {
  case "gift":
    downloadUrl("/files/пин конца (1).sprite3", "пин.sprite3");
}
