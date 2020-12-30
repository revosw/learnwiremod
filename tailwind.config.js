module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      'public/*.html'
    ]
  },
  darkMode: "class",
  theme: {
    extend: {
      gridTemplateColumns: {
        "main-layout": "260px 1fr",
        "section": "450px 1fr"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [],
}
