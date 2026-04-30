## My nickname

-d12-name-extend =
  {$locale ->
   *[current] Денчик{$add1}-12{$add2}
    [original] Den4ik{$add1}-12{$add2}
  }
-d12-name =
  {$locale ->
   *[current] {-d12-name-extend(add1: "", add2: "")}
    [original] {-d12-name-extend(locale: "original", add1: "", add2: "")}
  }
-d12-assign-name = {-d12-name-extend(add1: "а", add2: "")}

## Website name & title

website-name = Сайт {-d12-assign-name}
website-title = {website-name} | {$pageName}

## Names of some services

-scratch-name = Scratch
-github-name = GitHub
-dash-name =
  {$form ->
    [full] DashBlocks
   *[short] Dash
  }

## Page names

page-index_name = Главная
page-projects_name = Проекты
page-404_name = Ошибка 404

## Button titles

button_install = Установить
button_learn-more = Узнать больше
button_try-out = Попробуйте
button_play = Играть
button_open = Открыть

## Projects

projects_dash =
  .name = {-dash-name(form: "full")} ({-dash-name()})
  .desc = Мод на TurboWarp, добавляющий категорию JSON, консольный режим, новые блоки, расширения, кастомизацию и другие фичи
projects_stage-sc =
  .name = Stage Size Changer (StageSC)
  .desc = Юзерскрипт для вебсайта {-scratch-name()}, позволяющий изменять размер сцены
projects_d12-bot =
  .name = Бот {-d12-assign-name}
  .desc = Утилитно-развлекательный Telegram бот (Не хостится 24/7)
projects_nick-survive =
  .name = Выживание Ника
  .desc = Игра про мальчика, выживающего в небольшом городке
projects_notebook-clicker =
  .name = Кликер в тетради
  .desc = Кликер с тетрадной рисовкой
projects_cookie-blast =
  .name = Cookie Blast!
  .desc = Шутер с бластером и опасными печеньками
projects_jumper-remake =
  .name = Jumper Remake
  .desc = {-scratch-name()} реализация браузерных игр "Прыгун"
projects_wheel-scroll =
  .name = Wheel Scroll
  .desc = Блоки для детекции прокрутки колёсика мыши
projects_pathfinding =
  .name = Pathfinding
  .desc = Находите пути из одной позиции в другую, обходя препятствия
projects_maps =
  .name = Maps
  .desc = Блоки для работы с Map, который более мощный чем Объект
projects_sfv-fix =
  .name = {-scratch-name()} Follow Viewports Fix
  .desc = Юзерскрипт для вебсайта {-scratch-name()}, возвращающий прежнее отображение Скретчеров в разделах "Мои подписчики" и "Подписан(а) на" на странице вашего профиля
projects_some-gh-utils =
  .name = Some {-github-name()} Utils
  .desc = Юзерскрипт для вебсайта {-github-name()}, добавляющий несколько утилит

## "index" page content

page-index_start-block_1 = Привет, я <nameGradient>{-d12-name()}</nameGradient>! <ogName>(англ. - {-d12-name(locale: "original")})</ogName>
page-index_start-block_2 =
  <h3>Я разработчик нескольких юзерскриптов, небольших игр и проектов</h3>
  <h3>Этот вебсайт - небольшой уголок, где собраны мои личные и совместные проекты, и который является объединяющим звеном всех мест, где я есть</h3>
page-index_sections_projects = {page-projects_name}
page-index_sections_projects_more =
  .text = Больше проектов
page-index_sections_skills = Мои скиллы включают
page-index_sections_future-skills = В плане/процессе изучения
page-index_sections_github-stats = Моя {-github-name()} статистика

## "projects" page content

page-projects_start-block_1 = {page-projects_name}
page-projects_start-block_2 = <h3>Здесь собраны мои личные и совместные проекты: {-dash-name()}, юзерскрипты, расширения, небольшие игры и бот</h3>
page-projects_main-projects = Основные проекты
page-projects_scratch-projects = Рекомендуемые мои {-scratch-name()} проекты
page-projects_dash-extensions = Расширения для {-dash-name()}
page-projects_userscripts = Пользовательские скрипты (Юзерскрипты)
page-projects_other-projects = Остальные проекты

## "404" page content

page-404_start-block_1 = Ой ёй, ошибка 404!
page-404_start-block_2 = <h3>Здесь могла бы быть интересная страница, но {-d12-name()} не сделал её по данному URL</h3>
page-404_start-block_3 = Так что, возвращайтесь на <indexPageLink>главную страницу сайта</indexPageLink>, либо...
page-404_clicker-button =
  .text =
    {$clicks ->
      [0] Нажмите на меня!
      [one] {$clicks} клик
      [few] {$clicks} клика
     *[other] {$clicks} кликов
    }

## Component: Navigation bar

navigation_logo-title =
  .title = {website-name}

## Component: Footer

footer_source-code = Исходный код
footer_socials_scratch = Я в {-scratch-name()}
footer_socials_github =
  .title = Я в {-github-name()}
# In languages other than Russian, the Telegram channel should be marked as Russian
footer_socials_telegram =
  .title = Мой ТГК
footer_socials_dash =
  .title = Я в {-dash-name()}