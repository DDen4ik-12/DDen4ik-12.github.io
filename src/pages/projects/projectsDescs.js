import scriptIcon from "/assets/script.svg";
import dashLogo from "/assets/dashLogoMini.svg";
import den4ik12BotIcon from "/assets/den4ik12Bot.svg";
import wheelScrollIcon from "/assets/dashExtensionsIcons/wheelScroll.svg";
import pathfindingIcon from "/assets/dashExtensionsIcons/pathfinding.svg";
import mapsIcon from "/assets/dashExtensionsIcons/maps.svg";

const mainProjects = [
  {
    descId: "projects_dash",
    link: "https://github.com/DashBlocks",
    buttonId: "button_learn-more",
    img: dashLogo,
    bgColor: "#ff8f4d",
  },
  {
    descId: "projects_stage-sc",
    link: "https://github.com/DDen4ik-12/Stage-Size-Changer#readme",
    buttonId: "button_learn-more",
    img: scriptIcon,
    bgColor: "#8c9abf",
  },
  {
    descId: "projects_d12-bot",
    link: "https://t.me/d_den4ik_12_bot",
    buttonId: "button_open",
    img: den4ik12BotIcon,
    bgColor: "#9077ff",
  },
];
const scratchProjects = [
  {
    descId: "projects_nick-survive",
    id: 724818155,
    bgColor: "#ff87ec",
  },
  {
    descId: "projects_notebook-clicker",
    id: 708792475,
    bgColor: "#7cdaff",
  },
  {
    descId: "projects_cookie-blast",
    id: 874279281,
    bgColor: "#ffa666",
  },
  {
    descId: "projects_jumper-remake",
    id: 1181696920,
    bgColor: "#ff4c88",
  },
];
const dashExtensions = [
  {
    descId: "projects_wheel-scroll",
    extLink: "Den4ik-12/WheelScroll.js",
    img: wheelScrollIcon,
    bgColor: "#e74c3c",
  },
  {
    descId: "projects_pathfinding",
    extLink: "Den4ik-12/Pathfinding.js",
    img: pathfindingIcon,
    bgColor: "#ca9000",
  },
  {
    descId: "projects_maps",
    extLink: "Den4ik-12/Maps.js",
    img: mapsIcon,
    bgColor: "#e73ca0",
  },
];
const userscripts = [
  mainProjects.find((project) => project.descId == "projects_stage-sc"),
  {
    descId: "projects_sfv-fix",
    link: "https://github.com/DDen4ik-12/data-files#scratch-follow-viewports-fix",
    buttonId: "button_learn-more",
    img: scriptIcon,
  },
  {
    descId: "projects_some-gh-utils",
    link: "https://github.com/DDen4ik-12/data-files#some-github-utils",
    buttonId: "button_learn-more",
    img: scriptIcon,
  },
];
const otherProjects = [];

export {
  mainProjects,
  scratchProjects,
  dashExtensions,
  userscripts,
  otherProjects,
};