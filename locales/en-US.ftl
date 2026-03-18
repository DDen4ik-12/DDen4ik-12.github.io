# My nickname
-d12-name-extend =
  {$type ->
   *[lclzd] Den4ik{$add1}-12{$add2}
    [og] Den4ik{$add1}-12{$add2}
  }
-d12-name =
  {$type ->
   *[lclzd] {-d12-name-extend(add1: "", add2: "")}
    [og] {-d12-name-extend(type: "og", add1: "", add2: "")}
  }
d12-assign-name = {-d12-name-extend(add1: "", add2: "'s")}

# Website name & title
website-name = {d12-assign-name} Site
website-title = {website-name} | {$pageName}

# Page names
page-index_name = General
page-projects_name = Projects
page-404_name = Error 404

# Projects
projects_dash =
  .name = DashBlocks (Dash)
  .desc = Mod of TurboWarp, that adds a JSON category, console mode, new blocks, extensions, customization and other features
projects_stage-sc =
  .name = Stage Size Changer (StageSC)
  .desc = A userscript for the Scratch website that allows you to resize the stage
projects_d12-bot =
  .name = {d12-assign-name} Bot
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
  .desc = Scratch implementation of browser "Jumper" games
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
  .name = Scratch Follow Viewports Fix
  .desc = A userscript for the Scratch website that returns the previous display of Scratchers in the "Followers" and "Following" sections on your profile page

# "index" page content
page-index_nav-placeholder =
  .text = {page-index_name}
page-index_welcome-block_1 =
  <h1>Welcome!</h1>
  <div>This is a website owned by a dude under the nickname {-d12-name()}</div>
  <div>I'm a developer of some userscripts, small games and projects</div>
page-index_welcome-block_2 = You're currently on the <indexPageLink>general page</indexPageLink> of the site
page-index_categories = Categories:
page-index_categories_button-dash =
  .text = Dash

# "projects" page content
page-projects_nav-placeholder =
  .text = {page-projects_name}
page-projects_main-projects = Main projects:
page-projects_scratch-projects = Recomended my Scratch projects:
page-projects_dash-extensions = Extensions for Dash:
page-projects_userscripts = Userscripts:
page-projects_other-projects = Other projects:

# "404" page content
page-404_nav-placeholder =
  .text = {page-404_name}
page-404_error-block_1 =
  <h1>Woah, an error 404!</h1>
  <div>There could have been an interesting page here, but {-d12-name()} didn't create it at this URL</div>
page-404_error-block_2 = So, go back to the <indexPageLink>general page</indexPageLink> of the site, or...
page-404_clicker-button =
  .text =
    {$clicks ->
      [0] Click at me!
      [one] {$clicks} click
     *[other] {$clicks} clicks
    }

# Component: Navigation bar
navigation_logo-title =
  .title = {website-name}

# Component: Footer
footer_socials_scratch =
  .title = I'm in Scratch
footer_socials_github =
  .title = I'm in GitHub
footer_socials_telegram =
  .title = My Telegram channel (RU)
footer_socials_dash =
  .title = I'm in Dash