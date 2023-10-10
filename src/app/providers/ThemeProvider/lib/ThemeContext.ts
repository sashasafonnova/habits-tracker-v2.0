import { createContext } from 'react';

export enum Theme {
   LIGHT = 'app_light_theme',
   DARK = 'app_dark_theme'
}

export interface ThemeContextProps {
   theme: Theme,
   setTheme: (theme: Theme) => void
}

const inintial = {
   theme: Theme.LIGHT,
   setTheme: (theme: Theme) => {return theme;},
};

export const ThemeContext = createContext<ThemeContextProps>(inintial);

export const LOCAL_STORAGE_THEME_KEY = 'theme';

