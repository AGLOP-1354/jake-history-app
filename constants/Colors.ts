/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    primary100: '#0085ff',
    primary200: '#69b4ff',
    primary300: '#e0ffff',
    accent100: '#006fff',
    accent200: '#e1ffff',
    accent300: '#d946ef',
    accent400: '#fae8ff',
    text100: '#FFFFFF',
    text200: '#9e9e9e',
    bgBlack: '#000000',
    bg100: '#1E1E1E',
    bg200: '#2d2d2d',
    bg300: '#454545',
    bg400: 'rgba(0, 0, 0, 0.1)',
    bg500: 'rgba(0, 0, 0, 0.5)',
  },
};
