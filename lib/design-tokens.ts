// lib/design-tokens.ts

export const colors = {
  primary: "#D4FF00", // Electric Lime
  primaryDark: "#A3C700",
  background: "#0A0C0E", // Obsidian
  surface: "#121519", // Carbon
  onSurface: "#FFFFFF",
  secondary: "#94A3B8", // Titanium
  accent: "#FF6F00", // fallback burnt orange
};

export const spacing = {
  xs: "0.4rem",
  sm: "0.8rem",
  md: "1.6rem",
  lg: "2.4rem",
  xl: "3.2rem",
};

export const radii = {
  none: "0",
  sm: "0.2rem",
  md: "0.4rem",
  lg: "0.8rem",
  full: "9999px",
};

export const fonts = {
  display: "'Space Grotesk', sans-serif",
  body: "'Inter', sans-serif",
};

export type Colors = keyof typeof colors;
export type Spacing = keyof typeof spacing;
export type Radii = keyof typeof radii;
export type Fonts = keyof typeof fonts;
