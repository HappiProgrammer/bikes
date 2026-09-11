import type { Config } from 'tailwindcss';
import { colors, spacing, radii, fonts } from './lib/design-tokens';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './utils/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        primaryDark: colors.primaryDark,
        background: colors.background,
        surface: colors.surface,
        onSurface: colors.onSurface,
        secondary: colors.secondary,
        accent: colors.accent,
      },
      spacing: spacing,
      borderRadius: radii,
      fontFamily: {
        display: [fonts.display],
        body: [fonts.body],
      },
    },
  },
  plugins: [],
};

export default config;
