
import { createGlobalStyle, css } from "styled-components";

import { color, typography } from "./styles";

export const fontUrl = "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap";

export const bodyStyles = css`
  /* Same as before */
`;

export const GlobalStyle = createGlobalStyle`
 body {
   ${ bodyStyles }
 }`;