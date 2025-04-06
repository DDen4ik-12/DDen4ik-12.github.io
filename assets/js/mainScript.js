const navigation = document.querySelector("div.navigation");
const navigationPictureBackground = document.querySelector("div.navigation > div > div");
const metaThemeColor = document.querySelector('meta[name="theme-color"]');

const hsl2Rgb = (h, s, l) => {
  let r, g, b;
  if (s === 0) {
    r = g = b = l;
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2Rgb(p, q, h + 1/3);
    g = hue2Rgb(p, q, h);
    b = hue2Rgb(p, q, h - 1/3);
  }
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}
const hue2Rgb = (p, q, t) => {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1/6) return p + (q - p) * 6 * t;
  if (t < 1/2) return q;
  if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
  return p;
}

if (typeof ((new URL(location.href)).searchParams.get("randCol") ?? undefined) != "undefined") {
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
  if (location.pathname == "/projects/") {
    Object.assign(
      randomColorMode.looksMain,
      ((x) => {
        return {red: x[0], green: x[1], blue: x[2]};
      })(hsl2Rgb(randomColorMode.looksMain.hue, randomColorMode.looksMain.saturation / 100, 0.5))
    )
    navigationPictureBackground.style.filter = `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'><filter id='filter' color-interpolation-filters='sRGB'><feColorMatrix type='matrix' values='0.667 0.667 0.666 0 ${
      (randomColorMode.looksMain.red / 255) - 1
    } 0.667 0.667 0.666 0 ${(randomColorMode.looksMain.green / 255) - 1} 0.667 0.667 0.666 0 ${(randomColorMode.looksMain.blue / 255) - 1} 0 0 0 1 0'></feColorMatrix></filter></svg>#filter")`
  }

  document.querySelectorAll("a").forEach((x) => {
    const href = new URL(x.href);
    if (href.host == "dden4ik-12.github.io") {
      href.searchParams.append("randCol", "");
      x.href = href;
    }
  });
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
