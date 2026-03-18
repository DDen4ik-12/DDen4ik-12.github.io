# My nickname
-d12-name-extend =
  {$type ->
   *[lclzd] Денчик{$add1}-12{$add2}
    [og] Den4ik{$add1}-12{$add2}
  }
-d12-name =
  {$type ->
   *[lclzd] {-d12-name-extend(add1: "", add2: "")}
    [og] {-d12-name-extend(type: "og", add1: "", add2: "")}
  }
d12-assign-name = {-d12-name-extend(add1: "а", add2: "")}

# Website name & title
website-name = Сайт {d12-assign-name}
website-title = {website-name} | {$pageName}

# Page names
page-index_name = Главная
page-projects_name = Проекты
page-404_name = Ошибка 404

# Projects
projects_stage-sc =
  .name = Stage Size Changer (StageSC)
  .desc = Юзерскрипт для вебсайта Scratch, позволяющий изменять размер сцены
projects_d12-bot =
  .name = Бот {d12-assign-name}
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
  .desc = Scratch реализация браузерных игр "Прыгун"
projects_sfv-fix =
  .name = Scratch Follow Viewports Fix
  .desc = Юзерскрипт для вебсайта Scratch, возвращающий прежнее отображение Скретчеров в разделах "Мои подписчики" и "Подписан(а) на" на странице вашего профиля

# "index" page content
page-index_nav-placeholder =
  .text = {page-index_name}
page-index_welcome-block_1 =
  <h1>Добро пожаловать!</h1>
  <div>Это вебсайт, принадлежащий чуваку под никнеймом {-d12-name()} (англ. - {-d12-name(type: "og")})</div>
  <div>Я разработчик нескольких юзерскриптов, небольших игр и проектов</div>
page-index_welcome-block_2 = Сейчас Вы находитесь на <indexPageLink>главной странице сайта</indexPageLink>
page-index_categories = Категории:
page-index_categories_button-dash =
  .text = Dash

# "projects" page content
page-projects_nav-placeholder =
  .text = {page-projects_name}
page-projects_main-projects = Основные проекты:
page-projects_scratch-projects = Рекомендуемые мои Scratch проекты:
page-projects_dash-extensions = Расширения для Dash:
page-projects_userscripts = Пользовательские скрипты (Юзерскрипты):
page-projects_other-projects = Остальные проекты:

# "404" page content
page-404_nav-placeholder =
  .text = {page-404_name}
page-404_error-block_1 =
  <h1>Вау, ошибка 404!</h1>
  <div>Здесь могла бы быть интересная страница, но {-d12-name()} не сделал её по данному URL</div>
page-404_error-block_2 = Так что, возвращайтесь на <indexPageLink>главную страницу сайта</indexPageLink>, либо...
page-404_clicker-button =
  .text =
    {$clicks ->
      [0] Нажмите на меня!
      [one] {$clicks} клик
      [few] {$clicks} клика
     *[other] {$clicks} кликов
    }

# Component: Navigation bar
navigation_logo-title =
  .title = {website-name}

# Component: Footer
footer_socials_scratch =
  .title = Я в Scratch
footer_socials_github =
  .title = Я в GitHub
footer_socials_telegram =
  .title = Мой ТГК
footer_socials_dash =
  .title = Я в Dash