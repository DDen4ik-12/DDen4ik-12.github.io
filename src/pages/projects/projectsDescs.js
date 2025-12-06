import scriptIcon from "/assets/script.svg";

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
];
const otherProjects = [
  {
    name: "Scratch Follow Viewports Fix",
    desc: 'Скрипт для вебсайта Scratch, возвращающий прежнее отображение Скретчеров в разделах "Мои подписчики" и "Подписан(а) на" на странице вашего профиля',
    link: "https://raw.githubusercontent.com/DDen4ik-12/data-files/refs/heads/main/scratchFollowViewportsFix.user.js",
    download: "scratchFollowViewportsFix.user.js",
    img: scriptIcon,
  },
  {
    name: "Stage Size Changer",
    desc: "Скрипт для вебсайта Scratch, позволяющий изменять размер сцены.",
    link: "https://github.com/DDen4ik-12/Stage-Size-Changer/releases/latest",
    img: scriptIcon,
  },
];

export { scratchProjects, otherProjects };