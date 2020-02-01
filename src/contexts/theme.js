import React from "react"
import { ThemeProvider } from "styled-components"
import { useStateValue } from "./state"
import { themes } from "../config/themes"

export const AppThemeProvider = ({ children }) => {
  const [theme] = useStateValue()

  return <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>
}