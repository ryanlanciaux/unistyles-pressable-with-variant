import { StyleSheet } from 'react-native-unistyles'

const lightTheme = {
  colors: {
    primary: '#ff1ff4',
    primaryPressed: '#d919ce',
    secondary: '#1ff4ff',
    secondaryPressed: '#19cfd9'
  },
  gap: (v: number) => v * 8
}

const otherTheme = {
  colors: {
    primary: '#ff1ff4',
    primaryPressed: '#d919ce',
    secondary: '#1ff4ff',
    secondaryPressed: '#19cfd9'
  },
  gap: (v: number) => v * 8
}

const appThemes = {
  light: lightTheme,
  other: otherTheme
}

const breakpoints = {
  xs: 0,
  sm: 300,
  md: 500,
  lg: 800,
  xl: 1200
}

type AppBreakpoints = typeof breakpoints
type AppThemes = typeof appThemes

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes { }
  export interface UnistylesBreakpoints extends AppBreakpoints { }
}

StyleSheet.configure({
  settings: {
    initialTheme: 'light',
  },
  breakpoints,
  themes: appThemes
})