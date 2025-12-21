import scriptIcon from "/assets/script.svg";
import den4ik12BotIcon from "/assets/den4ik12Bot.png";

const scratchProjects = [
  {
    name: "Выживание Ника",
    desc: "Игра про мальчика, выживающего в небольшом городке",
    id: 724818155,
    bgColor: "#ff87ec",
    borderColor: "#c166b2",
  },
  {
    name: "Кликер в тетради",
    desc: "Кликер с тетрадной рисовкой",
    id: 708792475,
    bgColor: "#7cdaff",
    borderColor: "#61a6c1",
  },
  {
    name: "Cookie Blast!",
    desc: "Шутер с бластером и опасными печеньками",
    id: 874279281,
    bgColor: "#ffa666",
    borderColor: "#bf6f36",
  },
  {
    name: "Jumper Remake",
    desc: "Игра, где нужно провести мяч к финишной платформе, вращая карту и острегаясь опасностей",
    id: 1181696920,
    bgColor: "#ff4c88",
    borderColor: "#af345d",
  },
];
const otherProjects = [
  {
    name: "Scratch Follow Viewports Fix",
    desc: 'Юзерскрипт для вебсайта Scratch, возвращающий прежнее отображение Скретчеров в разделах "Мои подписчики" и "Подписан(а) на" на странице вашего профиля',
    link: "https://raw.githubusercontent.com/DDen4ik-12/data-files/refs/heads/main/scratchFollowViewportsFix.user.js",
    download: "scratchFollowViewportsFix.user.js",
    img: scriptIcon,
  },
  {
    name: "Stage Size Changer",
    desc: "Юзерскрипт для вебсайта Scratch, позволяющий изменять размер сцены",
    link: "https://github.com/DDen4ik-12/Stage-Size-Changer/releases/latest",
    img: scriptIcon,
  },
  {
    name: "Den-12's Bot",
    desc: "Telegram-бот, созданный мной (В основном находится в неактиве, так как не хостится)",
    link: "https://t.me/d_den4ik_12_bot",
    img: den4ik12BotIcon,
    bgColor: "#9077ff",
    borderColor: "#5e4ea5",
  },
];

export { scratchProjects, otherProjects };