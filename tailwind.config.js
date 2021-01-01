module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      'public/*.html'
    ]
  },
  theme: {
    extend: {
      gridTemplateColumns: {
        "main-layout": "260px 1fr 20px",
        "section": "450px 1fr"
      },
      colors: {
        darkgray: "#212121"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [],
}
