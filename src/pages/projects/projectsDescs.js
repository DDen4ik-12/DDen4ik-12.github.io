import scriptIcon from "/assets/script.svg";
import dashLogo from "/assets/dashLogoMini.svg";
import den4ik12BotIcon from "/assets/den4ik12Bot.svg";

const mainProjects = [
  {
    descId: "projects_dash",
    link: "https://github.com/DashBlocks",
    img: dashLogo,
    bgColor: "#ff8f4d",
    borderColor: "#b96838",
  },
  {
    descId: "projects_stage-sc",
    link: "https://github.com/DDen4ik-12/Stage-Size-Changer#readme",
    img: scriptIcon,
  },
  {
    descId: "projects_d12-bot",
    link: "https://t.me/d_den4ik_12_bot",
    img: den4ik12BotIcon,
    bgColor: "#9077ff",
    borderColor: "#5e4ea5",
  },
];
const scratchProjects = [
  {
    descId: "projects_nick-survive",
    id: 724818155,
    bgColor: "#ff87ec",
    borderColor: "#c166b2",
  },
  {
    descId: "projects_notebook-clicker",
    id: 708792475,
    bgColor: "#7cdaff",
    borderColor: "#61a6c1",
  },
  {
    descId: "projects_cookie-blast",
    id: 874279281,
    bgColor: "#ffa666",
    borderColor: "#bf6f36",
  },
  {
    descId: "projects_jumper-remake",
    id: 1181696920,
    bgColor: "#ff4c88",
    borderColor: "#af345d",
  },
];
const dashExtensions = [
  {
    descId: "projects_wheel-scroll",
    extLink: "Den4ik-12/WheelScroll.js",
    img: scriptIcon,
    bgColor: "#e74c3c",
    borderColor: "#b03a2e",
  },
  {
    descId: "projects_pathfinding",
    extLink: "Den4ik-12/Pathfinding.js",
    img: scriptIcon,
    bgColor: "#ca9000",
    borderColor: "#986c00",
  },
  {
    descId: "projects_maps",
    extLink: "Den4ik-12/Maps.js",
    img: scriptIcon,
    bgColor: "#e73ca0",
    borderColor: "#b22e7b",
  },
];
const userscripts = [
  mainProjects.find((project) => project.descId == "projects_stage-sc"),
  {
    descId: "projects_sfv-fix",
    link: "https://github.com/DDen4ik-12/data-files#scratch-follow-viewports-fix",
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