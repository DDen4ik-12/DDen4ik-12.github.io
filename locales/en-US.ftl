## My nickname

-d12-name-extend = Den4ik{$add1}-12{$add2}
-d12-name = {-d12-name-extend(add1: "", add2: "")}
-d12-assign-name = {-d12-name-extend(add1: "", add2: "'s")}

## Website name & title

website-name = {-d12-assign-name} Site
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

page-index_name = General
page-projects_name = Projects
page-404_name = Error 404

## Button titles

button_install = Install
button_learn-more = Learn more
button_try-out = Try out
button_play = Play
button_open = Open

## Projects

projects_dash =
  .name = {-dash-name(form: "full")} ({-dash-name()})
  .desc = Mod of TurboWarp, that adds a JSON category, console mode, new blocks, extensions, customization and other features
projects_stage-sc =
  .name = Stage Size Changer (StageSC)
  .desc = A userscript for the {-scratch-name()} website that allows you to resize the stage
projects_d12-bot =
  .name = {-d12-assign-name} Bot
  .desc = Utility and entertainment Telegram bot (Not hosted 24/7)
projects_nick-survive =
  .name = Nick Survive
  .desc = Game about a boy, that survives in small city
projects_notebook-clicker =
  .name = Clicker in the notebook
  .desc = A clicker with a notebook drawing
projects_cookie-blast =
  .name = Cookie Blast!
  .desc = A shooter with a blaster and dangerous cookies
projects_jumper-remake =
  .name = Jumper Remake
  .desc = {-scratch-name()} implementation of browser "Jumper" games
projects_wheel-scroll =
  .name = Wheel Scroll
  .desc = Blocks for detecting mouse wheel scrolling
projects_pathfinding =
  .name = Pathfinding
  .desc = Find paths from one position to another, avoiding obstacles
projects_maps =
  .name = Maps
  .desc = Blocks for working with Map, which is more powerful than Object
projects_sfv-fix =
  .name = {-scratch-name()} Follow Viewports Fix
  .desc = A userscript for the {-scratch-name()} website that returns the previous display of Scratchers in the "Followers" and "Following" sections on your profile page
projects_some-gh-utils =
  .name = Some {-github-name()} Utils
  .desc = A userscript for the {-github-name()} website that add some utils

## "index" page content

page-index_start-block_1 = Hello, I'm <nameGradient>{-d12-name()}</nameGradient>!
page-index_start-block_2 =
  <h3>I'm a developer of some userscripts, small games and projects</h3>
  <h3>This website is a small corner where my personal and collaborative projects are collected, and it serves as a unifying link for all the places where I am</h3>
page-index_sections_projects = {page-projects_name}
page-index_sections_projects_more =
  .text = More projects
page-index_sections_skills = My skills includes
page-index_sections_future-skills = In the plan/process of learning
page-index_sections_github-stats = My {-github-name()} stats

## "projects" page content

page-projects_start-block_1 = {page-projects_name}
page-projects_start-block_2 = <h3>Here collected my personal and collaborative projects: {-dash-name()}, userscripts, extensions, small games and bot</h3>
page-projects_main-projects = Main projects
page-projects_scratch-projects = Recomended my {-scratch-name()} projects
page-projects_dash-extensions = Extensions for {-dash-name()}
page-projects_userscripts = Userscripts
page-projects_other-projects = Other projects

## "404" page content

page-404_start-block_1 = Uh oh, an error 404!
page-404_start-block_2 = <h3>There could have been an interesting page here, but {-d12-name()} didn't create it at this URL</h3>
page-404_start-block_3 = So, go back to the <indexPageLink>general page</indexPageLink> of the site, or...
page-404_clicker-button =
  .text =
    {$clicks ->
      [0] Click at me!
      [one] {$clicks} click
     *[other] {$clicks} clicks
    }

## Component: Navigation bar

navigation_logo-title =
  .title = {website-name}

## Component: Footer

footer_source-code = Source code
footer_socials_scratch = I'm in {-scratch-name()}
footer_socials_github =
  .title = I'm in {-github-name()}
# In languages other than Russian, the Telegram channel should be marked as Russian
footer_socials_telegram =
  .title = My Telegram channel (RU)
footer_socials_dash =
  .title = I'm in {-dash-name()}