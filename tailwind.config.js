module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        forest: { 900: '#0a1c12', 800: '#112b1c', 700: '#1b402b' },
        gold: { 400: '#e5c158', 500: '#d4af37', 600: '#aa8c2c' },
        parchment: '#fdfbf7',
      },
      fontFamily: {
        'cursive': ['"Alex Brush"', 'cursive'],
        'serif': ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        'gold': '0 4px 14px 0 rgba(212, 175, 55, 0.39)',
        'book': '10px 10px 30px rgba(0,0,0,0.8), inset 5px 0 20px rgba(255,255,255,0.1)',
      }
    }
  }
}

