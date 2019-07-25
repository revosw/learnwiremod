# learnwiremod
A website for learning Wiremod

# Roadmap
These features are what I am trying to implement into the website:

## VuePress
Evan You (creator of [Vue.js](https://vuejs.org/) and [VuePress](https://vuepress.vuejs.org/)) [explains in detail what VuePress is for](https://vuepress.vuejs.org/guide/#how-it-works), but these are the key points that makes it particularilty interesting for the project:

### It's made for content driven sites, like documentation
It's built for markdown files, but you can even write the pages using Vue code inside the markdown files. This enables you to:
- create pages quickly, because you don't _just_ write HTML, but rather markdown and occasionally a few Vue components.
- Not worry as much about design specifications of Learn Wiremod, as you don't need to know which classes should go where.

### The pages load as a static site at first, but transform into an SPA [Single-page application](https://medium.com/@NeotericEU/single-page-application-vs-multiple-page-application-2591588efe58) once loaded
This is one of the coolest features of VuePress, because generally you need some sort of backend infrastructure (like Node.js, Kerberos, Apache and other web servers) in order to be able to serve the website as an SPA. This approach, however, makes it possible to serve Learn Wiremod as a static web site, while still reaping the benefits of seamless transition between pages.

## Syntax highlighting
Using [highlight.js](https://highlightjs.org/), you can create your own language ruleset and color scheme. There is already a ruleset and color scheme for Expression 2, but not yet for CPU/SPU/GPU.

## Quizzing the material
People should understand what they read. Quizzes help with that. Great stuff.

## Editor with intellisense?
I don't think this is required, but if other features get implemented, this might be considered.

## Illustrating concepts with a 3D library like Three.js
[Three.js](https://threejs.org/) is a 3D graphics library. Maybe I can use it in the tutorial to better show for instance:
- what is pitch, yaw and roll?
- What do the different hologram models look like?
