![README LOGO](_design/bk.png)

#  jumang potaru
- this a generic portfolio website using react.js
- [URL](https://jumang-potaru.dev)

# technologies

## SPA + SSG + Headless CMS + PWA + JamStack

- Framework => [Gatsby](https://https://www.gatsbyjs.com/)
- Main Language => [TypeScript](https://www.typescriptlang.org/)
- CSS => SCSS
- Server =>  [Google Firebase Hosting](https://firebase.google.com/)
- CMS =>  [microCMS](https://microcms.io/) 
- Library => [React.js](https://https://reactjs.org/)


# functions
## /pages
 
- introduction(/)     - about me, what i do or like

- projects(/projects) - what i did, like deployed webpages, some funny github repos

- info(/info)         - about this jumang-potaru site

- library(/lirary)    - some thoughts, computer or musical tips at jumang markdown previewer

## how it works

- Header
    - JUMANG POTARU logo to go main page quick
    - 3 buttons right(projects, about, library) to go each pages
    - fluffy motions each
- Footer
    - slimy box that click & dragable contains markdown contents

# how to develop locally
```
# clone
git clone <this html clone key>
# install dependancies
npm install
# serve with hot reload
gatsby develop 
```

# how to build locally
```
# build all tsx then put built file into /public
gatsby build
# serve /public
gatsby serve
```