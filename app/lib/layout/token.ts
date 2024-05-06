export const BLUE_HUE = 211;
export const RED_HUE = 346;
export const GREEN_HUE = 152;

/**
 * Smooth progression of lightness "stops" for generating HSL colors.
 */
export const COLOR_STOPS = [
  0, 0.05, 0.1, 0.15, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.85, 0.9, 0.95, 1,
];

export function generateScale(start: number, end: number) {
  const range = end - start;
  return COLOR_STOPS.map(stop => {
    return start + range * stop;
  });
}

export const scale = generateScale(6, 100);
// dim shifted 6% lighter
export const dimScale = generateScale(12, 100);
const PRIMARY = '#647FFF';
const SECONDARY = '#434343';

const TEXT_LIGHT = '#FFFFFF';
const TEXT_GRAY = '#FFFFFFF0';

const SUCCESS = '#91E2B7';
const WARNING = '#E3A063';
const ERROR = '#E05151';

export const color = {
  PRIMARY,
  SECONDARY,
  TEXT_LIGHT,
  TEXT_GRAY,
  SUCCESS,
  WARNING,
  ERROR,
} as const;

export const space = {
  _2xs: 2,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  _2xl: 24,
  _3xl: 28,
  _4xl: 32,
  _5xl: 40,
} as const;

export const fontSize = {
  _2xs: 10,
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  _2xl: 22,
  _3xl: 26,
  _4xl: 32,
  _5xl: 40,
} as const;

export const lineHeight = {
  none: 1,
  normal: 1.5,
  relaxed: 1.625,
} as const;

export const borderRadius = {
  _2xs: 2,
  xs: 4,
  sm: 8,
  md: 12,
  full: 999,
} as const;

export const fontWeight = {
  normal: '400',
  semibold: '500',
  bold: '600',
} as const;

export const gradients = {
  sky: {
    values: [
      [0, '#0A7AFF'],
      [1, '#59B9FF'],
    ],
    hover_value: '#0A7AFF',
  },
  midnight: {
    values: [
      [0, '#022C5E'],
      [1, '#4079BC'],
    ],
    hover_value: '#022C5E',
  },
  sunrise: {
    values: [
      [0, '#4E90AE'],
      [0.4, '#AEA3AB'],
      [0.8, '#E6A98F'],
      [1, '#F3A84C'],
    ],
    hover_value: '#AEA3AB',
  },
  sunset: {
    values: [
      [0, '#6772AF'],
      [0.6, '#B88BB6'],
      [1, '#FFA6AC'],
    ],
    hover_value: '#B88BB6',
  },
  summer: {
    values: [
      [0, '#FF6A56'],
      [0.3, '#FF9156'],
      [1, '#FFDD87'],
    ],
    hover_value: '#FF9156',
  },
  nordic: {
    values: [
      [0, '#083367'],
      [1, '#9EE8C1'],
    ],
    hover_value: '#3A7085',
  },
  bonfire: {
    values: [
      [0, '#203E4E'],
      [0.4, '#755B62'],
      [0.8, '#CD7765'],
      [1, '#EF956E'],
    ],
    hover_value: '#755B62',
  },
} as const;

export type Color = keyof typeof color;
export type Space = keyof typeof space;
export type FontSize = keyof typeof fontSize;
export type LineHeight = keyof typeof lineHeight;
export type BorderRadius = keyof typeof borderRadius;
export type FontWeight = keyof typeof fontWeight;
