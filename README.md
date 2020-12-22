[![Netlify Status](https://api.netlify.com/api/v1/badges/4e274d51-4406-44ba-ad61-d89ee67ae0ee/deploy-status)](https://app.netlify.com/sites/learnwiremod/deploys)

# learnwiremod
A website for learning Wiremod

## Roadmap
These features are what I am trying to implement into the website:

### TailwindCSS
[TailwindCSS](https://tailwindcss.com) is a utility-first css framework. It lets you style html by composing utility classes such as `py-4` (4px padding in y direction) and `border-2`. This makes styling the website much more comfortable, instead of having to painstakingly handle specificity rules, avoid big tangled classes with bad names and other css issues.

### Scrollspy/gumshoe
A menu on the left that keeps track of where in the document you are. You can click to navigate, and it updates in real time.

### Syntax highlighting
Using [highlight.js](https://highlightjs.org/), you can create your own language ruleset and color scheme. For now there is a ruleset and color scheme for Expression 2, but not yet for CPU/SPU/GPU.

### Quizzing the material
People should understand what they read, quizzing the material at the end of each section helps with that.

### Editor with intellisense?
Maybe using [ace](https://ace.c9.io/), but I haven't looked into how to make code completion work. In a write-some-code quiz, the code would also have to be parsed and validated, which sounds quite hard.