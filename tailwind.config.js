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
        "content": "minmax(200px, max-content) 384px 1fr"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [],
}
