const navigation = document.querySelector("div.navigation");
const metaThemeColor = document.querySelector('meta[name="theme-color"]');

if (typeof (new URL(location.href)).searchParams.get("randCol") != "undefined") {
  const randomColorMode = new Object();
  randomColorMode.looksMain = {
    hue: Math.floor(Math.random() * 360),
    saturation: Math.floor(Math.random() * 101),
  };
  randomColorMode.link = {hue: Math.floor(Math.random() * 360)};
  randomColorMode.style = document.createElement("style");
  randomColorMode.style.textContent =
    `html {
      --looks-main-20: hsl(${randomColorMode.looksMain.hue}deg ${randomColorMode.looksMain.saturation}% 20%);
      --looks-main-30: hsl(${randomColorMode.looksMain.hue}deg ${randomColorMode.looksMain.saturation}% 30%);
      --looks-main-40: hsl(${randomColorMode.looksMain.hue}deg ${randomColorMode.looksMain.saturation}% 40%);
      --looks-main-50: hsl(${randomColorMode.looksMain.hue}deg ${randomColorMode.looksMain.saturation}% 50%);
      --looks-main-60: hsl(${randomColorMode.looksMain.hue}deg ${randomColorMode.looksMain.saturation}% 60%);
      --looks-main-70: hsl(${randomColorMode.looksMain.hue}deg ${randomColorMode.looksMain.saturation}% 70%);
      --looks-main-80: hsl(${randomColorMode.looksMain.hue}deg ${randomColorMode.looksMain.saturation}% 80%);
      --looks-main-90: hsl(${randomColorMode.looksMain.hue}deg ${randomColorMode.looksMain.saturation}% 90%);
      --link-50: hsl(${randomColorMode.link.hue}deg 100% 50%);
      --link-90: hsl(${randomColorMode.link.hue}deg 100% 90%);
    }`;
  metaThemeColor.content = `hsl(${randomColorMode.looksMain.hue}deg ${randomColorMode.looksMain.saturation}% 50%)`;
  document.head.appendChild(randomColorMode.style);
}

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
