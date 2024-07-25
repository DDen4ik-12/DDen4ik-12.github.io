const trueSin = (deg) => {
  if (
    deg % 360 == 0 ||
    deg % 360 == 180
  ) {
    return 0;
  } else if (
    deg % 360 == 90 ||
    deg % 360 == 270
  ) {
    return 1;
  } else {
    return Math.sin(deg * Math.PI / 180);
  }
};
const trueCos = (deg) => {
  if (
    deg % 360 == 0 ||
    deg % 360 == 180
  ) {
    return 1;
  } else if (
    deg % 360 == 90 ||
    deg % 360 == 270
  ) {
    return 0;
  } else {
    return Math.cos(deg * Math.PI / 180);
  }
};
const navigation = document.querySelector("div.navigation");
const navigationLogo = document.querySelector("a.navigation_logo");
let i = 0

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
  navigationLogo.style.setProperty("--x", trueSin(i * 1.2) * 10);
  navigationLogo.style.setProperty("--y", trueCos(i) * 10);
  navigationLogo.style.setProperty("--rotate", trueSin(i * 0.8) * 10);
  if (i + 1 == 1800) {
    i = 0;
  } else {
    i++;
  }
}, 10);
