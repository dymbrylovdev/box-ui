import React, {useContext, useState} from 'react';
import {Themes} from "../constants/constants";
import {THEME_STORAGE_KEY, ThemeContext} from "../components/ThemeProvider";

interface IUseResult {
  theme: Themes,
  toggleTheme: () => void;
}

const useTheme = () : IUseResult => {
  const {theme, setTheme} = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Themes.LIGHT ?
      Themes.DARK : Themes.LIGHT;
    localStorage.setItem(THEME_STORAGE_KEY, newTheme)
    setTheme(newTheme);
  }

  return {theme, toggleTheme};
};

export default useTheme;
