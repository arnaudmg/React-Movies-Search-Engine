import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      grey: string;
      white: string;
      black: string;
    };
  }
}