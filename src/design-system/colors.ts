export const colors = {
  brand: {
    primary: '#0033CC',
    dark: '#001144',
    soft: '#EEF3FF',
  },
  surface: {
    canvas: '#F7F9FC',
    raised: '#FFFFFF',
    muted: '#F1F5F9',
  },
  text: {
    primary: '#0F172A',
    secondary: '#475569',
    inverse: '#FFFFFF',
  },
  status: {
    success: '#15803D',
    warning: '#A16207',
    danger: '#B91C1C',
    info: '#0369A1',
  },
  border: '#E2E8F0',
} as const;

export type ColorToken = typeof colors;
