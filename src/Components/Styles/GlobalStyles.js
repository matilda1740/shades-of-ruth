import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: ${({ theme }) => theme.colors.primarybackground};
  color: ${({ theme }) => theme.colors.primarytext};
  font-family: "Roboto", 'sans-serif';
  overflow-x: hidden;
}`;