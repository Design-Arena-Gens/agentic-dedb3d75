import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          pink: '#ff00ea',
          teal: '#00fff0',
          yellow: '#faff00',
        }
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']
      },
      boxShadow: {
        'neon': '0 0 10px rgba(0,255,240,0.8), 0 0 20px rgba(255,0,234,0.6)',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { textShadow: '0 0 8px #00fff0, 0 0 16px #ff00ea' },
          '50%': { textShadow: '0 0 12px #faff00, 0 0 24px #00fff0' },
        },
      },
    },
  },
  plugins: [],
}
export default config
