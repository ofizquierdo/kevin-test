const sizes = {
  desktop: 932,
  tablet: 768,
  phone: 576,
  fold: 280,
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(args)}
    }
  `;
  return acc;
}, {});

export const breakpoints = {
  sm: 20,
  md: 30,
  lg: 45,
  xl: 60,
};

export const orientation = {
  portrait: "portrait",
  landscape: "landscape",
};

export const mediaMobileQueries = (b_key, o_key) => {
  return (style) =>
    `@media screen and (min-width: ${breakpoints[b_key]}em) and (orientation: ${orientation[o_key]}) { ${style} }`;
};

export const mediaDesktopQueries = (b_key) => {
  return (style) =>
    `@media screen and (min-width: ${breakpoints[b_key]}em)  { ${style} }`;
};

/*
  Usage
  import { mediaQueries } from "./mediaQueries"

  export const Box = styled.div`
    background-color: red;
    width: 200px;
    height: 200px;
   
    ${mediaQueries("md")`
        background-color: green;
    `};
` */
