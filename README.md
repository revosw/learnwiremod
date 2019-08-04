# learnwiremod
A website for learning Wiremod

# Roadmap
These features are what I am trying to implement into the website:

## Svelte
Rich Harris (creator of [Svelte](https://svelte.dev/) and [Sapper](https://sapper.svelte.dev/)) has an outstanding [talk about Svelte](https://www.youtube.com/watch?v=AdNJ3fydeao), and these are the key points that makes it particularilty interesting for the project:

### It compiles all the templates and content into prerendered HTML
Instead of Vue, React and Angular's way of being a JavaScript library you send to the client, Svelte compiles all the source files into just regular HTML and JavaScript, leaving Svelte behind as just a build tool. This gives developers and users the best of both worlds:
#### Pro for developers
- Powerful features like templating, built in libraries for animation, transition etc.
- Not worry as much about design specifications of Learn Wiremod, as you don't need to know which classes should go where if you use the templates I/we standardize on.
#### Pro for users
-  Since all the source files get compiled, the resulting JavaScript and HTML is both small in file size, and loads very fast

### The pages load as a static site at first, but transform into a [single-page application](https://medium.com/@NeotericEU/single-page-application-vs-multiple-page-application-2591588efe58) once loaded
This is one of the coolest features of Sapper, because generally you need some sort of webserver (like Node.js, Kerberos, Apache and other webservers) in order to be able to serve the website as an SPA. This approach, however, makes it possible to serve Learn Wiremod as a static web site, while still reaping the benefits of seamless transition between pages.

## Syntax highlighting
Using [highlight.js](https://highlightjs.org/), you can create your own language ruleset and color scheme. There is already a ruleset and color scheme for Expression 2, but not yet for CPU/SPU/GPU.

## Quizzing the material
People should understand what they read. Quizzes help with that. Great stuff.

## Editor with intellisense?
I don't think this is required, but if other features get implemented, this might be considered.

## Illustrating concepts with 3D using [Svelte GL](https://github.com/Rich-Harris/svelte-gl) if it ever becomes a thing?
It would be nice to use a 3D library in the tutorial to better illustrate for instance:
- what is pitch, yaw and roll?
- What do the different hologram models look like?
